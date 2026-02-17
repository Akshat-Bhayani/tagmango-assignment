import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../UI/Avatar/Avatar';
import './OthersPostsContainer.css';

const OthersPostsContainer = ({ children }) => {
  const profilePics = [
    { src: 'https://i.pravatar.cc/150?img=1', alt: 'Profile 1' },
    { src: 'https://i.pravatar.cc/150?img=2', alt: 'Profile 2' },
    { src: 'https://i.pravatar.cc/150?img=3', alt: 'Profile 3' },
  ];

  return (
    <div className="others-posts-container">
      <div className="others-posts-header">
        <div className="others-posts-title-section">
          <span className="others-posts-title">See what others</span>
          <span className="others-posts-heart">❤️</span>
          <div className="others-posts-profiles">
            {profilePics.map((pic, index) => (
              <Avatar
                key={index}
                src={pic.src}
                alt={pic.alt}
                size="sm"
                className={`profile-pic ${index === 0 ? 'profile-pic-left' : index === 1 ? 'profile-pic-middle' : 'profile-pic-right'}`}
              />
            ))}
          </div>
          <span className="others-posts-title-end">shared</span>
        </div>
        <div className="others-posts-subheader">
          85+ participants already posted
        </div>
      </div>
      <div className="others-posts-content">
        {children}
      </div>
    </div>
  );
};

OthersPostsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(OthersPostsContainer);
