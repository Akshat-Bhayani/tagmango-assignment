import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ 
  icon, 
  onClick, 
  ariaLabel, 
  className = '', 
  variant = 'ghost',
  size = 'md',
  disabled = false,
  ...rest 
}) => {
  return (
    <button
      className={`icon-button icon-button--${variant} icon-button--${size} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['ghost', 'outline', 'filled']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
};

export default IconButton;
