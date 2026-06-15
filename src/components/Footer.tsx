import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full pb-24 pt-12 px-6 md:px-12 flex flex-col gap-12 bg-brand-black overflow-hidden relative border-t border-white/10 z-10">
      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-12">
          <span className="font-mono text-white text-sm">06.</span>
          <span className="font-mono text-white text-xs tracking-widest uppercase">Stay Connected</span>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap gap-x-12 gap-y-8">
          <a className="group flex items-end gap-2" href="#" target="_blank">
            <span className="font-grotesk text-[40px] md:text-[80px] leading-none uppercase font-black text-white hover:italic transition-all duration-300">
              GITHUB: <span className="text-brand-pink">@FADILP5X</span>
            </span>
            <ArrowUpRight className="text-brand-pink w-10 h-10 md:w-12 md:h-12 mb-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </a>
          <a className="group flex items-end gap-2" href="#" target="_blank">
            <span className="font-grotesk text-[40px] md:text-[80px] leading-none uppercase font-black text-white hover:italic transition-all duration-300">
              INSTA: <span className="text-brand-pink">@FADIL.CREATIVES</span>
            </span>
            <ArrowUpRight className="text-brand-pink w-10 h-10 md:w-12 md:h-12 mb-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-brand-muted uppercase tracking-widest mt-24 font-mono border-t border-white/10 pt-8 gap-4 md:gap-0">
          <p>© 2026 FADIL MUHAMMED — ALL SYSTEMS OPERATIONAL</p>
          <div className="flex gap-8">
            <a className="hover:text-brand-cyan transition-colors" href="#">LINKEDIN</a>
            <a className="hover:text-brand-cyan transition-colors" href="#">TWITTER</a>
            <a className="hover:text-brand-cyan transition-colors" href="#">EMAIL</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
