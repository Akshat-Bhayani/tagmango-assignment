import React, { useState, useEffect } from 'react';
import DaySelector from '../DaySelector/DaySelector';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isLocked ? 'sidebar--locked' : ''} ${isOpen ? 'sidebar--open' : ''}`}>

      <div className={`sidebar-content ${isLocked ? 'sidebar-content--blurred' : ''}`}>
        <div className="sidebar-gap"></div>
        <DaySelector 
          selectedDay={selectedDay} 
          onDaySelect={setSelectedDay}
          disabled={isLocked}
        />
        
       
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
