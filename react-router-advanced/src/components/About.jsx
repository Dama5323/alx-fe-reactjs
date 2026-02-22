import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About This Demo</h1>
      <p className="intro">
        This project showcases advanced routing capabilities in React Router v6
      </p>
      
      <div className="routing-concepts">
        <div className="concept-card">
          <h2>Nested Routes</h2>
          <p>Profile component contains nested routes:</p>
          <ul>
            <li><code>/profile</code> - ProfileDetails component</li>
            <li><code>/profile/settings</code> - ProfileSettings component</li>
          </ul>
          <div className="code-example">
            <pre>
              {`// Nested routes configuration
<Route path="/profile/*" element={<Profile />}>
  <Route index element={<ProfileDetails />} />
  <Route path="settings" element={<ProfileSettings />} />
</Route>`}
            </pre>
          </div>
        </div>

        <div className="concept-card">
          <h2>Dynamic Routes</h2>
          <p>Blog posts use URL parameters:</p>
          <ul>
            <li><code>/post/1</code> - First blog post</li>
            <li><code>/post/2</code> - Second blog post</li>
            <li><code>/post/:postId</code> - Dynamic parameter</li>
          </ul>
          <div className="code-example">
            <pre>
              {`// Dynamic route with parameter
<Route path="/post/:postId" element={<BlogPost />} />

// Access parameter in component
const { postId } = useParams();`}
            </pre>
          </div>
        </div>

        <div className="concept-card">
          <h2>Protected Routes</h2>
          <p>Routes that require authentication:</p>
          <ul>
            <li><code>/profile</code> - Requires login</li>
            <li><code>/profile/settings</code> - Requires login</li>
          </ul>
          <div className="code-example">
            <pre>
              {`// Protected route wrapper
<Route element={<ProtectedRoute />}>
  <Route path="/profile/*" element={<Profile />} />
</Route>

// ProtectedRoute component checks auth
if (!user) return <Navigate to="/login" />;`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;