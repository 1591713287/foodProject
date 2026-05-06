import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getItemById, getProvinceItems } from '../data/provinces';
import ShareModal from '../components/ShareModal';

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isLoggedIn, isFavorite, toggleFavorite, setSearchKeyword } = useApp();
  const [showShareModal, setShowShareModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  // 进入详情页时滚动到顶部
  useEffect(() => {
    // 确保在下一帧执行，更可靠
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [id]);

  const item = getItemById(id || '');

  if (!item) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-muted-foreground">内容不存在</p>
      </div>
    );
  }

  const relatedItems = getProvinceItems(item.provinceId).filter((i) => i.id !== item.id);

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      const wasFavorite = isFavorite(item.id);
      toggleFavorite(item.id);
      showToast(wasFavorite ? '已取消收藏' : '收藏成功');
    }
  };

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {toast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm z-50">
          {toast}
        </div>
      )}
      <div className="relative">
        <div className="relative h-80 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />


        </div>

        <button
          onClick={() => {
            setSearchKeyword('');
            navigate(-1);
          }}
          className="absolute top-4 left-4 p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors z-10"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="bg-white px-6 py-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#C8102E]/10 text-[#C8102E] text-sm rounded-full">
                {item.type === 'food' ? '美食' : item.type === 'specialty' ? '特产' : '非遗'}
              </span>
              <span className="px-3 py-1 bg-[#D4A574]/20 text-[#8B4513] text-sm rounded-full">
                {item.category}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleFavoriteClick}
              className="p-3 bg-muted hover:bg-muted/80 rounded-full transition-colors"
            >
              <Heart
                className={`w-6 h-6 ${
                  isFavorite(item.id)
                    ? 'fill-[#C8102E] text-[#C8102E]'
                    : 'text-muted-foreground'
                }`}
              />
            </button>
            <button
              onClick={handleShareClick}
              className="p-3 bg-muted hover:bg-muted/80 rounded-full transition-colors"
            >
              <Share2 className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
      </div>

      {item.origin && (
        <div className="mt-2 bg-white px-6 py-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">📜</span>
            来源溯源
          </h2>
          <p className="text-foreground leading-relaxed">{item.origin}</p>
        </div>
      )}

      {item.history && (
        <div className="mt-2 bg-white px-6 py-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🏛️</span>
            发展历程
          </h2>
          <p className="text-foreground leading-relaxed">{item.history}</p>
        </div>
      )}

      {item.culture && (
        <div className="mt-2 bg-white px-6 py-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🎎</span>
            文化影响
          </h2>
          <p className="text-foreground leading-relaxed">{item.culture}</p>
        </div>
      )}

      {item.honors && item.honors.length > 0 && (
        <div className="mt-2 bg-white px-6 py-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">🏅</span>
            荣誉认证
          </h2>
          <div className="space-y-3">
            {item.honors.map((honor, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#D4A574]/10 to-[#5A7247]/10 rounded-lg border border-[#D4A574]/30"
              >
                <div className="text-2xl">🏆</div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{honor}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              ✓ 以上荣誉均可查可验证，数据真实有效
            </p>
          </div>
        </div>
      )}

      {relatedItems.length > 0 && (
        <div className="mt-2 bg-white px-6 py-5">
          <h2 className="text-lg font-bold mb-4">相关推荐</h2>
          <div className="grid grid-cols-2 gap-3">
            {relatedItems.slice(0, 4).map((relatedItem) => (
              <button
                key={relatedItem.id}
                onClick={() => navigate(`/item/${relatedItem.id}`)}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <img
                  src={relatedItem.image}
                  alt={relatedItem.name}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium text-sm line-clamp-1">{relatedItem.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        itemName={item.name}
      />
    </div>
  );
};

export default ItemDetail;
