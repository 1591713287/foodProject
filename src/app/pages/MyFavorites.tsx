import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Package } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { items } from '../data/provinces';
import { provinceFoods } from '../data/provinceFoods';

const MyFavorites: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, favorites, toggleFavorite, isFavorite } = useApp();
  const [activeTab, setActiveTab] = useState<'food' | 'video'>('food');
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  if (!isLoggedIn) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-background px-6">
        <div className="w-24 h-24 mb-6 bg-muted/50 rounded-full flex items-center justify-center">
          <Heart className="w-12 h-12 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-bold mb-2">请登录后查看收藏</h2>
        <p className="text-muted-foreground mb-6 text-center">
          登录后即可收藏喜欢的美食特产
        </p>
        <button
          onClick={() => navigate('/login')}
          className="px-8 py-3 bg-[#C8102E] text-white rounded-lg font-medium hover:bg-[#A00D26] transition-all active:scale-98"
        >
          去登录
        </button>
      </div>
    );
  };

  const allVideoItems = provinceFoods.map(item => ({
    id: item.id,
    name: item.foodName,
    image: item.image,
    category: item.provinceShortName,
    videoUrl: item.videoUrl,
    type: 'video' as const
  }));

  const favoriteItems = items.filter((item) => favorites.has(item.id));
  const foodItems = favoriteItems.filter((item) => item.type === 'food');
  const favoriteVideoItems = allVideoItems.filter((item) => favorites.has(item.id));
  const videoItems = favoriteVideoItems;

  const getCurrentItems = () => {
    switch (activeTab) {
      case 'food':
        return foodItems;
      case 'video':
        return videoItems;
      default:
        return [];
    }
  };

  const handleToggleFavorite = (id: string, name: string, currentlyFavorite: boolean) => {
    toggleFavorite(id);
    showToast(currentlyFavorite ? '已取消收藏' : '收藏成功');
  };

  const currentItems = getCurrentItems();

  return (
    <div className="min-h-screen bg-background pb-8">
      {toast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm z-50">
          {toast}
        </div>
      )}
      <div className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="relative flex items-center h-14 px-4">
          <button
            onClick={() => navigate('/profile')}
            className="absolute left-2 w-10 h-10 flex items-center justify-center hover:bg-muted rounded-lg transition-colors cursor-pointer active:bg-muted/80 z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="w-full text-center text-lg font-medium">我的收藏</h1>
        </div>

        <div className="flex border-t border-border">
        <button
          onClick={() => setActiveTab('food')}
          className={`flex-1 py-3 text-center text-sm font-medium transition-colors relative ${
            activeTab === 'food' ? 'text-[#C8102E]' : 'text-muted-foreground'
          }`}
        >
          收藏的美食
          {activeTab === 'food' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8102E]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`flex-1 py-3 text-center text-sm font-medium transition-colors relative ${
            activeTab === 'video' ? 'text-[#C8102E]' : 'text-muted-foreground'
          }`}
        >
          收藏的视频
          {activeTab === 'video' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8102E]" />
          )}
        </button>
      </div>
      </div>

      <div className="p-4">
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => {
                    if (activeTab === 'video') {
                      const videoIndex = provinceFoods.findIndex(v => v.id === item.id);
                      navigate(`/videos?index=${videoIndex >= 0 ? videoIndex : 0}`);
                    } else {
                      navigate(`/item/${item.id}`);
                    }
                  }}
                  className="flex flex-col hover:shadow-md transition-all active:scale-95"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-square w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm mb-2 line-clamp-1">{item.name}</h3>
                    <span className="text-xs px-2 py-0.5 bg-[#C8102E]/10 text-[#C8102E] rounded">
                      {item.category}
                    </span>
                  </div>
                </button>
                <button
                  onClick={() => handleToggleFavorite(item.id, item.name, isFavorite(item.id))}
                  className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isFavorite(item.id) ? 'fill-[#C8102E] text-[#C8102E]' : 'text-muted-foreground'}`} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 mb-6 bg-muted/50 rounded-full flex items-center justify-center">
              <Package className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-6">暂无收藏，去发现更多美食特产吧</p>
            <button
              onClick={() => navigate('/home')}
              className="px-6 py-2 bg-[#C8102E] text-white rounded-lg font-medium hover:bg-[#A00D26] transition-all active:scale-98"
            >
              去浏览
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFavorites;
