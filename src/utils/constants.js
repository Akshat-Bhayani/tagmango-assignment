export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const MOCK_FEED_POST = {
  id: 1,
  author: {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    username: '@johndoe'
  },
  timestamp: new Date(Date.now() - 1000),
  content: 'Just finished an amazing workout session! Feeling energized and ready to take on the day. 💪✨',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
  likes: 245,
  comments: 32,
  shares: 12,
  reactions: 7
};

export const MOCK_SUBSCRIBER_POST = {
  id: 2,
  author: {
    name: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/150?img=2',
    username: '@janesmith'
  },
  timestamp: new Date(Date.now() - 5000),
  content: 'Excited to share my latest project with all my subscribers! This has been months in the making. 🎉',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  likes: 512,
  comments: 89,
  shares: 45,
  isSubscriber: true,
  reactions: 7
};

export const DEFAULT_PROFILE_PICS = [
  { src: 'https://i.pravatar.cc/150?img=1', alt: 'Profile 1' },
  { src: 'https://i.pravatar.cc/150?img=2', alt: 'Profile 2' },
  { src: 'https://i.pravatar.cc/150?img=3', alt: 'Profile 3' },
];
