import { ArrowRight, Check, ChevronDown, Send } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export default function ContactForm() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 flex flex-col gap-16 border-t border-white/10" id="contact">
      <AnimatedSection className="max-w-4xl flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <div className="text-brand-cyan font-mono text-sm mb-4 tracking-widest">// THE GATEWAY <span className="text-brand-pink">(05)</span></div>
          <h2 className="font-grotesk text-[60px] leading-[60px] md:text-[100px] md:leading-[90px] uppercase font-black text-white tracking-tighter">
            LET'S BUILD<br />THE FUTURE<span className="text-brand-pink">.</span>
          </h2>
        </div>
        <div className="md:w-1/3 pt-12 md:pt-16 font-mono text-sm text-brand-muted leading-relaxed">
          <p>Select your mission.<br />Initiate the connection.<br />Let's create something<br />extraordinary.</p>
        </div>
        <div className="hidden md:block w-64 p-4 border border-white/10 rounded-lg font-mono text-[10px] text-brand-cyan leading-loose mt-12 bg-[#0a0a0a]">
          <div>&gt; CONNECTION SECURE</div>
          <div>&gt; ENCRYPTION: AES-256</div>
          <div>&gt; STATUS: READY</div>
          <div className="w-full h-px bg-brand-cyan/30 mt-4 relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-brand-cyan"></div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-8">
          <span className="font-mono text-white text-sm">01.</span>
          <span className="font-mono text-white text-xs tracking-widest uppercase">Select Service</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="service-card group text-left border neon-pink-border p-6 rounded-lg transition-all duration-300 relative overflow-hidden flex flex-col gap-6">
            <div className="flex justify-between items-start w-full">
              <h3 className="font-mono text-lg text-brand-pink tracking-widest uppercase glow-text-pink">AI Content Production</h3>
              <span className="text-brand-pink text-xs font-mono">(01)</span>
            </div>
            <p className="font-mono text-sm text-brand-muted h-20">AI films, shorts, and visuals that captivate and convert.</p>
            <div className="flex flex-col gap-2 text-xs font-mono text-white/50">
              <div>&gt; AI FILM & VIDEO</div>
              <div>&gt; AI MUSIC & SOUND</div>
              <div>&gt; VISUAL DESIGN</div>
            </div>
            <div className="mt-8 pt-4 border-t border-brand-pink/30 flex justify-between items-center text-brand-pink font-mono text-sm">
              <span>SELECT SERVICE</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
          <button className="service-card group text-left border neon-cyan-border p-6 rounded-lg transition-all duration-300 relative overflow-hidden flex flex-col gap-6">
            <div className="flex justify-between items-start w-full">
              <h3 className="font-mono text-lg text-brand-cyan tracking-widest uppercase glow-text-cyan">Consulting / Cyber</h3>
              <span className="text-brand-cyan text-xs font-mono">(02)</span>
            </div>
            <p className="font-mono text-sm text-brand-muted h-20">Cybersecurity, AI strategy, and digital protection consulting.</p>
            <div className="flex flex-col gap-2 text-xs font-mono text-white/50">
              <div>&gt; CYBERSECURITY AUDIT</div>
              <div>&gt; AI STRATEGY</div>
              <div>&gt; SYSTEM HARDENING</div>
            </div>
            <div className="mt-8 pt-4 border-t border-brand-cyan/30 flex justify-between items-center text-brand-cyan font-mono text-sm">
              <span>SELECT SERVICE</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
          <button className="service-card group text-left border neon-cyan-border p-6 rounded-lg transition-all duration-300 relative overflow-hidden flex flex-col gap-6">
            <div className="flex justify-between items-start w-full">
              <h3 className="font-mono text-lg text-brand-cyan tracking-widest uppercase glow-text-cyan">Custom Project</h3>
              <span className="text-brand-cyan text-xs font-mono">(03)</span>
            </div>
            <p className="font-mono text-sm text-brand-muted h-20">Bespoke solutions built for unique challenges.</p>
            <div className="flex flex-col gap-2 text-xs font-mono text-white/50">
              <div>&gt; CUSTOM AI MODELS</div>
              <div>&gt; AUTOMATION SYSTEMS</div>
              <div>&gt; FULL STACK SOLUTIONS</div>
            </div>
            <div className="mt-8 pt-4 border-t border-brand-cyan/30 flex justify-between items-center text-brand-cyan font-mono text-sm">
              <span>SELECT SERVICE</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-8">
          <span className="font-mono text-white text-sm">02.</span>
          <span className="font-mono text-white text-xs tracking-widest uppercase">Initiate Contact</span>
        </div>
        <div className="border border-white/10 rounded-xl p-8 bg-[#0a0a0a] flex flex-col md:flex-row gap-12 relative overflow-hidden">
          <div className="md:w-1/3 flex flex-col justify-between relative z-10">
            <div>
              <h3 className="text-2xl font-mono text-white mb-6 flex items-center gap-2">
                <span className="text-brand-cyan">&gt;</span> LET'S CONNECT_
              </h3>
              <p className="font-mono text-sm text-brand-muted leading-loose">
                Fill in the details below.<br />We'll handle the rest.
              </p>
            </div>
            <div className="hidden md:block w-32 h-32 border border-brand-pink/20 rounded-full blur-xl absolute -bottom-10 -left-10 bg-brand-pink/10"></div>
          </div>
          
          <form className="flex-1 flex flex-col gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-brand-cyan uppercase tracking-widest" htmlFor="name">NAME</label>
                <div className="relative">
                  <input className="w-full rounded-md p-4 text-sm font-mono bg-transparent border border-brand-cyan text-brand-cyan focus:ring-brand-cyan focus:outline-none placeholder-brand-cyan/30" id="name" name="name" placeholder="John Doe" required type="text" />
                  <Check className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-cyan w-4 h-4" />
                </div>
                <span className="text-[10px] text-brand-cyan font-mono mt-1">Valid name.</span>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-brand-cyan uppercase tracking-widest" htmlFor="email">EMAIL</label>
                <div className="relative">
                  <input className="w-full rounded-md p-4 text-sm font-mono bg-transparent border border-brand-cyan text-brand-cyan focus:ring-brand-cyan focus:outline-none placeholder-brand-cyan/30" id="email" name="email" placeholder="john@domain.com" required type="email" />
                  <Check className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-cyan w-4 h-4" />
                </div>
                <span className="text-[10px] text-brand-cyan font-mono mt-1">Valid email address.</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col gap-2 w-full order-last md:order-none">
                <label className="font-mono text-xs text-brand-cyan uppercase tracking-widest" htmlFor="brief">PROJECT BRIEF</label>
                <div className="relative">
                  <textarea className="w-full rounded-md p-4 text-sm font-mono resize-none bg-transparent border border-brand-cyan text-brand-cyan focus:ring-brand-cyan focus:outline-none placeholder-brand-cyan/30" id="brief" name="brief" placeholder="I need an AI short film..." required rows={4}></textarea>
                  <Check className="absolute right-4 bottom-4 text-brand-cyan w-4 h-4" />
                </div>
                <span className="text-[10px] text-brand-cyan font-mono mt-1">Looks good.</span>
              </div>
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-brand-cyan uppercase tracking-widest" htmlFor="budget">BUDGET</label>
                  <div className="relative">
                    <select className="w-full rounded-md p-4 text-sm font-mono appearance-none bg-brand-black border border-brand-cyan text-brand-cyan focus:ring-brand-cyan focus:outline-none" id="budget" name="budget" required defaultValue="">
                      <option disabled value="">Select Parameter...</option>
                      <option className="bg-brand-black" value="small">&lt; $5K</option>
                      <option className="bg-brand-black" value="medium">$5K - $15K</option>
                      <option className="bg-brand-black" value="large">$15K+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none text-brand-cyan">
                      <Check className="w-4 h-4" />
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-[10px] text-brand-cyan font-mono mt-1">Budget range selected.</span>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-transparent border border-brand-pink text-white font-mono text-sm tracking-widest uppercase px-6 py-4 rounded-md hover:bg-brand-pink/20 transition-all duration-300 flex items-center justify-between group shadow-[0_0_15px_rgba(255,58,149,0.3)] hover:shadow-[0_0_25px_rgba(255,58,149,0.6)]" type="submit">
                    <span className="flex items-center gap-2">
                      <span className="text-brand-pink">&gt;</span> TRANSMIT REQUEST
                    </span>
                    <Send className="w-5 h-5 text-brand-pink group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-white/40 font-mono mt-1">[ Secured Connection ]</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
}
