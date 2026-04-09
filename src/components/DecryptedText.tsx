import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";

type AnimateOnMode = "hover" | "view";
type RevealDirection = "start" | "end" | "center";

type DecryptedTextProps = {
  text: string;
  triggerKey?: string | number;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: RevealDirection;
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: AnimateOnMode;
};

const styles = {
  wrapper: {
    display: "inline-block",
    whiteSpace: "pre-wrap",
  },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
  },
} as const;

export default function DecryptedText({
  text,
  triggerKey,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef<HTMLSpanElement | null>(null);

  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
      : characters.split("");
  }, [useOriginalCharsOnly, text, characters]);

  const shuffleText = useCallback(
    (originalText: string, currentRevealed: Set<number>) => {
      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join("");
    },
    [availableChars]
  );

  useEffect(() => {
    if (!isAnimating) return;

    let currentIteration = 0;
    const interval = window.setInterval(() => {
      setRevealedIndices((prevRevealed) => {
        if (sequential) {
          const textLength = text.length;
          let nextIndex = prevRevealed.size;

          if (revealDirection === "end") {
            nextIndex = textLength - 1 - prevRevealed.size;
          } else if (revealDirection === "center") {
            const middle = Math.floor(textLength / 2);
            const offset = Math.floor(prevRevealed.size / 2);
            nextIndex = prevRevealed.size % 2 === 0 ? middle + offset : middle - offset - 1;
          }

          const newRevealed = new Set(prevRevealed);
          if (nextIndex >= 0 && nextIndex < textLength) {
            newRevealed.add(nextIndex);
          }
          setDisplayText(shuffleText(text, newRevealed));

          if (newRevealed.size >= textLength) {
            window.clearInterval(interval);
            setIsAnimating(false);
            setDisplayText(text);
          }

          return newRevealed;
        }

        setDisplayText(shuffleText(text, prevRevealed));
        currentIteration += 1;

        if (currentIteration >= maxIterations) {
          window.clearInterval(interval);
          setIsAnimating(false);
          setDisplayText(text);
        }
        return prevRevealed;
      });
    }, speed);

    return () => window.clearInterval(interval);
  }, [isAnimating, maxIterations, revealDirection, sequential, shuffleText, speed, text]);

  const triggerDecrypt = useCallback(() => {
    setRevealedIndices(new Set());
    setIsAnimating(true);
  }, []);

  const resetToPlainText = useCallback(() => {
    setIsAnimating(false);
    setRevealedIndices(new Set());
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    if (animateOn !== "view") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            triggerDecrypt();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn, hasAnimated, triggerDecrypt]);

  useEffect(() => {
    setDisplayText(text);
    setRevealedIndices(new Set());
    setHasAnimated(false);
  }, [text, triggerKey]);

  const animateProps =
    animateOn === "hover"
      ? {
          onMouseEnter: triggerDecrypt,
          onMouseLeave: resetToPlainText,
        }
      : {};

  return (
    <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...animateProps}>
      <span style={styles.srOnly}>{text}</span>
      <span aria-hidden="true">
        {displayText.split("").map((char, index) => {
          const isRevealedOrDone = revealedIndices.has(index) || !isAnimating;
          return (
            <span key={`${char}-${index}`} className={isRevealedOrDone ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
