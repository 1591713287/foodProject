import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Feedback: React.FC = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('功能建议');
  const [content, setContent] = useState('');
  const [contact, setContact] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const feedbackTypes = ['功能建议', '问题反馈', '内容纠错', '其他'];

  const handleSubmit = async () => {
    if (!content.trim()) {
      alert('请输入反馈内容');
      return;
    }

    setSubmitting(true);
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitting(false);

    alert('感谢您的反馈！我们会认真处理您的意见。');
    navigate(-1);
  };

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
          <h1 className="flex-1 text-center text-lg font-bold -ml-10">意见反馈</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* 反馈类型 */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">反馈类型</label>
          <div className="grid grid-cols-2 gap-3">
            {feedbackTypes.map((item) => (
              <button
                key={item}
                onClick={() => setType(item)}
                className={`h-12 rounded-lg border-2 font-medium transition-all ${
                  type === item
                    ? 'border-[#C8102E] bg-[#C8102E]/5 text-[#C8102E]'
                    : 'border-border bg-white text-muted-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* 反馈内容 */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">反馈内容</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="请详细描述您的问题或建议，我们会认真对待每一条反馈..."
            maxLength={500}
            rows={8}
            className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 resize-none"
          />
          <p className="text-xs text-muted-foreground text-right">
            {content.length}/500
          </p>
        </div>

        {/* 联系方式 */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            联系方式 <span className="text-muted-foreground font-normal">（选填）</span>
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="手机号/邮箱，方便我们与您联系"
            maxLength={50}
            className="w-full h-12 px-4 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20"
          />
        </div>

        {/* 提交按钮 */}
        <button
          onClick={handleSubmit}
          disabled={submitting || !content.trim()}
          className="w-full h-14 bg-[#C8102E] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#A00D26] transition-all active:scale-98"
        >
          {submitting ? '提交中...' : '提交反馈'}
        </button>

        {/* 说明文字 */}
        <div className="p-4 bg-gradient-to-r from-[#C8102E]/5 to-[#D4A574]/5 rounded-lg">
          <p className="text-sm text-muted-foreground leading-relaxed">
            💡 您的每一条反馈都很重要！我们会在3个工作日内处理您的反馈，如有需要会通过您提供的联系方式与您沟通。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
