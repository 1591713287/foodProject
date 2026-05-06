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
    '北京烤鸭': '北京烤鸭.mp4',
    '十八街麻花': '十八街麻花.mp4',
    '驴肉火烧（保定）': '驴肉火烧.mp4',
    '南翔小笼包': '上海小笼包.mp4',
    '云南过桥米线': '云南过桥米线.mp4',
    '手把肉': '内蒙古冰煮羊.mp4',
    '卤肉饭': '台湾卤肉饭.mp4',
    '延边冷面': '延吉冷面.mp4',
    '重庆火锅': '重庆火锅.mp4',
    '宁夏枸杞': '宁夏手抓羊肉.mp4',
    '黄山臭鳜鱼': '安徽臭鳜鱼.mp4',
    '德州扒鸡': '山东德州扒鸡.mp4',
    '平遥牛肉': '平遥牛肉.mp4',
    '白切鸡': '广东白切鸡.mp4',
    '螺蛳粉': '广西螺蛳粉.mp4',
    '桂林米粉': '广西壮族五色糯米饭.mp4',
    '大盘鸡': '新疆烤全羊.mp4',
    '南京盐水鸭': '南京盐水鸭.mp4',
    '南昌瓦罐汤': '江西瓦罐汤.mp4',
    '文昌鸡': '海南文昌鸡.mp4',
    '潮汕牛肉丸': '湖南臭豆腐.mp4',
    '葡式蛋挞': '澳门猪扒包.mp4',
    '佛跳墙': '福州佛跳墙.mp4',
    '酥油茶': '西藏酥油茶.mp4',
    '酸汤鱼': '贵州黔东南.mp4',
    '腊汁肉夹馍': '陕西羊肉泡馍.mp4',
    '兰州牛肉面': '兰州牛肉面.mp4',
    '哈尔滨红肠': '哈尔滨红肠.mp4',
    '大连海参': '大连海参.mp4',
    '西湖醋鱼': '杭州西湖醋鱼.mp4',
    '孝感麻糖': '武汉热干面.mp4',
    '逍遥镇胡辣汤': '山西刀削面.mp4',
    '四川火锅': '广式叉烧饭.mp4',
    '尕面片': '哈尔滨锅包肉.mp4',
    '菠萝油': '广东.mp4',
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
    '逍遥镇胡辣汤': '/image/刀削面.webp',
    '四川火锅': '/image/叉烧.webp',
    '尕面片': '/image/锅包肉.webp',
    '菠萝油': '/image/广东白切鸡.webp',
  };

  const getVideoUrl = (foodName: string) => {
    const videoFile = videoFileMap[foodName];
    if (videoFile) {
      return `/${videoFile}`;
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