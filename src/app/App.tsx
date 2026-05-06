import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigationType } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { useEffect, useRef } from 'react';
import Splash from './pages/Splash';
import AuthChoice from './pages/AuthChoice';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProvinceList from './pages/ProvinceList';
import ProvinceDetail from './pages/ProvinceDetail';
import ItemDetail from './pages/ItemDetail';
import VideoZone from './pages/VideoZone';
import ProvinceFoodDetail from './pages/ProvinceFoodDetail';
import MyFavorites from './pages/MyFavorites';
import Profile from './pages/Profile';
import CategoryList from './pages/CategoryList';
import SearchPage from './pages/SearchPage';
import EditProfile from './pages/EditProfile';
import Feedback from './pages/Feedback';
import AboutApp from './pages/AboutApp';
import VersionInfo from './pages/VersionInfo';
import VideoTest from './pages/VideoTest';
import { ProtectedRoute } from './components/ProtectedRoute';

// 滚动管理组件
function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousPathRef = useRef<string>();

  useEffect(() => {
    // 禁用浏览器的滚动恢复
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // 随时保存当前页面的滚动位置
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(
        `scroll-${location.pathname}`,
        JSON.stringify({ x: window.scrollX, y: window.scrollY })
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    // 如果是POP（返回）操作，恢复滚动位置
    if (navigationType === 'POP') {
      const savedPosition = sessionStorage.getItem(`scroll-${location.pathname}`);
      if (savedPosition) {
        const { x, y } = JSON.parse(savedPosition);
        // 尝试多次恢复，确保内容渲染完成后能够正确滚动
        setTimeout(() => {
          window.scrollTo(x, y);
        }, 0);
        setTimeout(() => {
          window.scrollTo(x, y);
        }, 100);
      }
    }

    // 更新上一个路径
    previousPathRef.current = location.pathname;
  }, [location.pathname, navigationType]);

  return null;
}

function AppContent() {
  return (
    <div className="w-full min-h-screen relative">
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/auth-choice" element={<AuthChoice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/provinces" element={<ProvinceList />} />
        <Route path="/province/:id" element={<ProvinceDetail />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/videos" element={<VideoZone />} />
        <Route path="/province-food/:id" element={<ProvinceFoodDetail />} />
        <Route path="/favorites" element={
            <ProtectedRoute>
              <MyFavorites />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/edit-profile" element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          } />
          <Route path="/feedback" element={
            <ProtectedRoute>
              <Feedback />
            </ProtectedRoute>
          } />
        <Route path="/about" element={<AboutApp />} />
        <Route path="/version" element={<VersionInfo />} />
        <Route path="/category/:category" element={<CategoryList />} />
        <Route path="/video-test" element={<VideoTest />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppProvider>
  );
}