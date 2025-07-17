import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

interface FloatingElementsProps {
  darkMode: boolean;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ darkMode }) => {
  const icons = [
    { Icon: Code, delay: '0s', duration: '6s' },
    { Icon: Database, delay: '1s', duration: '8s' },
    { Icon: Globe, delay: '2s', duration: '7s' },
    { Icon: Smartphone, delay: '3s', duration: '9s' },
    { Icon: Server, delay: '4s', duration: '6s' },
    { Icon: Zap, delay: '5s', duration: '8s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map(({ Icon, delay, duration }, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon 
            size={24} 
            className={darkMode ? 'text-cyan-400' : 'text-gray-600'} 
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;