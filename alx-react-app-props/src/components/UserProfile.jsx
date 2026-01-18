import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '2px solid #4a90e2',
      borderRadius: '15px',
      padding: '20px',
      margin: '15px auto',
      maxWidth: '600px',
      backgroundColor: '#f8f9fa'
    }}>
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>
        <strong>Age:</strong> {userData.age}
      </p>
      <p>
        <strong>Bio:</strong> {userData.bio}
      </p>
    </div>
  );
}

export default UserProfile;
