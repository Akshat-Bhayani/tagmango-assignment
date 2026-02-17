import React, { memo } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../UI/IconButton/IconButton';
import { CaretLeftIcon, InfoIcon } from '../UI/Icons';
import './SubHeader.css';

const SubHeader = () => {
  const handleBackClick = () => {
    console.log('Back clicked');
  };

  const handleInfoClick = () => {
    console.log('Info clicked');
  };

  return (
    <div className="subheader">
      <div className="subheader-content">
        <div className="subheader-left">
          <button className="back-button" onClick={handleBackClick} aria-label="Go back">
            <CaretLeftIcon size={24} className="caret-left-icon" />
            <span className="back-text">Back</span>
          </button>
          <div className="vertical-divider"></div>
          <span className="day-text">Day 1 of 9</span>
        </div>
        
        <div className="subheader-right">
          <span className="challenge-text">9-Day Fitness Challenge</span>
          <IconButton
            icon={<InfoIcon size={24} />}
            onClick={handleInfoClick}
            ariaLabel="Information"
            variant="ghost"
            size="sm"
            className="info-button"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(SubHeader);
