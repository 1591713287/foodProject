import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const VersionInfo: React.FC = () => {
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
          <h1 className="flex-1 text-center text-lg font-bold -ml-10">版本信息</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* 当前版本 */}
        <div className="bg-gradient-to-br from-[#C8102E] to-[#D4A574] rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">v1.0.0</h2>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              当前版本
            </span>
          </div>
          <p className="text-white/90 text-sm">发布日期：2026年4月24日</p>
        </div>

        {/* 版本特性 */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">本版本特性</h3>
          <div className="bg-white rounded-lg border border-border p-4 space-y-3">
            <FeatureItem text="全新上线，覆盖全国34个省级行政区" />
            <FeatureItem text="精选地方美食数据库" />
            <FeatureItem text="国家地理标志、老字号认证展示" />
            <FeatureItem text="文化视频专区，深度了解风物故事" />
            <FeatureItem text="个性化收藏与分享功能" />
            <FeatureItem text="用户账号体系与个人中心" />
          </div>
        </div>

        {/* 更新日志 */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">更新日志</h3>

          <div className="space-y-4">
            <UpdateLogItem
              version="v1.0.0"
              date="2026-04-24"
              items={[
                '🎉 中华风物志正式发布',
                '📍 34省风物数据库上线',
                '🏅 荣誉认证体系接入',
                '🎬 文化视频专区开放',
                '❤️ 收藏分享功能上线',
                '👤 用户系统与个人中心'
              ]}
              isCurrent
            />
          </div>
        </div>

        {/* 技术信息 */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">技术信息</h3>
          <div className="bg-white rounded-lg border border-border divide-y divide-border">
            <InfoRow label="版本号" value="1.0.0" />
            <InfoRow label="构建号" value="20260424001" />
            <InfoRow label="系统要求" value="iOS 13.0+ / Android 8.0+" />
            <InfoRow label="框架版本" value="React 18.3.1" />
            <InfoRow label="更新渠道" value="正式版" />
          </div>
        </div>

        {/* 检查更新按钮 */}
        <button
          onClick={() => alert('当前已是最新版本')}
          className="w-full h-12 bg-white border-2 border-[#C8102E] text-[#C8102E] rounded-lg font-medium hover:bg-[#C8102E]/5 transition-all"
        >
          检查更新
        </button>

        {/* 说明文字 */}
        <div className="text-center text-xs text-muted-foreground">
          <p>感谢您使用中华风物志</p>
          <p className="mt-1">我们会持续优化产品体验</p>
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
      <span className="text-sm text-foreground">{text}</span>
    </div>
  );
};

interface UpdateLogItemProps {
  version: string;
  date: string;
  items: string[];
  isCurrent?: boolean;
}

const UpdateLogItem: React.FC<UpdateLogItemProps> = ({ version, date, items, isCurrent }) => {
  return (
    <div className="bg-white rounded-lg border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-bold text-[#C8102E]">{version}</h4>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{date}</span>
          {isCurrent && (
            <span className="px-2 py-0.5 bg-[#C8102E]/10 text-[#C8102E] text-xs rounded">
              当前
            </span>
          )}
        </div>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-foreground pl-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground font-medium">{value}</span>
    </div>
  );
};

export default VersionInfo;
