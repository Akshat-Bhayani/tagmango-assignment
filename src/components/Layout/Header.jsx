import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';
import IconButton from '../UI/IconButton/IconButton';
import Avatar from '../UI/Avatar/Avatar';
import { BellIcon } from '../UI/Icons';
import './Header.css';

const Header = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button 
            className="menu-toggle"
            onClick={onMenuClick}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div className="header-logo">
            <h1>BackstagePass</h1>
          </div>
        </div>
        <nav className="header-nav">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <button className="header-icon-btn fire-icon-btn" aria-label="Fire">
            <span className="icon">🔥</span>
            <span className="fire-number">12</span>
          </button>
          
          <IconButton
            icon={<BellIcon size={20} />}
            onClick={() => console.log('Notifications clicked')}
            ariaLabel="Notifications"
            variant="outline"
            size="md"
            className="notification-icon-btn"
          />
          
          <div className="header-profile">
            <Avatar 
              src="https://i.pravatar.cc/150?img=3" 
              alt="Profile"
              size="md"
              className="profile-photo"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default memo(Header);
