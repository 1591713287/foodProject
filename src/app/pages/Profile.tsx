import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Clock, MessageCircle, Info, LogOut, ChevronRight, Edit3, User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BottomNav from '../components/BottomNav';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useApp();
  const [toast, setToast] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  const handleLogout = () => {
    if (confirm('确定要退出登录吗？')) {
      logout();
      navigate('/home');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <div className="bg-gradient-to-br from-[#C8102E] to-[#D4A574] px-6 py-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <p className="text-white text-lg mb-6">未登录</p>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-2 bg-white text-[#C8102E] rounded-lg font-medium hover:bg-white/90 transition-all active:scale-98"
              >
                登录
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-2 bg-white/20 backdrop-blur-sm text-white border border-white rounded-lg font-medium hover:bg-white/30 transition-all active:scale-98"
              >
                注册
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2 bg-white">
          <MenuItem
            icon={<Info className="w-5 h-5" />}
            label="关于APP"
            onClick={() => alert('中华风物志 v1.0.0\n一城一味 · 一物一史')}
          />
        </div>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {toast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm z-50">
          {toast}
        </div>
      )}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center cursor-pointer"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="预览"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            onClick={() => setPreviewImage(null)}
          >
            ×
          </button>
        </div>
      )}
      <div className="bg-gradient-to-br from-[#C8102E] to-[#D4A574] px-6 py-12">
        <div className="flex items-start gap-4">
          <button
            onClick={() => user?.avatar && setPreviewImage(user.avatar)}
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity"
            disabled={!user?.avatar}
          >
            {user?.avatar ? (
              <img src={user.avatar} alt="头像" className="w-full h-full object-cover" />
            ) : (
              <User className="w-10 h-10 text-white" />
            )}
          </button>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-white text-xl font-bold">
                {user?.nickname || '用户'}
              </h2>
              <button
                onClick={() => navigate('/edit-profile')}
                className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#C8102E] rounded-full text-sm font-medium hover:bg-white transition-all active:scale-95 flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>编辑</span>
              </button>
            </div>
            {user?.bio && (
              <p className="text-white/90 text-sm line-clamp-2">{user.bio}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-2 bg-white">
        <MenuItem
          icon={<Heart className="w-5 h-5" />}
          label="我的收藏"
          onClick={() => navigate('/favorites')}
        />
        <MenuItem
          icon={<MessageCircle className="w-5 h-5" />}
          label="我的分享"
          onClick={() => showToast('我的分享功能开发中')}
        />
      </div>

      <div className="mt-2 bg-white">
        <MenuItem
          icon={<MessageCircle className="w-5 h-5" />}
          label="意见反馈"
          onClick={() => navigate('/feedback')}
        />
        <MenuItem
          icon={<Info className="w-5 h-5" />}
          label="关于APP"
          onClick={() => navigate('/about')}
        />
        <MenuItem
          icon={<span className="text-sm">📱</span>}
          label="版本信息"
          value="v1.0.0"
          onClick={() => navigate('/version')}
        />
      </div>

      <div className="mt-2 bg-white">
        <MenuItem
          icon={<LogOut className="w-5 h-5" />}
          label="退出登录"
          onClick={handleLogout}
          danger
        />
      </div>

      <BottomNav />
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  value?: string;
  onClick: () => void;
  danger?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, value, onClick, danger }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-6 py-4 hover:bg-muted/30 transition-colors border-b border-border last:border-b-0"
    >
      <div className="flex items-center gap-3">
        <div className={danger ? 'text-destructive' : 'text-muted-foreground'}>
          {icon}
        </div>
        <span className={danger ? 'text-destructive' : 'text-foreground'}>
          {label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        {value && <span className="text-sm text-muted-foreground">{value}</span>}
        {!danger && <ChevronRight className="w-5 h-5 text-muted-foreground" />}
      </div>
    </button>
  );
};

export default Profile;
