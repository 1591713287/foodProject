import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth-choice');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#C8102E] via-[#D4A574] to-[#5A7247] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="mountain" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 150 Q50 100 100 150 T200 150" fill="none" stroke="white" strokeWidth="2"/>
            <path d="M0 180 Q50 130 100 180 T200 180" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#mountain)"/>
        </svg>
      </div>

      <div className="text-center z-10 animate-fade-in px-6">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1599353510826-7d21e0eb5365?w=200"
            alt="中华风物志"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 tracking-wider">
          中华风物志
        </h1>
        <p className="text-xl text-white/90 mb-2">一城一味 · 一物一史</p>
        <p className="text-base text-white/80">读懂中国地方文化</p>
      </div>

      <div className="absolute bottom-12 text-center z-10">
        <p className="text-sm text-white/70">文化赋能乡村经济</p>
      </div>
    </div>
  );
};

export default Splash;
