import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';  // Import useAuth hook
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();  // Use the custom hook
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          React Router Advanced
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              end
            >
              Home
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </li>
          
          {/* Protected link - only show when authenticated */}
          {user && (
            <li className="nav-item">
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Profile
              </NavLink>
            </li>
          )}
          
          {/* Dynamic route example - using /blog/:id pattern */}
          <li className="nav-item">
            <NavLink 
                to="/blog/1"
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Sample Blog
              </NavLink>
          </li>
          
          <li className="nav-item">
            {user ? (
              <button onClick={handleLogout} className="logout-btn">
                Logout ({user.username})
              </button>
            ) : (
              <NavLink 
                to="/login" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;