import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;
    float waveFactor = uEnableWaves;
    vec3 transformed = position;
    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;

const mapRange = (n: number, start: number, stop: number, start2: number, stop2: number) =>
  ((n - start) / (stop - start)) * (stop2 - start2) + start2;

const pxRatio = typeof window !== "undefined" ? window.devicePixelRatio : 1;

type AsciiFilterOptions = {
  fontSize?: number;
  fontFamily?: string;
  charset?: string;
  invert?: boolean;
};

class AsciiFilter {
  renderer: THREE.WebGLRenderer;
  domElement: HTMLDivElement;
  pre: HTMLPreElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  deg = 0;
  invert: boolean;
  fontSize: number;
  fontFamily: string;
  charset: string;
  width = 0;
  height = 0;
  cols = 0;
  rows = 0;
  center = { x: 0, y: 0 };
  mouse = { x: 0, y: 0 };

  constructor(renderer: THREE.WebGLRenderer, options: AsciiFilterOptions = {}) {
    this.renderer = renderer;
    this.invert = options.invert ?? true;
    this.fontSize = options.fontSize ?? 12;
    this.fontFamily = options.fontFamily ?? "'Courier New', monospace";
    this.charset =
      options.charset ??
      " .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

    this.domElement = document.createElement("div");
    this.domElement.style.position = "absolute";
    this.domElement.style.top = "0";
    this.domElement.style.left = "0";
    this.domElement.style.width = "100%";
    this.domElement.style.height = "100%";
    this.domElement.style.pointerEvents = "none";

    this.pre = document.createElement("pre");
    this.domElement.appendChild(this.pre);

    this.canvas = document.createElement("canvas");
    const context = this.canvas.getContext("2d");
    if (!context) throw new Error("Canvas context unavailable");
    this.context = context;
    this.domElement.appendChild(this.canvas);

    (this.context as CanvasRenderingContext2D & Record<string, boolean>).webkitImageSmoothingEnabled = false;
    (this.context as CanvasRenderingContext2D & Record<string, boolean>).mozImageSmoothingEnabled = false;
    (this.context as CanvasRenderingContext2D & Record<string, boolean>).msImageSmoothingEnabled = false;
    this.context.imageSmoothingEnabled = false;

    this.onMouseMove = this.onMouseMove.bind(this);
    document.addEventListener("mousemove", this.onMouseMove);
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.renderer.setSize(width, height);
    this.reset();
    this.center = { x: width / 2, y: height / 2 };
    this.mouse = { x: this.center.x, y: this.center.y };
  }

  reset() {
    this.context.font = `${this.fontSize}px ${this.fontFamily}`;
    const charWidth = this.context.measureText("A").width;
    this.cols = Math.floor(this.width / (this.fontSize * (charWidth / this.fontSize)));
    this.rows = Math.floor(this.height / this.fontSize);
    this.canvas.width = Math.max(1, this.cols);
    this.canvas.height = Math.max(1, this.rows);

    this.pre.style.fontFamily = this.fontFamily;
    this.pre.style.fontSize = `${this.fontSize}px`;
    this.pre.style.margin = "0";
    this.pre.style.padding = "0";
    this.pre.style.lineHeight = "1em";
    this.pre.style.position = "absolute";
    this.pre.style.left = "0";
    this.pre.style.top = "0";
    this.pre.style.zIndex = "9";
    this.pre.style.backgroundAttachment = "fixed";
    this.pre.style.mixBlendMode = "difference";
  }

  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.renderer.render(scene, camera);
    const w = this.canvas.width;
    const h = this.canvas.height;
    this.context.clearRect(0, 0, w, h);
    if (w && h) {
      this.context.drawImage(this.renderer.domElement, 0, 0, w, h);
      this.asciify(this.context, w, h);
      this.hue();
    }
  }

  onMouseMove(e: MouseEvent) {
    this.mouse = { x: e.clientX * pxRatio, y: e.clientY * pxRatio };
  }

  get dx() {
    return this.mouse.x - this.center.x;
  }

  get dy() {
    return this.mouse.y - this.center.y;
  }

  hue() {
    const deg = (Math.atan2(this.dy, this.dx) * 180) / Math.PI;
    this.deg += (deg - this.deg) * 0.075;
    this.domElement.style.filter = `hue-rotate(${this.deg.toFixed(1)}deg)`;
  }

  asciify(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const imgData = ctx.getImageData(0, 0, w, h).data;
    let str = "";
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = x * 4 + y * 4 * w;
        const r = imgData[i];
        const g = imgData[i + 1];
        const b = imgData[i + 2];
        const a = imgData[i + 3];
        if (a === 0) {
          str += " ";
          continue;
        }
        const gray = (0.3 * r + 0.6 * g + 0.1 * b) / 255;
        let idx = Math.floor((1 - gray) * (this.charset.length - 1));
        if (this.invert) idx = this.charset.length - idx - 1;
        str += this.charset[idx];
      }
      str += "\n";
    }
    this.pre.innerHTML = str;
  }

  dispose() {
    document.removeEventListener("mousemove", this.onMouseMove);
  }
}

