import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AboutApp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="flex items-center px-4 py-4">
          <button
            onClick={() => navigate('/profile')}
            className="w-10 h-10 -ml-2 flex items-center justify-center hover:bg-muted rounded-lg transition-colors cursor-pointer z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center text-lg font-bold -ml-10">关于APP</h1>
        </div>
      </div>

      <div className="px-4 py-8 space-y-8">
        {/* Logo和标题 */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#C8102E]/20 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1599353510826-7d21e0eb5365?w=200"
              alt="中华风物志"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#C8102E] mb-2">中华风物志</h2>
            <p className="text-sm text-muted-foreground">v1.0.0</p>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center">
          <p className="text-lg font-medium mb-2">一城一味 · 一物一史</p>
          <p className="text-sm text-muted-foreground">读懂中国地方文化</p>
        </div>

        {/* 核心信息 */}
        <div className="bg-gradient-to-br from-[#C8102E]/5 to-[#D4A574]/5 rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-lg mb-4">核心定位</h3>
          <p className="text-sm leading-relaxed text-foreground">
            以乡村经济振兴、文化赋能产业为背景，汇聚全国34个省级行政区美食，打造集文化科普、视听展示、收藏分享于一体的移动端文化平台。
          </p>
        </div>

        {/* 功能特色 */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">功能特色</h3>
          <div className="space-y-3">
            <FeatureItem
              icon="🗺️"
              title="省份美食"
              description="覆盖全国34个省级行政区，展示地方美食"
            />
            <FeatureItem
              icon="🏅"
              title="荣誉认证"
              description="真实可查的国家地理标志、老字号等认证"
            />
            <FeatureItem
              icon="🎬"
              title="文化视频"
              description="人物解说、实拍视频，深度了解美食背后的故事"
            />
            <FeatureItem
              icon="❤️"
              title="收藏分享"
              description="一键收藏喜爱的美食，分享给亲朋好友"
            />
          </div>
        </div>

        {/* 战略背景 */}
        <div className="bg-white rounded-lg p-6 border border-border">
          <h3 className="font-bold text-lg mb-3">战略背景</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            响应文化赋能乡村经济振兴的号召，通过数字化手段传播中华传统文化，助力地方特色产业发展。
          </p>
        </div>

        {/* 联系方式 */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">联系我们</h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-muted-foreground">官方网站</span>
              <span className="text-[#C8102E]">www.zhonghuafengwuzhi.cn</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">客服邮箱</span>
              <span className="text-[#C8102E]">service@zhfwz.cn</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">客服热线</span>
              <span className="text-[#C8102E]">400-888-8888</span>
            </p>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="pt-6 border-t border-border text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            © 2026 中华风物志 版权所有
          </p>
          <p className="text-xs text-muted-foreground">
            中华人民共和国增值电信业务经营许可证
          </p>
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-3 p-4 bg-white rounded-lg border border-border">
      <div className="text-3xl flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default AboutApp;
