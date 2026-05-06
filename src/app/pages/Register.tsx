import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useApp();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetCode = () => {
    if (!phone) {
      setError('请先输入手机号');
      return;
    }

    if (!/^1[3-9]\d{9}$/.test(phone)) {
      setError('请输入正确的手机号格式');
      return;
    }

    setError('');
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleRegister = async () => {
    setError('');

    if (!phone || !/^1[3-9]\d{9}$/.test(phone)) {
      setError('请输入正确的手机号');
      return;
    }

    if (!code) {
      setError('请输入验证码');
      return;
    }

    if (!password || password.length < 6) {
      setError('密码长度不能少于6位');
      return;
    }

    if (!agreed) {
      setError('请阅读并同意用户协议和隐私政策');
      return;
    }

    setLoading(true);
    const success = await register(phone, code, password);
    setLoading(false);

    if (success) {
      navigate('/login', { state: { message: '注册成功，请登录' } });
    } else {
      setError('注册失败，请重试');
    }
  };

  return (
    <div className="h-screen w-full bg-background flex flex-col">
      <div className="flex items-center px-4 py-4 border-b border-border">
        <button
          onClick={() => navigate('/auth-choice')}
          className="w-10 h-10 -ml-2 flex items-center justify-center hover:bg-muted rounded-lg transition-colors cursor-pointer z-10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="flex-1 text-center text-lg font-medium -ml-10">账号注册</h2>
      </div>

      <div className="flex-1 px-6 pt-12">
        <div className="space-y-6">
          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="请输入手机号"
              maxLength={11}
              className="w-full h-14 px-4 bg-input-background rounded-lg border border-border focus:border-[#C8102E] focus:outline-none transition-colors"
            />
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="请输入验证码"
              maxLength={6}
              className="flex-1 h-14 px-4 bg-input-background rounded-lg border border-border focus:border-[#C8102E] focus:outline-none transition-colors"
            />
            <button
              onClick={handleGetCode}
              disabled={countdown > 0 || !phone}
              className="w-28 h-14 bg-[#D4A574] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#C4956A] transition-all text-sm"
            >
              {countdown > 0 ? `${countdown}秒` : '获取验证码'}
            </button>
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请设置密码（至少6位）"
              className="w-full h-14 px-4 pr-12 bg-input-background rounded-lg border border-border focus:border-[#C8102E] focus:outline-none transition-colors"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 accent-[#C8102E] cursor-pointer"
            />
            <label htmlFor="agree" className="text-sm text-muted-foreground cursor-pointer flex-1">
              我已阅读并同意
              <span className="text-[#C8102E]">《用户协议》</span>和
              <span className="text-[#C8102E]">《隐私政策》</span>
            </label>
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 px-4 py-2 rounded">
              {error}
            </div>
          )}

          <button
            onClick={handleRegister}
            disabled={loading || !phone || !code || !password || !agreed}
            className="w-full h-14 bg-[#C8102E] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#A00D26] transition-all active:scale-98"
          >
            {loading ? '注册中...' : '注册'}
          </button>
        </div>
      </div>

      <div className="px-6 pb-8 text-center">
        <p className="text-sm text-muted-foreground">
          已有账号？
          <button
            onClick={() => navigate('/login')}
            className="text-[#C8102E] ml-1 hover:underline"
          >
            去登录
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
