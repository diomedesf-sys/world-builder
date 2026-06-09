import { useState } from 'react';
import { Grid3X3, User, Zap, Layers, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export type ViewName = 'library' | 'postures' | 'verbs' | 'studio' | 'preview';

interface SidebarProps {
  currentView: ViewName;
  onNavigate: (view: ViewName) => void;
}

const NAV_ITEMS = [
  { id: 'library' as ViewName, label: 'Sacred Library', icon: Grid3X3 },
  { id: 'postures' as ViewName, label: 'Postures', icon: User },
  { id: 'verbs' as ViewName, label: 'Motion Verbs', icon: Zap },
  { id: 'studio' as ViewName, label: 'Studio', icon: Layers },
  { id: 'preview' as ViewName, label: 'Preview', icon: Play },
];

export const Sidebar = ({ currentView, onNavigate }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${collapsed ? 'w-16' : 'w-52'} h-screen bg-gray-900 border-r border-gray-800 flex flex-col shrink-0 transition-all duration-300`}
    >
      {/* Logo */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center gap-3 px-4 py-5 border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
      >
        <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="16" cy="16" r="13" opacity="0.25" />
          <circle cx="16" cy="16" r="8" opacity="0.55" />
          <circle cx="16" cy="16" r="3.5" />
        </svg>
        {!collapsed && (
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-200">
            WorldBuilder
          </span>
        )}
      </button>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 space-y-1">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              currentView === id
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <Icon size={17} className="shrink-0" />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center h-10 border-t border-gray-800 text-gray-500 hover:text-white transition-colors"
      >
        {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
      </button>
    </div>
  );
};
