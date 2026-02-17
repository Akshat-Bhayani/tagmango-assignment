import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import SubmissionHeader from '../SubmissionHeader/SubmissionHeader';
import PostActions from '../PostActions/PostActions';
import Avatar from '../UI/Avatar/Avatar';
import IconButton from '../UI/IconButton/IconButton';
import { DotsHorizontalIcon } from '../UI/Icons';
import { useTimeAgo } from '../../hooks/useTimeAgo';
import './FeedPostCard.css';

const FeedPostCard = ({ post, showSubmissionHeader = false }) => {
  const timeAgo = useTimeAgo(post.timestamp);

  const handleMenuClick = useCallback(() => {
    console.log('Menu clicked for post:', post.id);
  }, [post.id]);

  const handleReactionClick = useCallback(() => {
    console.log('Reactions clicked for post:', post.id);
  }, [post.id]);

  const handleEmojiPickerClick = useCallback(() => {
    console.log('Emoji picker clicked for post:', post.id);
  }, [post.id]);

  const handleCommentClick = useCallback(() => {
    console.log('Comments clicked for post:', post.id);
  }, [post.id]);

  return (
    <article className={`feed-post-card ${showSubmissionHeader ? 'feed-post-card--with-header' : ''}`}>
      {showSubmissionHeader && <SubmissionHeader />}
      
      <div className="post-header">
        <div className="post-author">
          <Avatar 
            src={post.author.avatar} 
            alt={post.author.name}
            size="md"
            className="post-avatar"
          />
          <div className="post-author-info">
            <h3 className="post-author-name">{post.author.name}</h3>
            <span className="post-time">{timeAgo || '1s'}</span>
          </div>
        </div>
        <div className="post-header-right">
          <IconButton
            icon={<DotsHorizontalIcon size={20} />}
            onClick={handleMenuClick}
            ariaLabel="More options"
            variant="ghost"
            size="sm"
            className="post-menu-btn"
          />
        </div>
      </div>

      <div className="post-content">
        <p className="post-text">{post.content}</p>
        {post.image && (
          <div className="post-image-container">
            <img 
              src={post.image} 
              alt="Post content"
              className="post-image"
              loading="lazy"
            />
          </div>
        )}
      </div>

      <PostActions
        reactions={['🙏', '😍']}
        reactionCount={post.reactions || 7}
        commentCount={post.comments || 10}
        onReactionClick={handleReactionClick}
        onEmojiPickerClick={handleEmojiPickerClick}
        onCommentClick={handleCommentClick}
      />
    </article>
  );
};

FeedPostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string,
    }).isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number]),
    reactions: PropTypes.number,
    comments: PropTypes.number,
    shares: PropTypes.number,
  }).isRequired,
  showSubmissionHeader: PropTypes.bool,
};

FeedPostCard.defaultProps = {
  showSubmissionHeader: false,
};

export default memo(FeedPostCard);
