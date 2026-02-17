import React, { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/Layout/Header';
import SubHeader from './components/Layout/SubHeader';
import Sidebar from './components/Layout/Sidebar';
import MainContent from './components/Layout/MainContent';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="app">
          <Header onMenuClick={handleMenuToggle} />
          <SubHeader />
          <div className="app-body">
            <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
            <MainContent />
          </div>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
