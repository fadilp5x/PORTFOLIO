export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-start md:items-center px-8 py-6 bg-brand-black/90 backdrop-blur-sm border-b border-white/5 font-mono text-[10px] md:text-xs text-brand-muted uppercase tracking-widest">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <div className="font-grotesk text-2xl font-black text-white italic tracking-tighter">FM</div>
        <div className="flex flex-col leading-tight">
          <span className="text-white">FADIL MUHAMMED</span>
          <span>GENERATIVE AI PRODUCER</span>
        </div>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        <a className="flex items-start gap-1 group" href="#work">
          <span className="text-brand-cyan group-hover:text-brand-pink transition-colors">(01)</span>
          <span className="text-white mt-1 group-hover:text-brand-pink transition-colors border-b border-transparent group-hover:border-brand-pink pb-1">WORK</span>
        </a>
        <a className="flex items-start gap-1 group" href="#about">
          <span className="text-brand-muted group-hover:text-brand-pink transition-colors">(02)</span>
          <span className="text-white mt-1 group-hover:text-brand-pink transition-colors">ABOUT</span>
        </a>
        <a className="flex items-start gap-1 group" href="#stack">
          <span className="text-brand-muted group-hover:text-brand-pink transition-colors">(03)</span>
          <span className="text-white mt-1 group-hover:text-brand-pink transition-colors">LAB</span>
        </a>
        <a className="flex items-start gap-1 group" href="#contact">
          <span className="text-brand-muted group-hover:text-brand-pink transition-colors">(05)</span>
          <span className="text-white mt-1 group-hover:text-brand-pink transition-colors">CONTACT</span>
        </a>
      </div>

      <div className="hidden lg:flex gap-12 text-left">
        <div className="flex flex-col gap-1">
          <span>BASED IN</span>
          <span className="text-white">CALICUT, KERALA</span>
        </div>
        <div className="flex flex-col gap-1">
          <span>AVAILABLE FOR</span>
          <span className="text-white">FREELANCE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></div>
          <div className="flex flex-col gap-1">
            <span>14:27:36 PST</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
