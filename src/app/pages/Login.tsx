import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useApp();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');

    if (!phone) {
      setError('请输入手机号或账号');
      return;
    }

    if (!password) {
      setError('请输入密码');
      return;
    }

    if (password.length < 6) {
      setError('密码长度不能少于6位');
      return;
    }

    setLoading(true);
    const success = await login(phone, password);
    setLoading(false);

    if (success) {
      // 获取之前保存的跳转页面，默认跳转到首页
      const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/home';
      sessionStorage.removeItem('redirectAfterLogin');
      navigate(redirectPath);
    } else {
      setError('账号或密码错误，请重试');
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
        <h2 className="flex-1 text-center text-lg font-medium -ml-10">账号登录</h2>
      </div>

      <div className="flex-1 px-6 pt-12">
        <div className="space-y-6">
          <div>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="请输入手机号或账号"
              className="w-full h-14 px-4 bg-input-background rounded-lg border border-border focus:border-[#C8102E] focus:outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码（至少6位）"
              className="w-full h-14 px-4 pr-12 bg-input-background rounded-lg border border-border focus:border-[#C8102E] focus:outline-none transition-colors"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 px-4 py-2 rounded">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading || !phone || !password}
            className="w-full h-14 bg-[#C8102E] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#A00D26] transition-all active:scale-98"
          >
            {loading ? '登录中...' : '登录'}
          </button>

          <div className="flex justify-between items-center text-sm">
            <button className="text-muted-foreground hover:text-[#C8102E] transition-colors">
              忘记密码？
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 pb-8 text-center">
        <p className="text-sm text-muted-foreground">
          没有账号？
          <button
            onClick={() => navigate('/register')}
            className="text-[#C8102E] ml-1 hover:underline"
          >
            去注册
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
