/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Partners from './components/Partners';
import AboutStack from './components/AboutStack';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen relative font-mono text-white bg-brand-black selection:bg-brand-pink/30 selection:text-white">
      {/* Absolute positioning of the background elements defined in index.css */}
      <div className="noise-overlay"></div>
      <div className="fixed inset-0 w-full h-full bg-grid z-[-1]"></div>
      
      <Navigation />
      <Hero />
      <WorkGrid />
      <Partners />
      <AboutStack />
      <ContactForm />
      <Footer />
    </div>
  );
}

