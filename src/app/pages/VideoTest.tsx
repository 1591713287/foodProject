import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoTest: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/北京烤鸭.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    alert('123');
    setError('');
    setIsLoading(true);
    console.log('点击播放按钮');
    console.log('videoRef.current:', videoRef.current);
    console.log('视频src:', videoRef.current?.src);

    try {
      if (videoRef.current) {
        console.log('开始播放...');
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          console.log('播放成功');
        }).catch(err => {
          console.error('播放失败:', err);
          setError(`播放失败: ${err.message}`);
        });
      }
    } catch (err: any) {
      console.error('播放失败:', err);
      setError(`播放失败: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoLoaded = () => {
    console.log('视频加载完成');
    setIsLoading(false);
  };

  const handleVideoError = (e: any) => {
    console.error('视频加载错误:', e);
    console.error('视频错误:', videoRef.current?.error);
    setError('视频加载失败，请检查视频文件是否存在');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h2 className="text-white text-xl mb-4">视频播放测试</h2>

      <div className="w-full max-w-lg aspect-video bg-black rounded-lg overflow-hidden relative">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full"
          playsInline
          onCanPlay={handleVideoLoaded}
          onError={handleVideoError}
          onLoadStart={() => console.log('开始加载视频')}
        />

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <button
              onClick={handlePlay}
              disabled={isLoading}
              className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 disabled:opacity-50"
            >
              {isLoading ? (
                <span className="text-white text-sm">加载中</span>
              ) : (
                <Play size={28} className="text-white ml-1" />
              )}
            </button>
          </div>
        )}

        {isPlaying && (
          <button
            onClick={handlePause}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center"
          >
            <Pause size={20} className="text-white" />
          </button>
        )}
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-900/50 rounded text-red-300 text-sm">
          {error}
        </div>
      )}

      <div className="mt-4 text-gray-400 text-sm">
        <p>视频路径: {videoSrc}</p>
        <p className="mt-1">状态: {isPlaying ? '播放中' : isLoading ? '加载中' : '已暂停'}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setVideoSrc('/北京烤鸭.mp4')}
          className="px-3 py-1 bg-white/20 text-white rounded text-sm"
        >
          北京烤鸭
        </button>
        <button
          onClick={() => setVideoSrc('/上海小笼包.mp4')}
          className="px-3 py-1 bg-white/20 text-white rounded text-sm"
        >
          上海小笼包
        </button>
        <button
          onClick={() => setVideoSrc('/云南过桥米线.mp4')}
          className="px-3 py-1 bg-white/20 text-white rounded text-sm"
        >
          云南米线
        </button>
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 bg-white/20 text-white rounded-lg"
      >
        返回首页
      </button>
    </div>
  );
};

export default VideoTest;