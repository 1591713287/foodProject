import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, User as UserIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useApp();
  const [nickname, setNickname] = useState(user?.nickname || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleSave = () => {
    updateUser({
      nickname: nickname.trim() || user?.nickname,
      bio: bio.trim(),
      avatar: avatar || user?.avatar
    });
    navigate(-1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('请上传 JPG、PNG、GIF 或 WebP 格式的图片');
      setTimeout(() => setUploadError(null), 3000);
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setUploadError('图片大小不能超过 2MB');
      setTimeout(() => setUploadError(null), 3000);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatar(event.target?.result as string);
      setUploadError(null);
    };
    reader.readAsDataURL(file);

    e.target.value = '';
  };

  const handleAvatarUpload = () => {
    document.getElementById('avatar-input')?.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={() => navigate('/profile')}
            className="w-10 h-10 -ml-2 flex items-center justify-center hover:bg-muted rounded-lg transition-colors cursor-pointer z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold">编辑资料</h1>
          <button
            onClick={handleSave}
            className="px-4 py-1.5 bg-[#C8102E] text-white rounded-lg text-sm font-medium hover:bg-[#A00D26] transition-colors"
          >
            保存
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* 头像 */}
        <div className="flex flex-col items-center gap-4">
          <input
            type="file"
            id="avatar-input"
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-muted">
              {avatar ? (
                <img src={avatar} alt="头像" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <UserIcon className="w-12 h-12 text-muted-foreground" />
                </div>
              )}
            </div>
            <button
              onClick={handleAvatarUpload}
              className="absolute bottom-0 right-0 p-2 bg-[#C8102E] text-white rounded-full shadow-lg hover:bg-[#A00D26] transition-colors"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>
          {uploadError && (
            <p className="text-sm text-destructive">{uploadError}</p>
          )}
          <p className="text-sm text-muted-foreground">点击相机图标更换头像</p>
        </div>

        {/* 昵称 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">昵称</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="请输入昵称"
            maxLength={20}
            className="w-full h-12 px-4 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20"
          />
          <p className="text-xs text-muted-foreground text-right">
            {nickname.length}/20
          </p>
        </div>

        {/* 简介 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">个人简介</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="介绍一下自己吧..."
            maxLength={100}
            rows={4}
            className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 resize-none"
          />
          <p className="text-xs text-muted-foreground text-right">
            {bio.length}/100
          </p>
        </div>

        {/* 账号信息（只读） */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">账号</label>
          <div className="w-full h-12 px-4 bg-muted/50 border border-border rounded-lg flex items-center text-muted-foreground">
            {user?.phone}
          </div>
          <p className="text-xs text-muted-foreground">账号信息不可修改</p>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
