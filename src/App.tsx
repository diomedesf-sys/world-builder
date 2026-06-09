import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import type { ViewName } from './components/Sidebar';
import { SacredLibraryView } from './views/SacredLibraryView';
import { PosturesView } from './views/PosturesView';
import { MotionVerbsView } from './views/MotionVerbsView';
import { StudioView } from './views/StudioView';
import { PreviewView } from './views/PreviewView';

function App() {
  const [currentView, setCurrentView] = useState<ViewName>('library');

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1 overflow-y-auto">
        {currentView === 'library'  && <SacredLibraryView />}
        {currentView === 'postures' && <PosturesView />}
        {currentView === 'verbs'    && <MotionVerbsView />}
        {currentView === 'studio'   && <StudioView />}
        {currentView === 'preview'  && <PreviewView />}
      </main>
    </div>
  );
}

export default App;
