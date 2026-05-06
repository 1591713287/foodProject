import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';
import { items, provinces } from '../data/provinces';

type CategoryType = 'food' | 'specialty' | 'heritage' | 'honor' | 'hot' | 'all';

const categoryConfig: Record<CategoryType, {
  title: string;
  description: string;
  filter: (item: any) => boolean;
}> = {
  food: {
    title: '省份美食',
    description: '汇聚全国各地特色美食',
    filter: (item) => item.type === 'food'
  },
  specialty: {
    title: '特色特产',
    description: '地方特产，匠心传承',
    filter: (item) => item.type === 'specialty'
  },
  heritage: {
    title: '非遗好物',
    description: '非物质文化遗产传承',
    filter: (item) => item.type === 'heritage'
  },
  honor: {
    title: '荣誉认证',
    description: '国家级地理标志与荣誉认证',
    filter: (item) => item.type === 'food' && item.honors.length > 0
  },
  hot: {
    title: '热门推荐',
    description: '精选各地热门美食',
    filter: (item) => item.type === 'food'
  },
  all: {
    title: '全部物产',
    description: '探索中华风物宝库',
    filter: () => true
  }
};

const CategoryList: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { isLoggedIn, isFavorite, toggleFavorite, searchKeyword, setSearchKeyword, setLastCategory } = useApp();
  const [searchText, setSearchText] = useState(searchKeyword);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  const config = categoryConfig[category as CategoryType] || categoryConfig.all;
  const filteredItems = items.filter(config.filter);

  // 更新全局搜索状态
  const handleSearchChange = (value: string) => {
    setSearchText(value);
    setSearchKeyword(value);
  };

  useEffect(() => {
    setLastCategory(category || 'hot');
  }, [category, setLastCategory]);

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

  // 热门推荐特殊处理：每个省份展示多个美食（最多4个）
  const getHotItemsForProvince = (provinceId: string) => {
    const foodItems = items.filter(item => item.type === 'food' && item.provinceId === provinceId).slice(0, 4);
    
    // 如果没有美食数据，创建一个默认美食项
    if (foodItems.length === 0) {
      return [{
        id: `${provinceId}-food-default`,
        name: '特色美食',
        description: '',
        origin: '',
        history: '',
        culture: '',
        image: `/image/${provinceId}_food.png`,
        videoUrl: '',
        provinceId: provinceId,
        type: 'food',
        honors: []
      }];
    }
    
    return foodItems;
  };

  // 按省份分组并搜索筛选，热门推荐特殊处理
  const groupedByProvince = category === 'hot'
    ? provinces
        .map(province => ({
          province,
          items: getHotItemsForProvince(province.id)
        }))
        .filter(group => {
          if (!searchText) return true; // 热门推荐显示所有省份，不筛选空数据
          return (
            group.province.name.includes(searchText) ||
            group.items.some(item => item.name.includes(searchText))
          );
        })
    : provinces
        .map(province => ({
          province,
          items: filteredItems.filter(item => item.provinceId === province.id).slice(0, 4) // 只显示前4个
        }))
        .filter(group => {
          if (!searchText) return group.items.length > 0;
          return (
            group.items.length > 0 &&
            (group.province.name.includes(searchText) ||
              group.items.some(item => item.name.includes(searchText)))
          );
        });

  return (
    <div className="min-h-screen bg-background pb-20">
      {toast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm z-50">
          {toast}
        </div>
      )}
      <div className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="flex items-center px-4 py-4">
          <button
            onClick={() => {
              setSearchKeyword('');
              navigate(-1);
            }}
            className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 ml-2">
            <h1 className="text-lg font-bold">{config.title}</h1>
            <p className="text-xs text-muted-foreground">{config.description}</p>
          </div>
        </div>

        <div className="px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="搜索省份或美食名称"
              className="w-full h-10 pl-10 pr-4 bg-muted/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 border border-border"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            {searchText && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="space-y-6">
          {groupedByProvince.map((group) => (
            <div key={group.province.id}>
              <button
                onClick={() => navigate(`/province/${group.province.id}?category=${category}`)}
                className="w-full mb-3 flex items-center gap-3 p-3 bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg hover:shadow-md transition-all active:scale-98"
              >
                <div className="w-12 h-12 object-cover rounded-lg bg-gradient-to-br from-[#C8102E] to-[#D4A574] flex items-center justify-center text-white font-bold text-lg">
                  {group.province.name.charAt(0)}
                </div>
                <div className="flex-1 text-left">
                  <h2 className="text-base font-bold">{group.province.name}</h2>
                  <p className="text-xs text-muted-foreground">
                    {group.items.length} 个{config.title}
                  </p>
                </div>
                <div className="text-muted-foreground">→</div>
              </button>
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((item) => (
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
                          {item.type === 'food' ? '美食' : item.type === 'specialty' ? '特产' : '非遗'}
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
            </div>
          ))}
        </div>

        {groupedByProvince.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 mb-6 bg-muted/50 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-2">
              {searchText ? `未找到包含"${searchText}"的结果` : `暂无${config.title}数据`}
            </p>
            {searchText && (
              <p className="text-sm text-muted-foreground mb-6">试试搜索其他省份或美食特产名称</p>
            )}
            <button
              onClick={() => {
                if (searchText) {
                  handleSearchChange('');
                } else {
                  navigate('/home');
                }
              }}
              className="px-6 py-2 bg-[#C8102E] text-white rounded-lg font-medium hover:bg-[#A00D26] transition-all active:scale-98"
            >
              {searchText ? '清空搜索' : '返回首页'}
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default CategoryList;
