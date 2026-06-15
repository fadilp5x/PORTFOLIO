import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypewriterText({ text, className = '', delay = 0 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const startTyping = () => {
      setIsTyping(true);
      let i = 0;
      const type = () => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
          timeout = setTimeout(type, 80); // typing speed
        } else {
          setIsTyping(false);
        }
      };
      timeout = setTimeout(type, delay * 1000);
    };
    startTyping();
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.div className={`inline-flex items-center ${className}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className={`inline-block bg-brand-pink ml-2 ${isTyping ? 'w-[10px] sm:w-[20px] h-[0.8em]' : 'w-[10px] sm:w-[20px] h-[0.8em] opacity-50'}`}
        style={{ width: '0.2em' }}
      />
    </motion.div>
  );
}
