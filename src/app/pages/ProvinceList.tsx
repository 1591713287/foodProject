import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, List } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import { provinces } from '../data/provinces';

const ProvinceList: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-white border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">省份美食</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid'
                  ? 'bg-[#C8102E] text-white'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list'
                  ? 'bg-[#C8102E] text-white'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-3 gap-3">
            {provinces.map((province) => (
              <button
                key={province.id}
                onClick={() => navigate(`/province/${province.id}`)}
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <img
                  src={province.image}
                  alt={province.name}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <div className="text-sm font-medium">{province.name}</div>
                <div className="text-xs text-muted-foreground text-center line-clamp-2 h-8">
                  {province.slogan}
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {provinces.map((province) => (
              <button
                key={province.id}
                onClick={() => navigate(`/province/${province.id}`)}
                className="w-full flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <img
                  src={province.image}
                  alt={province.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-base mb-1">{province.name}</h3>
                  <p className="text-sm text-muted-foreground">{province.slogan}</p>
                </div>
                <div className="text-muted-foreground">→</div>
              </button>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default ProvinceList;
