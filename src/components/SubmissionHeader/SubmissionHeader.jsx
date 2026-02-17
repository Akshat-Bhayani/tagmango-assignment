import React, { memo, useMemo } from 'react';
import './SubmissionHeader.css';

const SubmissionHeader = memo(() => {
  const confetti = useMemo(() => [
    { type: 'dot', color: '#FF6B6B', left: '8%', top: '20%', size: 4 },
    { type: 'dot', color: '#FFD93D', left: '15%', top: '60%', size: 5 },
    { type: 'dot', color: '#6BCB77', left: '25%', top: '30%', size: 4 },
    { type: 'dot', color: '#FF6B6B', left: '75%', top: '25%', size: 5 },
    { type: 'dot', color: '#4ECDC4', left: '85%', top: '55%', size: 4 },
    { type: 'dot', color: '#FFA07A', left: '92%', top: '35%', size: 4 },
    { type: 'shape', color: '#BB8FCE', left: '12%', top: '45%', size: 6, rotation: 15 },
    { type: 'shape', color: '#F7DC6F', left: '70%', top: '40%', size: 5, rotation: -20 },
    { type: 'shape', color: '#45B7D1', left: '20%', top: '70%', size: 5, rotation: 30 },
    { type: 'shape', color: '#98D8C8', left: '80%', top: '70%', size: 6, rotation: -15 },
  ], []);

  const streamers = useMemo(() => [
    { color: '#FF6B6B', left: '5%', top: '10%', rotation: -25, length: 25, width: 1.5 },
    { color: '#FFB6C1', left: '12%', top: '75%', rotation: 45, length: 20, width: 1.5 },
    { color: '#FFD93D', left: '18%', top: '5%', rotation: 15, length: 22, width: 1.5 },
    { color: '#6BCB77', left: '88%', top: '15%', rotation: 30, length: 24, width: 1.5 },
    { color: '#4ECDC4', left: '95%', top: '75%', rotation: -40, length: 21, width: 1.5 },
    { color: '#45B7D1', left: '82%', top: '5%', rotation: 20, length: 18, width: 1.5 },
    { color: '#FFA07A', left: '35%', top: '8%', rotation: -15, length: 19, width: 1.5 },
    { color: '#BB8FCE', left: '60%', top: '82%', rotation: -30, length: 23, width: 1.5 },
  ], []);

  return (
    <div className="submission-header">
      {confetti.map((item, index) => (
        <div
          key={`confetti-${index}`}
          className={`submission-confetti submission-confetti-${item.type}`}
          style={{
            left: item.left,
            top: item.top,
            '--confetti-color': item.color,
            '--confetti-size': `${item.size}px`,
            transform: item.rotation ? `rotate(${item.rotation}deg)` : 'none'
          }}
        />
      ))}

      {streamers.map((streamer, index) => (
        <div
          key={`streamer-${index}`}
          className="submission-streamer"
          style={{
            left: streamer.left,
            top: streamer.top,
            '--streamer-color': streamer.color,
            '--streamer-length': `${streamer.length}px`,
            transform: `rotate(${streamer.rotation}deg)`
          }}
        />
      ))}

      <div className="submission-header-content">
        <h2 className="submission-title">Your submission</h2>
      </div>
    </div>
  );
});

SubmissionHeader.displayName = 'SubmissionHeader';

export default SubmissionHeader;
