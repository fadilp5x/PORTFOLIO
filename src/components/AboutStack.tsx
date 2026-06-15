import { AnimatedSection } from './AnimatedSection';
import { Video, Combine, Bot, Terminal, Sparkles, Image as ImageIcon, AudioWaveform, Globe } from 'lucide-react';

export default function AboutStack() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32 flex flex-col gap-32 border-t border-white/10" id="about">
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-12">
          <h2 className="font-grotesk text-[60px] md:text-[120px] leading-[0.85] text-white mb-8 font-black tracking-tighter uppercase">
            <span className="block">THE</span>
            <span className="block">ENGINE</span>
            <span className="block text-brand-pink">ROOM<span className="text-white">.</span></span>
          </h2>
        </div>
        
        <div className="md:col-span-4 sticky top-32">
          <div className="text-brand-pink font-mono text-xs mb-4 flex items-center gap-2">
            <span>// 03. ORIGIN STORY</span>
          </div>
          <h3 className="font-mono text-xl text-white uppercase tracking-widest mb-2">Scientium Miraculo</h3>
          <p className="font-mono text-xs text-brand-muted uppercase tracking-widest">THE ORIGIN</p>
        </div>
        
        <div className="md:col-span-8 flex flex-col gap-8 text-white/80 font-mono text-sm leading-loose border-l border-white/10 pl-8">
          <p>
            In 2015, I built a working 3D earthquake simulation using vibration motors and thermocol with the help of Sruthi Mam. This singular, hands-on project ignited my passion for engineering and problem-solving, acting as my Origin Story ("Scientium Miraculo").
          </p>
          <p className="text-brand-muted mt-4">
            That early experimentation laid the foundation for my current work. By understanding the core mechanics of how systems break and move, I evolved into analyzing digital infrastructures for vulnerabilities across the cybersecurity landscape, as well as synthesizing impossible visual experiences through Generative AI. Today, I engineer interfaces that harness these complex models, translating raw computational power into intuitive, high-fidelity human experiences.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="flex flex-col gap-12" id="stack" delay={0.2}>
        <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-4">
          <div className="text-brand-cyan font-mono text-xs flex items-center gap-2">
            <span>// 04. THE STACK</span>
          </div>
          <span className="font-mono text-xs text-brand-muted tracking-widest mt-2 md:mt-0 uppercase">AUTHORITATIVE DEPLOYMENT ENVIRONMENT</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="brutalist-grid-item bg-[#1a1a1a]/30 border border-white/10 p-8 rounded-lg flex flex-col items-center justify-center gap-4 text-center aspect-square relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Video className="w-12 h-12 text-blue-400 mb-2 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
            <h4 className="font-mono text-sm text-white tracking-widest uppercase">VEO 3.1</h4>
            <p className="font-mono text-[10px] text-brand-muted uppercase">Generative Video</p>
          </div>

          <div className="brutalist-grid-item bg-[#1a1a1a]/30 border border-white/10 p-8 rounded-lg flex flex-col items-center justify-center gap-4 text-center aspect-square relative overflow-hidden group">
            <Combine className="w-12 h-12 text-emerald-400 mb-2 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            <h4 className="font-mono text-sm text-white tracking-widest uppercase">KLING AI</h4>
            <p className="font-mono text-[10px] text-brand-muted uppercase">Motion Synthesis</p>
          </div>

          <div className="brutalist-grid-item bg-[#1a1a1a]/30 border border-white/10 p-8 rounded-lg flex flex-col items-center justify-center gap-4 text-center aspect-square relative overflow-hidden group">
            <Bot className="w-12 h-12 text-orange-400 mb-2 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            <h4 className="font-mono text-sm text-white tracking-widest uppercase">CLAUDE 3.5</h4>
            <p className="font-mono text-[10px] text-brand-muted uppercase">Logic & Reasoning</p>
          </div>

          <div className="brutalist-grid-item bg-[#1a1a1a]/30 border border-white/10 p-8 rounded-lg flex flex-col items-center justify-center gap-4 text-center aspect-square relative overflow-hidden group">
            <Terminal className="w-12 h-12 text-gray-200 mb-2 drop-shadow-[0_0_10px_rgba(229,231,235,0.5)]" />
            <h4 className="font-mono text-sm text-white tracking-widest uppercase">CURSOR</h4>
            <p className="font-mono text-[10px] text-brand-muted uppercase">AI IDE</p>
          </div>

          <div className="brutalist-grid-item bg-[#1a1a1a]/30 border border-white/10 p-8 rounded-lg flex flex-col items-center justify-center gap-4 text-center aspect-square relative overflow-hidden group">
            <Sparkles className="w-12 h-12 text-blue-300 mb-2 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]" />
            <h4 className="font-mono text-sm text-white tracking-widest uppercase">GEMINI</h4>
            <p className="font-mono text-[10px] text-brand-muted uppercase">Multimodal Engine</p>
          </div>

          <div className="brutalist-grid-item bg-[#1a1a1a]/30 border border-white/10 p-8 rounded-lg flex flex-col items-center justify-center gap-4 text-center aspect-square relative overflow-hidden group">
            <ImageIcon className="w-12 h-12 text-purple-400 mb-2 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]" />
            <h4 className="font-mono text-sm text-white tracking-widest uppercase">FLUX.1</h4>
            <p className="font-mono text-[10px] text-brand-muted uppercase">Image Synthesis</p>
          </div>

          <div className="brutalist-grid-item bg-[#1a1a1a]/30 border border-white/10 p-8 rounded-lg flex flex-col items-center justify-center gap-4 text-center aspect-square relative overflow-hidden group">
            <AudioWaveform className="w-12 h-12 text-gray-100 mb-2 drop-shadow-[0_0_10px_rgba(243,244,246,0.5)]" />
            <h4 className="font-mono text-sm text-white tracking-widest uppercase">ELEVENLABS</h4>
            <p className="font-mono text-[10px] text-brand-muted uppercase">Audio Generation</p>
          </div>

          <div className="brutalist-grid-item bg-[#1a1a1a]/30 border border-white/10 p-8 rounded-lg flex flex-col items-center justify-center gap-4 text-center aspect-square relative overflow-hidden group">
            <Globe className="w-12 h-12 text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <h4 className="font-mono text-sm text-white tracking-widest uppercase">NEXT.JS</h4>
            <p className="font-mono text-[10px] text-brand-muted uppercase">Framework</p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
