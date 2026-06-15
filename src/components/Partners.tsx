import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { AnimatedSection } from './AnimatedSection';

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const testimonials = [
    '"Everybody asked me the video... Your work is fantastic." — Rikka Joias',
    '"Excellent, thank you. It\'s perfect now." — Our AI Clinics',
    '"I DON\'T DO ORDINARY. I MAKE THE IMPOSSIBLE, INEVITABLE."',
    '"Assigned a simple quiz, built a fully-featured reality show." — Yellow Mellow',
  ];

  return (
    <section ref={containerRef} className="w-full py-32 flex flex-col relative z-10 border-t border-white/10 overflow-hidden bg-brand-black" id="partners">
      <AnimatedSection className="mb-24 flex flex-col items-start relative px-8 lg:px-24">
        <div className="absolute left-[-20px] top-4 text-brand-cyan text-sm hidden lg:block -rotate-90 origin-left tracking-widest uppercase">
          // TESTIMONIALS (02)
        </div>
        <div className="flex items-start gap-4">
          <h2 className="font-grotesk text-[60px] lg:text-[140px] leading-[0.85] font-black tracking-tighter uppercase text-white">
            ECHOES
          </h2>
          <span className="text-brand-cyan text-2xl font-bold mt-4">.</span>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-12 w-[300vw] mt-12 relative -left-[50vw]">
        <motion.div style={{ x: x1 }} className="flex gap-16 whitespace-nowrap will-change-transform">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={`row1-${i}`} className="text-xl md:text-5xl font-mono text-brand-pink tracking-widest uppercase text-outline">
              {t} <span className="text-brand-cyan mx-8">•</span>
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-16 whitespace-nowrap will-change-transform">
          {[...testimonials, ...testimonials, ...testimonials].reverse().map((t, i) => (
            <div key={`row2-${i}`} className="text-xl md:text-5xl font-mono text-brand-cyan tracking-widest uppercase">
              {t} <span className="text-brand-pink mx-8">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
