import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Map, Video, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/home', icon: Home, label: '首页' },
    { path: '/provinces', icon: Map, label: '省份' },
    { path: '/videos', icon: Video, label: '视频' },
    { path: '/profile', icon: User, label: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border safe-area-bottom z-50">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? 'text-[#C8102E]' : 'text-muted-foreground'
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? 'text-[#C8102E] font-medium' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
