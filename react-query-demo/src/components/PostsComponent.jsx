import React from 'react';
import { useQuery } from 'react-query';
import './PostsComponent.css';

// Fetch posts
const fetchPosts = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const PostsComponent = () => {

  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery('posts', fetchPosts, {
    staleTime: 50000,
    cacheTime: 100000,
    refetchOnWindowFocus: true,
    keepPreviousData: true
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return (
      <div>
        <h3>Error loading posts</h3>
        <p>{error.message}</p>
        <button onClick={() => refetch()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Posts ({posts.length})</h2>

      <button onClick={() => refetch()}>
        {isFetching ? "Refetching..." : "Refetch Posts"}
      </button>

      {posts.slice(0, 10).map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;