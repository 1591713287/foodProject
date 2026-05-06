import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, UtensilsCrossed, Gift, Landmark, Award, Video, Flame, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';
import { provinces, items } from '../data/provinces';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useApp();
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  const gridItems = [
    { Icon: UtensilsCrossed, label: '省份美食', path: '/category/food', available: true },
    { Icon: Award, label: '荣誉认证', path: '/category/honor', available: true },
    { Icon: Video, label: '文化视频', path: '/videos', available: true },
    { Icon: Flame, label: '热门推荐', path: '/category/hot', available: true },
    { Icon: Heart, label: '我的收藏', path: '/favorites', requireLogin: true, available: true },
    { Icon: Gift, label: '特色特产', path: '/category/specialty', available: false, color: 'from-gray-400/10 to-gray-500/10', iconColor: 'text-gray-400' },
    { Icon: Landmark, label: '非遗好物', path: '/category/heritage', available: false, color: 'from-gray-400/10 to-gray-500/10', iconColor: 'text-gray-400' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="sticky top-0 z-40 bg-gradient-to-r from-[#C8102E] to-[#D4A574] px-4 pt-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1599353510826-7d21e0eb5365?w=100"
              alt="中华风物志"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-white text-lg font-bold">美食风物</h1>
            <p className="text-white/90 text-xs">一城一味 · 一物一史</p>
          </div>
          <button
            onClick={() => navigate('/search')}
            className="p-2.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-4 gap-4 bg-white">
        {gridItems.map((item, index) => {
          const IconComponent = item.Icon;
          return (
            <button
              key={index}
              onClick={() => {
                if (!item.available) {
                  showToast('待后续版本更新');
                  return;
                }
                if (item.requireLogin && !isLoggedIn) {
                  navigate('/login');
                } else {
                  navigate(item.path);
                }
              }}
              className={`flex flex-col items-center gap-2 p-2 hover:bg-muted/50 rounded-lg transition-colors active:scale-95 ${!item.available ? 'opacity-60' : ''}`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${item.available ? 'from-[#C8102E]/10 to-[#D4A574]/10' : 'from-gray-400/10 to-gray-500/10'} rounded-full flex items-center justify-center`}>
                <IconComponent className={`w-6 h-6 ${item.available ? 'text-[#C8102E]' : 'text-gray-400'}`} />
              </div>
              <span className={`text-xs text-center font-medium ${!item.available ? 'text-gray-400' : ''}`}>{item.label}</span>
            </button>
          );
        })}
        </div>
        </div>

        {toast && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm z-50 animate-fade-in">
            {toast}
          </div>
        )}

      <div className="mt-2 bg-white px-4 py-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">热门风物</h2>
          <button
            onClick={() => navigate('/category/hot')}
            className="text-sm text-[#C8102E] hover:underline"
          >
            查看更多 →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {(() => {
            // 只选择美食类型，并按省份分组
            const foodItems = items.filter(item => item.type === 'food');
            const seenProvinces = new Set<string>();
            const result: any[] = [];
            
            for (const item of foodItems) {
              if (result.length >= 6) break;
              if (!seenProvinces.has(item.provinceId)) {
                seenProvinces.add(item.provinceId);
                result.push(item);
              }
            }
            
            // 如果不同省份的内容不足6个，补充剩余的
            if (result.length < 6) {
              for (const item of foodItems) {
                if (result.length >= 6) break;
                if (!result.includes(item)) {
                  result.push(item);
                }
              }
            }
            
            return result;
          })().map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/item/${item.id}`)}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <img
                src={item.image}
                alt={item.name}
                className="aspect-square w-full object-cover"
              />
              <div className="p-3 flex flex-col">
                <h3 className="font-medium text-sm mb-2 line-clamp-1">{item.name}</h3>
                <div className="flex items-center justify-between gap-1 text-xs">
                  <span className="px-2 py-0.5 bg-[#C8102E]/10 text-[#C8102E] rounded">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground">美食</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2 bg-white px-4 py-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">荣誉认证专区</h2>
          <button
            onClick={() => navigate('/category/honor')}
            className="text-sm text-[#C8102E] hover:underline"
          >
            查看更多 →
          </button>
        </div>
        <div className="space-y-3">
          {(() => {
            // 只选择有荣誉认证的项目
            const honoredItems = items.filter(item => item.honors && item.honors.length > 0);
            
            // 按省份分组，确保展示不同省份的内容
            const seenProvinces = new Set<string>();
            const result: any[] = [];
            
            for (const item of honoredItems) {
              if (result.length >= 5) break;
              if (!seenProvinces.has(item.provinceId)) {
                seenProvinces.add(item.provinceId);
                result.push(item);
              }
            }
            
            // 如果不同省份的内容不足5个，补充剩余的
            if (result.length < 5) {
              for (const item of honoredItems) {
                if (result.length >= 5) break;
                if (!result.includes(item)) {
                  result.push(item);
                }
              }
            }
            
            return result;
          })().map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/item/${item.id}`)}
              className="w-full flex gap-3 p-3 bg-gradient-to-r from-[#C8102E]/5 to-[#D4A574]/5 rounded-lg hover:shadow-md transition-all active:scale-98"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 text-left">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <span className="text-xs px-2 py-0.5 bg-[#C8102E]/10 text-[#C8102E] rounded whitespace-nowrap">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-3 mb-2">
                  {item.description}
                </p>
                <div className="flex gap-1 flex-wrap">
                  {item.honors.slice(0, 2).map((honor, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 bg-[#D4A574]/20 text-[#8B4513] rounded flex items-center gap-1"
                    >
                      <Award className="w-3 h-3" />
                      {honor.split('（')[0]}
                    </span>
                  ))}
                  {item.honors.length > 2 && (
                    <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded">
                      +{item.honors.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2 bg-gradient-to-br from-[#C8102E]/5 to-[#D4A574]/5 px-4 py-6 pb-20">
        <div className="text-center mb-4">
          <h3 className="text-base font-bold">汇聚中华美食 · 传承文化经典</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#C8102E] mb-1">{provinces.length}</div>
            <div className="text-xs text-muted-foreground">省份覆盖</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#C8102E] mb-1">{items.length}+</div>
            <div className="text-xs text-muted-foreground">美食</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#C8102E] mb-1">
              {items.reduce((sum, item) => sum + item.honors.length, 0)}+
            </div>
            <div className="text-xs text-muted-foreground">荣誉认证</div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;