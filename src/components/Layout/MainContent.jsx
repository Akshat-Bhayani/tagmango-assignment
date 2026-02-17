import React, { memo } from 'react';
import FeedPostCard from '../FeedPostCard/FeedPostCard';
import SubscriberPostCard from '../SubscriberPostCard/SubscriberPostCard';
import OthersPostsContainer from '../OthersPostsContainer/OthersPostsContainer';
import { MOCK_FEED_POST, MOCK_SUBSCRIBER_POST } from '../../utils/constants';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <FeedPostCard post={MOCK_FEED_POST} showSubmissionHeader={true} />
        <OthersPostsContainer>
          <SubscriberPostCard post={MOCK_SUBSCRIBER_POST} />
          <FeedPostCard post={MOCK_FEED_POST} />
        </OthersPostsContainer>
      </div>
    </main>
  );
};

export default memo(MainContent);
