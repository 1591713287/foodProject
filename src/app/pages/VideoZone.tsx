import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Share2, Play, Pause, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';
import ShareModal from '../components/ShareModal';
import { provinceFoods } from '../data/provinceFoods';

const VideoZone: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isFavorite, toggleFavorite } = useApp();
  const [currentIndex, setCurrentIndex] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    return index ? parseInt(index, 10) : 0;
  });
  const [showShareModal, setShowShareModal] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideoPlaying && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error('Play error:', err);
      });
    }
  }, [isVideoPlaying]);

  const currentItem = provinceFoods[currentIndex];

  const videoFileMap: { [key: string]: string } = {
    '上海小笼包.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E4%B8%8A%E6%B5%B7%E5%B0%8F%E7%AC%BC%E5%8C%85.mp4',
    '云南过桥米线.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E4%BA%91%E5%8D%97%E8%BF%87%E6%A1%A5%E7%B1%B3%E7%BA%BF.mp4',
    '兰州牛肉面.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%85%B0%E5%B7%9E%E7%89%9B%E8%82%89%E9%9D%A2.mp4',
    '内蒙古冰煮羊.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%86%85%E8%92%99%E5%8F%A4%E5%86%B0%E7%85%AE%E7%BE%8A.mp4',
    '北京烤鸭.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%8C%97%E4%BA%AC%E7%83%A4%E9%B8%AD.mp4',
    '十八街麻花.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%8D%81%E5%85%AB%E8%A1%97%E9%BA%BB%E8%8A%B1.mp4',
    '南京盐水鸭.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%8D%97%E4%BA%AC%E7%9B%90%E6%B0%B4%E9%B8%AD.mp4',
    '台湾卤肉饭.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%8F%B0%E6%B9%BE%E5%8D%A4%E8%82%89%E9%A5%AD.mp4',
    '哈尔滨红肠.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%93%88%E5%B0%94%E6%BB%A8%E7%BA%A2%E8%82%A0.mp4',
    '哈尔滨锅包肉.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%93%88%E5%B0%94%E6%BB%A8%E9%94%85%E5%8C%85%E8%82%89.mp4',
    '大连海参.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%A4%A7%E8%BF%9E%E6%B5%B7%E5%8F%82.mp4',
    '宁夏手抓羊肉.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%AE%81%E5%A4%8F%E6%89%8B%E6%8A%93%E7%BE%8A%E8%82%89.mp4',
    '安徽臭鳜鱼.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%AE%89%E5%BE%BD%E8%87%AD%E9%B3%9C%E9%B1%BC.mp4',
    '山东德州扒鸡.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%B1%B1%E4%B8%9C%E5%BE%B7%E5%B7%9E%E6%89%92%E9%B8%A1.mp4',
    '山西刀削面.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%B1%B1%E8%A5%BF%E5%88%80%E5%89%8A%E9%9D%A2.mp4',
    '平遥牛肉.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%B9%B3%E9%81%A5%E7%89%9B%E8%82%89.mp4',
    '广东白切鸡.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%B9%BF%E4%B8%9C%E7%99%BD%E5%88%87%E9%B8%A1.mp4',
    '广式叉烧饭.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%B9%BF%E5%BC%8F%E5%8F%89%E7%83%A7%E9%A5%AD.mp4',
    '广西壮族五色糯米饭.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%B9%BF%E8%A5%BF%E5%A3%AE%E6%97%8F%E4%BA%94%E8%89%B2%E7%B3%AF%E7%B1%B3%E9%A5%AD.mp4',
    '广西螺蛳粉.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%B9%BF%E8%A5%BF%E8%9E%BA%E8%9B%B3%E7%B2%89.mp4',
    '延吉冷面.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%BB%B6%E5%90%89%E5%86%B7%E9%9D%A2.mp4',
    '新疆烤全羊.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E6%96%B0%E7%96%86%E7%83%A4%E5%85%A8%E7%BE%8A.mp4',
    '杭州西湖醋鱼.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E6%9D%AD%E5%B7%9E%E8%A5%BF%E6%B9%96%E9%86%8B%E9%B1%BC.mp4',
    '武汉热干面.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E6%AD%A6%E6%B1%89%E7%83%AD%E5%B9%B2%E9%9D%A2.mp4',
    '江西瓦罐汤.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E6%B1%9F%E8%A5%BF%E7%93%A6%E7%BD%90%E6%B1%A4.mp4',
    '海南文昌鸡.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E6%B5%B7%E5%8D%97%E6%96%87%E6%98%8C%E9%B8%A1.mp4',
    '湖南臭豆腐.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E6%B9%96%E5%8D%97%E8%87%AD%E8%B1%86%E8%85%90.mp4',
    '澳门猪扒包.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E6%BE%B3%E9%97%A8%E7%8C%AA%E6%89%92%E5%8C%85.mp4',
    '福州佛跳蔷.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E7%A6%8F%E5%B7%9E%E4%BD%9B%E8%B7%B3%E8%94%B7.mp4',
    '西藏酥油茶.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E8%A5%BF%E8%97%8F%E9%85%A5%E6%B2%B9%E8%8C%B6.mp4',
    '贵州黔东南.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E8%B4%B5%E5%B7%9E%E9%BB%94%E4%B8%9C%E5%8D%97.mp4',
    '逍遥镇胡辣汤.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E9%80%8D%E9%81%A5%E9%95%87%E8%83%A1%E8%BE%A3%E6%B1%A4.mp4',
    '重庆火锅.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E9%87%8D%E5%BA%86%E7%81%AB%E9%94%85.mp4',
    '陕西羊肉泡馍.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E9%99%95%E8%A5%BF%E7%BE%8A%E8%82%89%E6%B3%A1%E9%A6%8D.mp4',
    '驴肉火烧.mp4': 'https://food-project-1306589714.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E9%A9%B4%E8%82%89%E7%81%AB%E7%83%A7.mp4'
  };

  const imageFileMap: { [key: string]: string } = {
    '北京烤鸭': '/image/北京烤鸭.webp',
    '十八街麻花': '/image/十八街麻花.webp',
    '驴肉火烧（保定）': '/image/驴肉火烧.webp',
    '南翔小笼包': '/image/上海小笼包.webp',
    '过桥米线': '/image/云南过桥米线.webp',
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
    '逍遥镇胡辣汤': '/image/逍遥镇胡辣汤.webp',
    '四川火锅': '/image/叉烧.webp',
    '尕面片': '/image/锅包肉.webp',
    '菠萝油': '/image/广东白切鸡.webp',
  };

  const getVideoUrl = (foodName: string) => {
    // 尝试直接匹配
    let videoUrl = videoFileMap[foodName];
    if (videoUrl) {
      return videoUrl;
    }
    // 尝试带 .mp4 后缀的匹配
    videoUrl = videoFileMap[`${foodName}.mp4`];
    if (videoUrl) {
      return videoUrl;
    }
    return '';
  };

  const getImageUrl = (foodName: string) => {
    const imageFile = imageFileMap[foodName];
    if (imageFile) {
      return imageFile;
    }
    return '';
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 30;
    const isDownSwipe = distance < -30;

    if (isUpSwipe && currentIndex < provinceFoods.length - 1) {
      handleCloseVideo();
      setCurrentIndex(currentIndex + 1);
    } else if (isUpSwipe && currentIndex >= provinceFoods.length - 1) {
      setToastMessage('已经到最后一条了');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }

    if (isDownSwipe && currentIndex > 0) {
      handleCloseVideo();
      setCurrentIndex(currentIndex - 1);
    } else if (isDownSwipe && currentIndex <= 0) {
      setToastMessage('已经到第一条了');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      const wasFavorite = isFavorite(currentItem.id);
      toggleFavorite(currentItem.id);
      setToastMessage(wasFavorite ? '已取消收藏' : '收藏成功');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoPlaying(false);
  };

  if (!currentItem) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <p className="text-white/80">暂无内容</p>
      </div>
    );
  }

  const videoUrl = getVideoUrl(currentItem.foodName);

  return (
    <div 
      className="h-screen relative overflow-hidden bg-black"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-x-0 top-0 w-full h-full" style={{ transform: 'translateY(-10%)' }}>
        {!isVideoPlaying && (
          <img
            src={getImageUrl(currentItem.foodName)}
            alt={currentItem.foodName}
            className="w-full h-full object-contain"
          />
        )}

        {isVideoPlaying && (
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-contain"
            controls
            playsInline
            autoPlay
            preload="auto"
            onEnded={handleCloseVideo}
          />
        )}
      </div>

      {!isVideoPlaying && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto" style={{ transform: 'translateY(-10%)' }}>
            <button
              className="w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-600 flex items-center justify-center shadow-2xl transition-all hover:scale-110 hover:shadow-red-500/50"
              onClick={handlePlayClick}
            >
              <Play size={28} className="text-white ml-1.5" />
            </button>
          </div>
        </div>
      )}

      <div className="absolute top-4 left-4 right-4 flex justify-center z-20">
        <p className="text-white/80 text-sm">{currentIndex + 1}/{provinceFoods.length}</p>
      </div>

      <div
        className="h-full flex flex-col justify-end px-4 pb-20 relative z-20 pointer-events-none"
      >
        <div className="rounded-2xl p-4 text-white shadow-2xl bg-black/40 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-2">{currentItem.foodName}</h3>
          <p className="text-sm text-white/80 mb-4">
            {currentItem.description}
          </p>

          <div className="flex items-center gap-3 pointer-events-auto">
            <button
              className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2.5 rounded-lg text-sm font-medium transition-colors backdrop-blur-sm"
              onClick={() => navigate(`/province-food/${currentItem.id}?index=${currentIndex}`)}
            >
              查看详情
            </button>
            <button
              className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
              onClick={handleFavoriteClick}
            >
              <Heart
                size={20}
                className={`${isFavorite(currentItem.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
              />
            </button>
            <button
              className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setShowShareModal(true);
              }}
            >
              <Share2 size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {isVideoPlaying && (
        <button
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors backdrop-blur-sm z-40"
          onClick={handleCloseVideo}
        >
          <Pause size={20} className="text-white" />
        </button>
      )}

      <BottomNav />

      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[9999] bg-black/80 text-white px-6 py-3 rounded-full text-sm">
          {toastMessage}
        </div>
      )}

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        itemName={`${currentItem.provinceName}·${currentItem.foodName}`}
      />
    </div>
  );
};

export default VideoZone;