type CanvasTxtOptions = {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
};

class CanvasTxt {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  txt: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  font: string;

  constructor(txt: string, options: CanvasTxtOptions = {}) {
    this.canvas = document.createElement("canvas");
    const context = this.canvas.getContext("2d");
    if (!context) throw new Error("Canvas context unavailable");
    this.context = context;
    this.txt = txt;
    this.fontSize = options.fontSize ?? 200;
    this.fontFamily = options.fontFamily ?? "Arial";
    this.color = options.color ?? "#fdf9f3";
    this.font = `600 ${this.fontSize}px ${this.fontFamily}`;
  }

  resize() {
    this.context.font = this.font;
    const metrics = this.context.measureText(this.txt);
    this.canvas.width = Math.ceil(metrics.width) + 20;
    this.canvas.height = Math.ceil(metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent) + 20;
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = this.color;
    this.context.font = this.font;
    const metrics = this.context.measureText(this.txt);
    this.context.fillText(this.txt, 10, 10 + metrics.actualBoundingBoxAscent);
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }

  get texture() {
    return this.canvas;
  }
}

type CanvAsciiConfig = {
  text: string;
  asciiFontSize: number;
  textFontSize: number;
  textColor: string;
  planeBaseHeight: number;
  enableWaves: boolean;
};

class CanvAscii {
  textString: string;
  asciiFontSize: number;
  textFontSize: number;
  textColor: string;
  planeBaseHeight: number;
  container: HTMLDivElement;
  width: number;
  height: number;
  enableWaves: boolean;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  mouse: { x: number; y: number };
  onMouseMove: (evt: MouseEvent | TouchEvent) => void;
  textCanvas!: CanvasTxt;
  texture!: THREE.CanvasTexture;
  geometry!: THREE.PlaneGeometry;
  material!: THREE.ShaderMaterial;
  mesh!: THREE.Mesh;
  renderer!: THREE.WebGLRenderer;
  filter!: AsciiFilter;
  animationFrameId = 0;

  constructor(config: CanvAsciiConfig, container: HTMLDivElement, width: number, height: number) {
    this.textString = config.text;
    this.asciiFontSize = config.asciiFontSize;
    this.textFontSize = config.textFontSize;
    this.textColor = config.textColor;
    this.planeBaseHeight = config.planeBaseHeight;
    this.enableWaves = config.enableWaves;
    this.container = container;
    this.width = width;
    this.height = height;
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
    this.camera.position.z = 30;
    this.scene = new THREE.Scene();
    this.mouse = { x: this.width / 2, y: this.height / 2 };
    this.onMouseMove = this.handleMouseMove.bind(this);
  }

  async init() {
    try {
      await document.fonts.load('600 200px "IBM Plex Mono"');
      await document.fonts.load('500 12px "IBM Plex Mono"');
    } catch {
      // fallback fonts
    }
    await document.fonts.ready;
    this.setMesh();
    this.setRenderer();
  }

