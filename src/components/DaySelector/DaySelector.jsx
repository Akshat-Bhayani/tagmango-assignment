import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CheckIcon, LockIcon } from '../UI/Icons';
import { CONFIG } from '../../utils/config';
import './DaySelector.css';

const DaySelector = ({ selectedDay, onDaySelect, disabled = false }) => {
  const days = Array.from({ length: CONFIG.DAY_SELECTOR.DAYS_COUNT }, (_, i) => i + 1);

  const handleDayClick = useCallback((day) => {
    if (!disabled && day <= 1 && onDaySelect) {
      onDaySelect(day);
    }
  }, [disabled, onDaySelect]);

  return (
    <>
      {days.map((day) => {
        const isSelected = selectedDay === day;
        const isLocked = day > 1;
        
        return (
          <button
            key={day}
            className={`day-button ${isSelected ? 'day-button--active' : ''} ${isLocked ? 'day-button--locked' : ''}`}
            onClick={() => handleDayClick(day)}
            disabled={disabled || isLocked}
            aria-label={`Day ${day}${isLocked ? ' (locked)' : ''}`}
            aria-disabled={isLocked}
          >
            <div className="day-label-container">
              <span className="day-label">Day - {day}</span>
            </div>
            {isSelected ? (
              <CheckIcon size={18} className="day-icon day-icon--check" />
            ) : isLocked ? (
              <LockIcon size={18} className="day-icon day-icon--lock" />
            ) : null}
          </button>
        );
      })}
    </>
  );
};

DaySelector.propTypes = {
  selectedDay: PropTypes.number.isRequired,
  onDaySelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

DaySelector.defaultProps = {
  disabled: false,
};

export default memo(DaySelector);
