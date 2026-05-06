import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getProvinceById, getProvinceItems } from '../data/provinces';

type CategoryType = 'food' | 'specialty' | 'heritage' | 'all';

const ProvinceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, isFavorite, toggleFavorite, setSearchKeyword } = useApp();
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  // 从URL参数获取分类
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category') as CategoryType;
    if (category && ['food', 'specialty', 'heritage', 'all'].includes(category)) {
      setActiveCategory(category);
    }
  }, [location.search]);

  const province = getProvinceById(id || '');
  const allItems = getProvinceItems(id || '');

  // 根据分类过滤数据
  const filteredItems = activeCategory === 'all' 
    ? allItems 
    : activeCategory === 'food'
      ? allItems.filter(item => item.type === 'food')
      : activeCategory === 'specialty'
        ? allItems.filter(item => item.type === 'specialty')
        : allItems.filter(item => item.honors.some(h => h.includes('非物质文化遗产') || h.includes('非遗')));

  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 10);

  if (!province) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-muted-foreground">省份不存在</p>
      </div>
    );
  }

  const handleFavoriteClick = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      const wasFavorite = isFavorite(itemId);
      toggleFavorite(itemId);
      showToast(wasFavorite ? '已取消收藏' : '收藏成功');
    }
  };

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case 'food': return '美食';
      case 'specialty': return '特产';
      case 'heritage': return '非遗好物';
      default: return '全部';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {toast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm z-50">
          {toast}
        </div>
      )}
      <div className="relative h-64 overflow-hidden">
        <img
          src={province.image}
          alt={province.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <button
          onClick={() => {
            setSearchKeyword('');
            navigate(-1);
          }}
          className="absolute top-4 left-4 p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors z-10"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-3xl font-bold text-white mb-2">{province.name}</h1>
          <p className="text-white/90">{province.slogan}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">{getCategoryTitle()}</h2>
        </div>
        
        {displayItems.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {displayItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(`/item/${item.id}`)}
                  className="relative flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-square w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm mb-2 line-clamp-1">{item.name}</h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <span className="text-xs px-2 py-0.5 bg-[#C8102E]/10 text-[#C8102E] rounded">
                        {item.type === 'food' ? '美食' : '特产'}
                      </span>
                      {item.honors.length > 0 && (
                        <span className="text-xs px-2 py-0.5 bg-[#D4A574]/20 text-[#8B4513] rounded">
                          {item.honors.length}项
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    onClick={(e) => handleFavoriteClick(item.id, e)}
                    className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors cursor-pointer"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorite(item.id)
                          ? 'fill-[#C8102E] text-[#C8102E]'
                          : 'text-muted-foreground'
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {!showAll && filteredItems.length > 10 && (
              <button
                onClick={() => setShowAll(true)}
                className="w-full py-3 bg-white rounded-lg border border-border hover:bg-muted/30 transition-colors font-medium text-[#C8102E]"
              >
                查看更多（剩余 {filteredItems.length - 10} 个）
              </button>
            )}

            {showAll && (
              <button
                onClick={() => {
                  setShowAll(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 bg-white rounded-lg border border-border hover:bg-muted/30 transition-colors font-medium text-muted-foreground"
              >
                收起
              </button>
            )}
          </>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            暂无{getCategoryTitle()}数据
          </div>
        )}
      </div>
    </div>
  );
};

export default ProvinceDetail;