  setMesh() {
    this.textCanvas = new CanvasTxt(this.textString, {
      fontSize: this.textFontSize,
      fontFamily: "IBM Plex Mono",
      color: this.textColor,
    });
    this.textCanvas.resize();
    this.textCanvas.render();
    this.texture = new THREE.CanvasTexture(this.textCanvas.texture);
    this.texture.minFilter = THREE.NearestFilter;
    const textAspect = this.textCanvas.width / this.textCanvas.height;
    const planeH = this.planeBaseHeight;
    const planeW = planeH * textAspect;
    this.geometry = new THREE.PlaneGeometry(planeW, planeH, 36, 36);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        mouse: { value: 1.0 },
        uTexture: { value: this.texture },
        uEnableWaves: { value: this.enableWaves ? 1.0 : 0.0 },
      },
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor(0x000000, 0);
    this.filter = new AsciiFilter(this.renderer, {
      fontFamily: "IBM Plex Mono",
      fontSize: this.asciiFontSize,
      invert: true,
    });
    this.container.appendChild(this.filter.domElement);
    this.setSize(this.width, this.height);
    this.container.addEventListener("mousemove", this.onMouseMove);
    this.container.addEventListener("touchmove", this.onMouseMove, { passive: true });
  }

  setSize(w: number, h: number) {
    this.width = w;
    this.height = h;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.filter.setSize(w, h);
  }

  load() {
    const tick = () => {
      this.animationFrameId = requestAnimationFrame(tick);
      this.render();
    };
    tick();
  }

  handleMouseMove(evt: MouseEvent | TouchEvent) {
    const e = "touches" in evt ? evt.touches[0] : evt;
    const bounds = this.container.getBoundingClientRect();
    this.mouse = { x: e.clientX - bounds.left, y: e.clientY - bounds.top };
  }

  render() {
    const time = Date.now() * 0.001;
    this.textCanvas.render();
    this.texture.needsUpdate = true;
    this.mesh.material.uniforms.uTime.value = Math.sin(time);
    const x = mapRange(this.mouse.y, 0, this.height || 1, 0.5, -0.5);
    const y = mapRange(this.mouse.x, 0, this.width || 1, -0.5, 0.5);
    this.mesh.rotation.x += (x - this.mesh.rotation.x) * 0.05;
    this.mesh.rotation.y += (y - this.mesh.rotation.y) * 0.05;
    this.filter.render(this.scene, this.camera);
  }

  clear() {
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry?.dispose();
        if (obj.material instanceof THREE.Material) {
          obj.material.dispose();
        }
      }
    });
    this.scene.clear();
  }

  dispose() {
    cancelAnimationFrame(this.animationFrameId);
    this.filter?.dispose();
    if (this.filter?.domElement.parentNode) {
      this.container.removeChild(this.filter.domElement);
    }
    this.container.removeEventListener("mousemove", this.onMouseMove);
    this.container.removeEventListener("touchmove", this.onMouseMove);
    this.clear();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.texture?.dispose();
  }
}

type ASCIITextProps = {
  text: string;
  asciiFontSize?: number;
  textFontSize?: number;
  textColor?: string;
  planeBaseHeight?: number;
  enableWaves?: boolean;
  className?: string;
};

export default function ASCIIText({
  text,
  asciiFontSize = 8,
  textFontSize = 200,
  textColor = "#fdf9f3",
  planeBaseHeight = 8,
  enableWaves = true,
  className = "",
}: ASCIITextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const asciiRef = useRef<CanvAscii | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let resizeObserver: ResizeObserver | null = null;

    const createInstance = async (w: number, h: number) => {
      const instance = new CanvAscii(
        { text, asciiFontSize, textFontSize, textColor, planeBaseHeight, enableWaves },
        container,
        w,
        h
      );
      await instance.init();
      return instance;
    };

    const setup = async () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) {
        observer = new IntersectionObserver(
          async ([entry]) => {
            if (cancelled) return;
            if (entry.isIntersecting && entry.boundingClientRect.width > 0 && entry.boundingClientRect.height > 0) {
              observer?.disconnect();
              observer = null;
              const instance = await createInstance(entry.boundingClientRect.width, entry.boundingClientRect.height);
              if (!cancelled) {
                asciiRef.current = instance;
                instance.load();
              } else {
                instance.dispose();
              }
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(container);
        return;
      }

      const instance = await createInstance(width, height);
      if (cancelled) {
        instance.dispose();
        return;
      }
      asciiRef.current = instance;
      instance.load();
      resizeObserver = new ResizeObserver((entries) => {
        const rect = entries[0]?.contentRect;
        if (!rect || !asciiRef.current) return;
        if (rect.width > 0 && rect.height > 0) {
          asciiRef.current.setSize(rect.width, rect.height);
        }
      });
      resizeObserver.observe(container);
    };

    setup();

    return () => {
      cancelled = true;
      observer?.disconnect();
      resizeObserver?.disconnect();
      asciiRef.current?.dispose();
      asciiRef.current = null;
    };
  }, [text, asciiFontSize, textFontSize, textColor, planeBaseHeight, enableWaves]);

  return (
    <div ref={containerRef} className={`ascii-text-container ${className}`} style={{ position: "absolute", inset: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&display=swap');
        .ascii-text-container canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
        }
        .ascii-text-container pre {
          margin: 0;
          user-select: none;
          padding: 0;
          line-height: 1em;
          text-align: center;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          color: #d8d2ff;
          z-index: 9;
          mix-blend-mode: screen;
        }
      `}</style>
    </div>
  );
}
