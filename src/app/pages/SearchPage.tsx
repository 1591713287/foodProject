import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';
import { items, provinces } from '../data/provinces';

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isFavorite, toggleFavorite } = useApp();
  const [searchText, setSearchText] = useState('');

  const handleFavoriteClick = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      toggleFavorite(itemId);
    }
  };

  // 搜索结果（只搜索美食类型）
  const searchResults = searchText
    ? items.filter(
        (item) =>
          item.type === 'food' &&
          (item.name.includes(searchText) ||
            item.category.includes(searchText) ||
            item.description.includes(searchText))
      )
    : [];

  // 搜索到的省份
  const provinceResults = searchText
    ? provinces.filter((province) => province.name.includes(searchText))
    : [];

  const hasResults = searchResults.length > 0 || provinceResults.length > 0;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="搜索省份、美食"
              autoFocus
              className="w-full h-10 pl-10 pr-10 bg-muted/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 border border-border"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            {searchText && (
              <button
                onClick={() => setSearchText('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        {!searchText && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 mb-6 bg-muted/50 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-center mb-2">搜索省份、美食</p>
            <p className="text-sm text-muted-foreground text-center">
              输入关键词即可查找
            </p>
          </div>
        )}

        {searchText && !hasResults && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 mb-6 bg-muted/50 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-2">未找到相关结果</p>
            <p className="text-sm text-muted-foreground text-center">
              试试其他关键词
            </p>
          </div>
        )}

        {provinceResults.length > 0 && (
          <div className="mb-6">
            <h2 className="text-base font-bold mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#C8102E] rounded" />
              省份
              <span className="text-sm text-muted-foreground font-normal">
                ({provinceResults.length})
              </span>
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {provinceResults.map((province) => (
                <button
                  key={province.id}
                  onClick={() => navigate(`/province/${province.id}`)}
                  className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <img
                    src={province.image}
                    alt={province.name}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="text-sm font-medium">{province.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {searchResults.length > 0 && (
          <div>
            <h2 className="text-base font-bold mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#C8102E] rounded" />
              美食
              <span className="text-sm text-muted-foreground font-normal">
                ({searchResults.length})
              </span>
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {searchResults.map((item) => (
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
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs px-2 py-0.5 bg-[#C8102E]/10 text-[#C8102E] rounded">
                        {item.category}
                      </span>
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
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default SearchPage;
