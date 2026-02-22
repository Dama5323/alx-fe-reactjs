import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './BlogPost.css';

// Mock blog posts data
const blogPosts = {
  1: {
    title: "Getting Started with React Router",
    content: "React Router is a powerful library for handling routing in React applications. It enables navigation between views, dynamic routing, and nested routes...",
    author: "John Doe",
    date: "2026-02-15",
    readTime: "5 min read",
    tags: ["React", "Routing", "Beginner"]
  },
  2: {
    title: "Advanced Routing Techniques",
    content: "Learn about nested routes, protected routes, and dynamic routing patterns in React Router v6. This comprehensive guide covers everything you need...",
    author: "Jane Smith",
    date: "2026-02-16",
    readTime: "8 min read",
    tags: ["Advanced", "React Router", "Tutorial"]
  },
  3: {
    title: "Building Protected Routes",
    content: "Implement authentication and authorization in your React apps with protected routes. Learn how to create route guards and handle user sessions...",
    author: "Bob Johnson",
    date: "2026-02-17",
    readTime: "6 min read",
    tags: ["Authentication", "Security", "React"]
  }
};

const BlogPost = () => {
  const { postId } = useParams(); // Dynamic route parameter
  const navigate = useNavigate();
  
  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="not-found">
        <h1>404 - Post Not Found</h1>
        <p>The blog post with ID "{postId}" doesn't exist.</p>
        <p>Try one of these available posts:</p>
        <div className="suggestions">
          <Link to="/post/1" className="suggestion-link">Post 1</Link>
          <Link to="/post/2" className="suggestion-link">Post 2</Link>
          <Link to="/post/3" className="suggestion-link">Post 3</Link>
        </div>
        <button onClick={() => navigate('/')} className="home-btn">
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <header className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="author">By {post.author}</span>
          <span className="date">Published: {post.date}</span>
          <span className="read-time">{post.readTime}</span>
        </div>
        <div className="tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </header>

      <div className="post-content">
        <p>{post.content}</p>
        <p>This is a dynamic route demo. The post ID "{postId}" was extracted from the URL using the useParams hook.</p>
      </div>

      <div className="post-navigation">
        <h3>Other Posts:</h3>
        <div className="nav-links">
          {Object.keys(blogPosts).map(id => (
            <Link 
              key={id} 
              to={`/post/${id}`}
              className={id === postId ? 'current' : ''}
            >
              {blogPosts[id].title}
            </Link>
          ))}
        </div>
      </div>

      <div className="dynamic-route-demo">
        <h4>Dynamic Route Demo</h4>
        <p><strong>Current URL:</strong> /post/{postId}</p>
        <p><strong>Parameter value:</strong> {postId}</p>
        <p><code>const &#123; postId &#125; = useParams();</code></p>
      </div>
    </article>
  );
};

export default BlogPost;