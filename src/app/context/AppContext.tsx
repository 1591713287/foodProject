import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  phone: string;
  nickname: string;
  avatar?: string;
  bio?: string;
}

interface AppContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (phone: string, password: string) => Promise<boolean>;
  register: (phone: string, code: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
  lastCategory: string;
  setLastCategory: (category: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [searchKeyword, setSearchKeyword] = useState('');
  const [lastCategory, setLastCategory] = useState('hot');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedFavorites = localStorage.getItem('favorites');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }

    if (savedFavorites) {
      setFavorites(new Set(JSON.parse(savedFavorites)));
    }
  }, []);

  const login = async (phone: string, password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (phone && password.length >= 6) {
      const newUser = {
        phone,
        nickname: `用户${phone.slice(-4)}`,
      };
      setUser(newUser);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const register = async (phone: string, code: string, password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (phone && code && password.length >= 6) {
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const toggleFavorite = (id: string) => {
    if (!isLoggedIn) return;

    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify([...newFavorites]));
  };

  const isFavorite = (id: string) => favorites.has(id);

  return (
    <AppContext.Provider value={{
      isLoggedIn,
      user,
      login,
      register,
      logout,
      updateUser,
      favorites,
      toggleFavorite,
      isFavorite,
      searchKeyword,
      setSearchKeyword,
      lastCategory,
      setLastCategory
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
