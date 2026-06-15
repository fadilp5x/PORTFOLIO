import { ArrowUpRight, Play } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { TypewriterText } from './TypewriterText';

export default function Hero() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center pt-32 px-8 relative bg-brand-black text-white font-mono overflow-hidden" id="home">
      <AnimatedSection className="w-full max-w-[1600px] mx-auto z-0 flex flex-col items-start leading-[0.8] tracking-tighter mt-12 md:mt-0">
        <div className="flex items-start">
          <TypewriterText text="GENERATIVE" delay={0.2} className="font-grotesk text-[14vw] xl:text-[12vw] font-black uppercase text-white m-0 p-0" />
          <TypewriterText text="AI" delay={1.2} className="font-grotesk text-[14vw] xl:text-[12vw] font-black uppercase text-brand-pink m-0 p-0 ml-4 lg:ml-6" />
          <span className="text-brand-pink font-mono text-sm ml-4 mt-8 hidden md:block">(01)</span>
        </div>
        <TypewriterText text="PRODUCER" delay={1.8} className="font-grotesk text-[14vw] xl:text-[12vw] font-black uppercase text-white m-0 p-0 mt-2 lg:mt-4" />
      </AnimatedSection>

      <AnimatedSection className="w-full max-w-[1600px] mx-auto relative mt-12 md:mt-[-4vw] z-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0" delay={0.2}>
        <div className="w-full lg:w-64 flex flex-col gap-8 lg:order-1 order-2">
          <div className="w-8 h-8 relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-brand-muted"></div>
              <div className="h-full w-px bg-brand-muted absolute"></div>
            </div>
          </div>
          <p className="text-[10px] md:text-xs text-brand-muted leading-loose uppercase">
            I AM AN 18-YEAR-OLD<br />
            GENERATIVE AI PRODUCER,<br />
            AI VIDEO CREATOR, AND<br />
            CYBERSECURITY ANALYST<br />
            BASED IN CALICUT,<br />
            KERALA, INDIA.<br /><br />
            <span className="text-brand-cyan">I DON'T DO ORDINARY.<br />
            I MAKE THE IMPOSSIBLE,<br />
            INEVITABLE.</span>
          </p>
          <div className="flex items-center gap-4 mt-4 cursor-pointer group w-max">
            <span className="text-xs uppercase text-white group-hover:text-brand-cyan transition-colors">VIEW WORK</span>
            <div className="w-8 h-8 rounded-full bg-brand-cyan text-brand-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-4 h-4 font-bold" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-8 hidden lg:flex">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-2 h-px bg-brand-muted"></div>
            ))}
            <div className="w-2 h-px bg-brand-cyan"></div>
          </div>
        </div>

        <div className="w-full lg:max-w-4xl order-1 lg:order-2">
          <div className="relative w-full aspect-video rounded-xl bg-[#111111]/60 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden p-2 md:p-4 group brutal-box">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              <iframe 
                allow="autoplay; fullscreen; picture-in-picture" 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                src="https://player.vimeo.com/video/1200850778?background=1&autoplay=1&loop=1&byline=0&title=0"
              ></iframe>
              
              <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 pointer-events-none">
                <div className="flex justify-between items-start w-full text-[10px] md:text-xs text-white font-mono">
                  <span className="opacity-80 tracking-widest">PLAY REEL<br /><span className="opacity-50 mt-1 block">2026</span></span>
                  <div className="text-right opacity-80 tracking-widest hidden md:block">
                    <span>AI FILM</span><br />
                    <span className="opacity-50">GENERATIVE</span><br />
                    <span className="opacity-50">EXPERIMENTAL</span>
                  </div>
                  <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-brand-pink hidden md:block"></div>
                </div>

                <div className="flex items-center gap-4 w-full mt-auto">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white/20 transition-colors border border-white/20">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                  <div className="flex-grow flex flex-col gap-2">
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden relative">
                      <div className="w-1/3 h-full bg-brand-cyan absolute left-0 top-0"></div>
                      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#00ff9d]"></div>
                    </div>
                  </div>
                  <span className="text-[10px] md:text-xs text-white opacity-80 font-mono">01:28</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-64 flex flex-col items-start lg:items-end gap-12 lg:gap-16 text-left lg:text-right order-3">
          <div className="relative w-32 h-32 rounded-full border border-white/5 hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-t border-brand-muted/30 animate-spin-slow"></div>
            <div className="text-center flex flex-col font-mono tracking-widest">
              <span className="text-brand-pink text-xs font-bold">AWWWARDS</span>
              <span className="text-white text-[10px] mt-1">2025</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center w-full font-mono">
              <span className="text-xs text-brand-muted uppercase tracking-widest">SELECTED PROJECT</span>
              <span className="text-brand-pink text-xs">(02)</span>
            </div>
            <h3 className="font-grotesk text-2xl lg:text-3xl font-medium text-white uppercase leading-tight tracking-tight">ECHOES OF<br />TOMORROW</h3>
            <p className="text-[10px] lg:text-xs text-brand-muted uppercase leading-loose tracking-widest font-mono">AI FILM / WORLD BUILDING /<br />SOUND DESIGN</p>
            <div className="flex items-center justify-start lg:justify-end gap-4 mt-4 cursor-pointer group w-max lg:ml-auto">
              <span className="text-xs uppercase text-white font-mono tracking-widest group-hover:text-brand-cyan transition-colors">VIEW PROJECT</span>
              <div className="w-8 h-8 rounded-full bg-brand-cyan text-brand-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 font-bold" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full max-w-[1600px] mx-auto mt-24 flex flex-col md:flex-row justify-between items-center pb-12 relative gap-12 md:gap-0" delay={0.4}>
        <div className="font-grotesk text-[20vw] md:text-[12vw] text-outline leading-none absolute md:relative left-0 top-12 md:top-0 opacity-50 md:opacity-100 pointer-events-none select-none z-0">10</div>
        
        <div className="flex flex-col items-center gap-8 z-10 w-full md:max-w-3xl px-0 md:px-8">
          <div className="w-full flex items-center gap-4 text-[10px] md:text-xs font-mono">
            <div className="w-2 h-px bg-brand-pink hidden md:block"></div>
            <span className="text-white uppercase tracking-widest whitespace-nowrap text-center w-full md:w-auto">10 YEARS OF EXPERIENCE</span>
            <div className="flex-grow h-px bg-white/10 hidden md:block"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full text-[10px] md:text-xs gap-8 font-mono">
            <p className="text-brand-muted uppercase leading-loose md:max-w-xs text-center md:text-left tracking-widest">
              HELPING BRANDS AND STUDIOS CREATE MEANINGFUL CONNECTIONS THROUGH INNOVATIVE DIGITAL SOLUTIONS.
            </p>
            <div className="flex flex-col gap-3 text-brand-muted uppercase tracking-widest text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4"><span className="text-brand-cyan w-8">(01)</span> <span className="text-white">DIGITAL DESIGN</span></div>
              <div className="flex items-center justify-center md:justify-start gap-4"><span className="text-brand-cyan w-8">(02)</span> <span>CREATIVE DIRECTION</span></div>
              <div className="flex items-center justify-center md:justify-start gap-4"><span className="text-brand-cyan w-8">(03)</span> <span>AI & GENERATIVE ART</span></div>
              <div className="flex items-center justify-center md:justify-start gap-4"><span className="text-brand-cyan w-8">(04)</span> <span>INTERACTIVE EXPERIENCE</span></div>
              <div className="flex items-center justify-center md:justify-start gap-4"><span className="text-brand-cyan w-8">(05)</span> <span>MOTION & FILM</span></div>
            </div>
          </div>
        </div>

        <div className="font-grotesk text-[20vw] md:text-[12vw] text-outline leading-none absolute md:relative right-0 top-12 md:top-0 opacity-50 md:opacity-100 pointer-events-none select-none z-0">26</div>
      </AnimatedSection>
    </main>
  );
}
