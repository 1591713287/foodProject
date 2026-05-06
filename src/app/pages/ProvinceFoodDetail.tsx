import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Play, Clock, MapPin, BookOpen, Award, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';
import ShareModal from '../components/ShareModal';
import { provinceFoods } from '../data/provinceFoods';

const ProvinceFoodDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isLoggedIn, isFavorite, toggleFavorite } = useApp();
  const [showShareModal, setShowShareModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  const food = provinceFoods.find((item) => item.id === id);
  
  const imageFileMap: { [key: string]: string } = {
    '北京烤鸭': '/image/北京烤鸭.webp',
    '十八街麻花': '/image/十八街麻花.webp',
    '驴肉火烧（保定）': '/image/驴肉火烧.webp',
    '南翔小笼包': '/image/上海小笼包.webp',
    '云南过桥米线': '/image/云南过桥米线.webp',
    '手把肉': '/image/内蒙古冰煮羊.webp',
    '卤肉饭': '/image/台湾卤肉饭.webp',
    '延边冷面': '/image/吉林延吉冷面.webp',
    '重庆火锅': '/image/重庆火锅.webp',
    '宁夏枸杞': '/image/手抓羊肉.webp',
    '黄山臭鳜鱼': '/image/臭鳜鱼.webp',
    '德州扒鸡': '/image/德州扒鸡.webp',
    '平遥牛肉': '/image/平遥牛肉.webp',
    '白切鸡': '/image/广东白切鸡.webp',
    '螺蛳粉': '/image/广西螺蛳粉.webp',
    '桂林米粉': '/image/广西壮族五色糯米饭.webp',
    '大盘鸡': '/image/烤全羊.webp',
    '南京盐水鸭': '/image/盐水鸡.webp',
    '南昌瓦罐汤': '/image/瓦罐汤.webp',
    '文昌鸡': '/image/文昌鸡.webp',
    '潮汕牛肉丸': '/image/臭豆腐.webp',
    '葡式蛋挞': '/image/猪扒包.webp',
    '佛跳墙': '/image/佛跳墙.webp',
    '酥油茶': '/image/酥油茶.webp',
    '酸汤鱼': '/image/酸汤鱼.webp',
    '腊汁肉夹馍': '/image/羊肉泡馍.webp',
    '兰州牛肉面': '/image/兰州牛肉面.webp',
    '哈尔滨红肠': '/image/哈尔滨红肠.webp',
    '大连海参': '/image/大连海参.webp',
    '西湖醋鱼': '/image/西湖醋鱼.webp',
    '孝感麻糖': '/image/热干面.webp',
    '逍遥镇胡辣汤': '/image/刀削面.webp',
    '四川火锅': '/image/叉烧.webp',
    '尕面片': '/image/锅包肉.webp',
    '菠萝油': '/image/广东白切鸡.webp',
  };

  const getImageUrl = (foodName: string) => {
    const imageFile = imageFileMap[foodName];
    if (imageFile) {
      return imageFile;
    }
    return '';
  };
  const currentIndex = provinceFoods.findIndex((item) => item.id === id);
  const prevFood = currentIndex > 0 ? provinceFoods[currentIndex - 1] : null;
  const nextFood = currentIndex < provinceFoods.length - 1 ? provinceFoods[currentIndex + 1] : null;

  if (!food) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-lg mb-4">未找到该美食信息</p>
          <button
            onClick={() => navigate('/videos')}
            className="px-4 py-2 bg-[#C8102E] rounded-lg"
          >
            返回视频页
          </button>
        </div>
      </div>
    );
  }

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      const wasFavorite = isFavorite(food.id);
      toggleFavorite(food.id);
      showToast(wasFavorite ? '已取消收藏' : '收藏成功');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pb-20">
      {toast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm z-50">
          {toast}
        </div>
      )}
      <div className="relative">
        <img
          src={getImageUrl(food.foodName)}
          alt={food.foodName}
          className="w-full h-72 object-contain bg-slate-900"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        <button
          onClick={() => navigate(`/videos?index=${new URLSearchParams(window.location.search).get('index') || 0}`)}
          className="absolute top-4 left-4 p-2 bg-black/40 backdrop-blur-sm rounded-full"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <button className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full">
          <Share2
            className="w-6 h-6 text-white"
            onClick={() => setShowShareModal(true)}
          />
        </button>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-[#C8102E] text-white text-xs rounded-full flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {food.provinceName}
            </span>
          </div>
          <h1 className="text-white text-3xl font-bold">{food.foodName}</h1>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-[#D4A574]" />
            <h2 className="text-white font-semibold text-lg">简介</h2>
          </div>
          <p className="text-white/80 leading-relaxed">{food.description}</p>
        </div>

        {food.origin && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-[#D4A574]" />
              <h2 className="text-white font-semibold text-lg">来源溯源</h2>
            </div>
            <p className="text-white/80 leading-relaxed">{food.origin}</p>
          </div>
        )}

        {food.history && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-[#D4A574]" />
              <h2 className="text-white font-semibold text-lg">发展历程</h2>
            </div>
            <p className="text-white/80 leading-relaxed">{food.history}</p>
          </div>
        )}

        {food.culture && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-[#D4A574]" />
              <h2 className="text-white font-semibold text-lg">文化影响</h2>
            </div>
            <p className="text-white/80 leading-relaxed">{food.culture}</p>
          </div>
        )}



        <div className="flex gap-3">
          <button
            onClick={handleFavoriteClick}
            className={`flex-1 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${
              isFavorite(food.id)
                ? 'bg-[#C8102E] text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite(food.id) ? 'fill-white' : ''}`} />
            {isFavorite(food.id) ? '已收藏' : '收藏'}
          </button>
          <button
            onClick={() => setShowShareModal(true)}
            className="flex-1 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            分享
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-white/60 text-sm mb-3">其他省份美食</h3>
          <div className="flex gap-3">
            {prevFood && (
              <button
                onClick={() => navigate(`/province-food/${prevFood.id}`)}
                className="flex-1 bg-white/10 rounded-xl p-3 flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-white/60" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs truncate">{prevFood.provinceShortName}</p>
                  <p className="text-white/80 text-sm truncate">{prevFood.foodName}</p>
                </div>
              </button>
            )}
            {nextFood && (
              <button
                onClick={() => navigate(`/province-food/${nextFood.id}`)}
                className="flex-1 bg-white/10 rounded-xl p-3 flex items-center justify-end gap-2 hover:bg-white/20 transition-colors"
              >
                <div className="flex-1 min-w-0 text-right">
                  <p className="text-white text-xs truncate">{nextFood.provinceShortName}</p>
                  <p className="text-white/80 text-sm truncate">{nextFood.foodName}</p>
                </div>
                <ArrowLeft className="w-4 h-4 text-white/60 rotate-180" />
              </button>
            )}
          </div>
        </div>
      </div>

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        itemName={`${food.provinceName}·${food.foodName}`}
      />
    </div>
  );
};

export default ProvinceFoodDetail;