import React from 'react';
import { X } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, itemName }) => {
  if (!isOpen) return null;

  const shareOptions = [
    { icon: '💬', name: '微信', color: '#07C160' },
    { icon: '🐧', name: 'QQ', color: '#12B7F5' },
    { icon: '🔗', name: '复制链接', color: '#666666' },
  ];

  const handleShare = (option: string) => {
    alert(`分享「${itemName}」至${option}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
      />

      <div className="relative w-full bg-white rounded-t-2xl animate-slide-up pb-safe">
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <h3 className="text-lg font-medium">分享到</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-8 px-6 py-6">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleShare(option.name)}
              className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${option.color}20` }}
              >
                {option.icon}
              </div>
              <span className="text-xs text-center">{option.name}</span>
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-4 text-center text-muted-foreground border-t border-border hover:bg-muted/30 transition-colors"
        >
          取消
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
