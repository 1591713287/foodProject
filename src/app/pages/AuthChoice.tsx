import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthChoice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-background flex flex-col items-center justify-center px-6">
      <div className="text-center mb-16">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#C8102E]/20 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1599353510826-7d21e0eb5365?w=200"
            alt="中华风物志"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#C8102E] mb-2">中华风物志</h1>
        <p className="text-sm text-muted-foreground">探索中华美食文化</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <button
          onClick={() => navigate('/login')}
          className="w-full h-14 bg-[#C8102E] text-white rounded-lg font-medium text-lg hover:bg-[#A00D26] transition-all active:scale-98"
        >
          登录
        </button>

        <button
          onClick={() => navigate('/register')}
          className="w-full h-14 bg-white text-[#C8102E] border-2 border-[#C8102E] rounded-lg font-medium text-lg hover:bg-[#FFF5F5] transition-all active:scale-98"
        >
          注册
        </button>
      </div>
    </div>
  );
};

export default AuthChoice;
