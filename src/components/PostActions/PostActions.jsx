import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SmileyIcon, CommentIcon } from '../UI/Icons';
import './PostActions.css';

const PostActions = ({
  reactions = ['🙏', '😍'],
  reactionCount = 7,
  commentCount = 10,
  onReactionClick,
  onEmojiPickerClick,
  onCommentClick,
}) => {
  return (
    <div className="post-actions">
      <div className="post-actions-left">
        <button 
          className="post-emoji-container-btn"
          onClick={onReactionClick}
          aria-label="View reactions"
        >
          {reactions.map((emoji, index) => (
            <span key={index} className="post-emoji">{emoji}</span>
          ))}
          <span className="post-emoji-count">{reactionCount}</span>
        </button>
        
        <button 
          className="post-emoji-picker-btn" 
          onClick={onEmojiPickerClick}
          aria-label="Add reaction"
        >
          <SmileyIcon size={20} />
        </button>
        
        <button 
          className="post-comment-icon-btn" 
          onClick={onCommentClick}
          aria-label="Comment"
        >
          <CommentIcon size={20} />
        </button>
      </div>
      
      <button 
        className="post-comments-btn"
        onClick={onCommentClick}
        aria-label={`View ${commentCount} comments`}
      >
        {commentCount} Comments
      </button>
    </div>
  );
};

PostActions.propTypes = {
  reactions: PropTypes.arrayOf(PropTypes.string),
  reactionCount: PropTypes.number,
  commentCount: PropTypes.number,
  onReactionClick: PropTypes.func,
  onEmojiPickerClick: PropTypes.func,
  onCommentClick: PropTypes.func,
};

export default memo(PostActions);
