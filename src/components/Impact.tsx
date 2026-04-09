import { CheckCircle2, Users2 } from "lucide-react";

export default function Impact() {
  return (
    <section className="px-6 pb-24 bg-surface-container-low" id="impact">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface p-10 md:p-16 rounded-[3rem] border border-white/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Last Season&apos;s Impact</h2>
              <p className="text-on-surface-variant mb-10 leading-relaxed">
                Our previous series of &quot;Solidity Summits&quot; brought together the brightest minds in Southeast
                Asia to solve scaling bottlenecks. The results speak for themselves.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-primary border border-primary/20">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">14 OSS Projects</h4>
                    <p className="text-sm text-on-surface-variant">Founded during our monthly hackathons.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary border border-secondary/20">
                    <Users2 size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">2.5k Attendees</h4>
                    <p className="text-sm text-on-surface-variant">Across 12 regional meetups in Q1-Q3.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full"></div>
              <img
                className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL9lSxLw4bCg1ppaiVae82S9wXlXf6P_t-6Q6h9PW-vAIuCoYZRlJ-XgGQ2_Rco264ct3htY8y3JvY2TkOvxCjIdSlBPtwnxyfLu3y87reo9UADzKg_r7p2hD_m7HGztKXzU0MXoGqOF-HNnqy3nvU3eEJdER-Y2XQpslAT-YaLS6M5Sv-N58ZSXNqogENIzzz_Kr8Um-_qp0uzMkpg4Ue9QMeI48kK8gNrsyAIRgFsIGrbxhhWbRucP114BBJH4Wk2towSU4Leayx"
                alt="Developers working"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
