import React from 'react';
import { useQuery } from 'react-query';
import './PostsComponent.css';

// Fetch posts function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query's useQuery hook
  const { data: posts, isLoading, error, refetch, isFetching } = useQuery(
    'posts', // Query key for caching
    fetchPosts,
    {
      staleTime: 50000, // Data stays fresh for 50 seconds
      cacheTime: 100000, // Cache persists for 100 seconds
      onSuccess: (data) => {
        console.log('Posts fetched successfully:', data.length);
      },
      onError: (error) => {
        console.error('Error fetching posts:', error);
      }
    }
  );

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Error loading posts</h3>
        <p>{error.message}</p>
        <button onClick={() => refetch()} className="retry-btn">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h2>Posts ({posts?.length})</h2>
        <button 
          onClick={() => refetch()} 
          className="refetch-btn"
          disabled={isFetching}
        >
          {isFetching ? 'Refetching...' : 'Refetch Posts'}
        </button>
      </div>
      
      {isFetching && (
        <div className="fetching-indicator">
          <span>Updating data...</span>
        </div>
      )}

      <div className="posts-grid">
        {posts?.slice(0, 10).map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className="post-meta">
              <span>Post ID: {post.id}</span>
              <span>User ID: {post.userId}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="cache-info">
        <h4>React Query Features Demonstrated:</h4>
        <ul>
          <li>✅ Automatic caching - Data persists when navigating away and back</li>
          <li>✅ Background refetching - Click "Refetch Posts" to update data</li>
          <li>✅ Loading and error states handled gracefully</li>
          <li>✅ Stale data management with configurable staleTime</li>
        </ul>
      </div>
    </div>
  );
};

export default PostsComponent;