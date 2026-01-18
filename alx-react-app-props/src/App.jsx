import { useState } from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './context/UserContext';

function App() {
  // Define userData with some additional fields for demonstration
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 28,
    location: "New York",
    occupation: "Software Developer",
    joinDate: "2022-05-15"
  });

  // Optional: Function to update user data (for demonstration)
  const updateUserData = (newData) => {
    setUserData(prev => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f5f7fa'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#2c3e50',
          marginBottom: '30px',
          paddingBottom: '10px',
          borderBottom: '3px solid #3498db'
        }}>
          User Profile (Using Context API)
        </h1>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <ProfilePage />
        </div>
        
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#e8f4f8',
          borderRadius: '10px',
          border: '1px solid #3498db'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>
            Context API Demonstration
          </h3>
          <p style={{ color: '#34495e', lineHeight: '1.6' }}>
            This application demonstrates refactoring from prop drilling to Context API.
            The user data is now managed globally using React Context, eliminating the 
            need to pass props through intermediate components.
          </p>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;