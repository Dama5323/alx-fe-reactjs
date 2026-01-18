import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
  // Consume the context instead of receiving props
  const { userData } = useContext(UserContext);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h3>User Details (Using Context API)</h3>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {userData.age && <p>Age: {userData.age}</p>}
      {userData.location && <p>Location: {userData.location}</p>}
    </div>
  );
}

export default UserDetails;
