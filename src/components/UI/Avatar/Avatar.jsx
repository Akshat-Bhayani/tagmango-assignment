import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({ src, alt, size = 'md', className = '' }) => {
  return (
    <div className={`avatar avatar--${size} ${className}`}>
      <img 
        src={src} 
        alt={alt || 'Avatar'}
        className="avatar-image"
        loading="lazy"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150?text=User';
        }}
      />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Avatar;
