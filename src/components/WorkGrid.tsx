import { ArrowRight, ArrowUpRight, Eye } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export default function WorkGrid() {
  return (
    <section className="w-full pt-40 pb-32 px-8 lg:px-24 flex flex-col relative z-10 border-t border-white/10" id="work">
      <AnimatedSection className="mb-24 flex flex-col items-start relative">
        <div className="absolute left-[-40px] top-4 text-brand-pink text-sm hidden lg:block -rotate-90 origin-left tracking-widest uppercase">
          // CASE STUDIES (01)
        </div>
        <div className="flex items-start gap-4">
          <h2 className="font-grotesk text-[60px] lg:text-[140px] leading-[0.85] font-black tracking-tighter uppercase text-white">
            THE<br />EVIDENCE
          </h2>
          <span className="text-brand-pink text-2xl font-bold mt-4">.</span>
        </div>
        <div className="mt-12 max-w-sm flex flex-col gap-8">
          <p className="text-brand-muted text-sm font-mono">
            A selection of high-impact technical executions across viral media, AI implementation, and cybersecurity disclosures.
          </p>
          <a className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase group w-max" href="#work">
            VIEW ALL
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-black transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection className="flex justify-between items-center border-b border-white/10 pb-4 mb-12 text-xs font-mono text-brand-muted tracking-widest uppercase" delay={0.2}>
        <div>// ALL PROJECTS</div>
      </AnimatedSection>

      <AnimatedSection className="flex-1 w-full relative" delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Card 1 */}
          <article className="w-full bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden flex flex-col glow-hover-pink group relative p-2 laser-scan-container">
            <div className="h-80 bg-[#111111] rounded-xl relative overflow-hidden group-hover:opacity-80 transition-opacity">
              <img 
                alt="Viral social media campaign" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYJcnZHs-RFNePJdDmly24afkv9htfbjDizIpFXQtNDU4xahr_FLhWHe6CRhbikj7V0RzHOEGJjOo7HQHTU0hUppnDORocvyuV2c-tH_QPK43MKSHthlyRFKRZpkKqezXVeII7QoyW4_ahWqSf-BZ4BH4U3aPmnxW85T5-Imp8KTUPZkzJriWNupn1OM1Y84qp375Wzn6lO4JzLDHwIMkNwePZBWI_zYoAOJEikwAuP6qS39K3P-8vgl1-jh1cPJOn9yDjGGTdQ0Q" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 text-brand-pink text-sm font-bold font-mono">01</div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-brand-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white w-4 h-4" />
              </div>
            </div>
            
            <div className="p-6 flex flex-col gap-2 absolute bottom-2 left-2 right-2 bg-gradient-to-t from-brand-black via-brand-black/90 to-transparent z-10">
              <h3 className="font-grotesk text-[32px] leading-[40px] font-bold text-white uppercase tracking-tight">Rikka Joias</h3>
              <div className="text-xs font-mono text-brand-muted uppercase tracking-widest mb-1">Viral Media / Mozambique</div>
              <p className="text-[10px] md:text-xs text-white/70 font-mono mb-2 h-20 md:h-16 leading-relaxed">
                Created a viral "fake arrest" video that exploded to 28.1M views, revolutionizing the brand's reach.<br/>
                <span className="text-brand-pink italic">"Everybody asked me the video to post on their own profile. Your work is fantastic."</span>
              </p>
              <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2 font-mono">
                <div className="text-xs text-brand-muted">2024</div>
                <div className="text-brand-pink font-bold tracking-widest text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> 28.1M VIEWS
                </div>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="w-full bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden flex flex-col glow-hover-cyan group relative p-2 laser-scan-container">
            <div className="h-80 bg-[#111111] rounded-xl relative overflow-hidden flex group-hover:opacity-80 transition-opacity">
              <div className="w-1/2 h-full border-r border-white/10">
                <img 
                  alt="Medical AI interface" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Y4QQRMRV1zYqX2OkXupdwH1FETqJmjPwgyGetx6kbwHCDFvZgr9QwzdGrnEfwFMO5B0dqP8Y80a_YcNxjYkpaOyEljRcXxa1ouVRVBNdbwykn7i73u-lJib7evbX1AZEOZrKxPKIFWSMsvDTXDnL4N1mMBntQFWM55ZtzL_q-GR_wh2O939d05s7_UtqFHQ-1jS3FEI0sQDWpmBAe-wfgrlUXfblImsNBBbgg6pC8PcupFzhNbw3isd1ejt3LvoAvYhoKYIu8N4" 
                />
              </div>
              <div className="w-1/2 h-full">
                <img 
                  alt="Lab technology" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVZZi7b3Xffz32AFt18VCfwN32y4vp4clo0zzW5y7_u4UphAqXXwIhw1tRDpMDTl3yBew3re1Hf9D3LYJQ9ttGc1h1LCFThhKo8xDbOVtenhRjIYBm83r98-Kxugh0R2tpiOQ7tB05KWKUcynn5hdNge-p8kDu7l3zh3Tv42Xw7wT0ReQYA7Vnlua2-Nnswo-tChl9nZtLqnlDO9GSWAQysGkQjujclRnDkgfvXiHloW1-3SCynIQUZxJLcLyzw6DcnJNF7jKX-Ao" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 text-brand-cyan text-sm font-bold font-mono">02</div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-brand-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white w-4 h-4" />
              </div>
            </div>

            <div className="p-6 flex flex-col gap-2 absolute bottom-2 left-2 right-2 bg-gradient-to-t from-brand-black via-brand-black/90 to-transparent z-10">
              <h3 className="font-grotesk text-[32px] leading-[40px] font-bold text-white uppercase tracking-tight">Our AI Clinics</h3>
              <div className="text-xs font-mono text-brand-muted uppercase tracking-widest mb-1">Multilingual TVC / UAE</div>
              <p className="text-[10px] md:text-xs text-white/70 font-mono mb-2 h-20 md:h-16 leading-relaxed">
                Produced multilingual AI video campaigns in Arabic and English for high-end medical clinics.<br/>
                <span className="text-brand-cyan italic">"Excellent, thank you. It's perfect now. Please proceed for Arabic version."</span>
              </p>
              <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2 font-mono">
                <div className="text-xs text-brand-muted">2024</div>
                <div className="text-brand-cyan tracking-widest text-[10px] md:text-xs flex gap-2 md:gap-4">
                  <span>[ AI VOICE ]</span>
                  <span>[ LOCALIZATION ]</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="w-full bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden flex flex-col glow-hover-pink group relative p-2 laser-scan-container">
            <div className="h-80 bg-[#111111] rounded-xl relative overflow-hidden p-8 font-mono text-xs flex flex-col justify-center border border-white/10">
              <div className="text-brand-pink mb-4">// Yellow Mellow - GitHub Reality Show</div>
              <div className="text-brand-muted leading-relaxed">
                <span className="text-brand-cyan">const</span> <span className="text-white">show</span> = <span className="text-brand-pink">new</span> <span className="text-white">RealityFormat</span>({'{'}<br/>
                &nbsp;&nbsp;platform: <span className="text-[#FFB000]">'GitHub'</span>,<br/>
                &nbsp;&nbsp;participants: <span className="text-[#FFB000]">12</span>,<br/>
                &nbsp;&nbsp;challenges: [<span className="text-[#FFB000]">'PR_RUSH'</span>, <span className="text-[#FFB000]">'MERGE_CONFLICT'</span>]<br/>
                {'});'}<br/><br/>
                <span className="text-brand-cyan">await</span> show.<span className="text-white">initialize</span>();
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 text-brand-pink text-sm font-bold">03</div>
            </div>
            
            <div className="p-6 flex flex-col gap-2 absolute bottom-2 left-2 right-2 bg-gradient-to-t from-brand-black via-brand-black/90 to-transparent z-10">
              <h3 className="font-grotesk text-[32px] leading-[40px] font-bold text-white uppercase tracking-tight">Yellow Mellow</h3>
              <div className="text-xs font-mono text-brand-muted uppercase tracking-widest mb-1">Development / Interactive</div>
              <p className="text-[10px] md:text-xs text-white/70 font-mono mb-2 h-16 leading-relaxed">
                Assigned to create a simple quiz for a college program. Instead, I built a massive, fully-featured reality show online.
              </p>
              <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2 font-mono">
                <div className="text-xs text-brand-muted">2023</div>
                <a href="https://github.com/fadilp5x/YELLOW-MELLOW-" target="_blank" rel="noreferrer" className="text-white hover:text-brand-pink transition-colors tracking-widest text-[10px] md:text-xs flex gap-2">
                  <span>[ GITHUB ]</span>
                  <span>[ VIEW CODE ]</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="w-full bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden flex flex-col glow-hover-cyan group relative p-2 laser-scan-container">
            <div className="h-80 bg-[#111111] rounded-xl relative overflow-hidden p-8 font-mono text-xs flex flex-col justify-center border border-white/10">
              <div className="text-brand-cyan mb-4">// Project Echo - System Init</div>
              <div className="text-brand-muted leading-relaxed">
                <span className="text-brand-pink">import</span> {'{ Core }'} <span className="text-brand-pink">from</span> <span className="text-[#FFB000]">'@echo/system'</span>;<br/><br/>
                <span className="text-brand-cyan">const</span> <span className="text-white">engine</span> = <span className="text-brand-pink">new</span> <span className="text-white">Core</span>();<br/>
                <span className="text-white">engine</span>.<span className="text-brand-cyan">boot</span>({'{'} <span className="text-brand-pink">mode</span>: <span className="text-[#FFB000]">'stealth'</span> {'}'});
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 text-brand-cyan text-sm font-bold">04</div>
            </div>
            
            <div className="p-6 flex flex-col gap-2 absolute bottom-2 left-2 right-2 bg-gradient-to-t from-brand-black via-brand-black/90 to-transparent z-10">
              <h3 className="font-grotesk text-[32px] leading-[40px] font-bold text-white uppercase tracking-tight">Spyweb</h3>
              <div className="text-xs font-mono text-brand-muted uppercase tracking-widest mb-1">Cybersecurity / Zero-Day</div>
              <p className="text-[10px] md:text-xs text-white/70 font-mono mb-2 h-16 leading-relaxed">
                Responsibly disclosed a severe security vulnerability in a Kerala Government website (SCHOLE Kerala).
              </p>
              <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2 font-mono">
                <div className="text-xs text-brand-muted">2025</div>
                <a href="https://github.com/fadilp5x/spyweb" target="_blank" rel="noreferrer" className="text-white hover:text-brand-cyan transition-colors tracking-widest text-[10px] md:text-xs flex gap-2">
                  <span>[ GITHUB ]</span>
                  <span>[ VIEW REPORT ]</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </AnimatedSection>
    </section>
  );
}
