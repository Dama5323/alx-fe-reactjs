import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
  // Consume the context instead of receiving props
  const { userData, updateUserData } = useContext(UserContext);

  // Optional: Function to handle button click demonstration
  const handleUpdate = () => {
    const newName = userData.name === "Jane Doe" ? "Jane Smith" : "Jane Doe";
    updateUserData({ name: newName });
  };

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '25px',
      borderRadius: '8px',
      marginTop: '20px',
      border: '2px solid #ecf0f1'
    }}>
      <h4 style={{
        color: '#2c3e50',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span style={{
          backgroundColor: '#e74c3c',
          color: 'white',
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          3
        </span>
        User Details (Using Context API)
      </h4>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px',
        marginBottom: '25px'
      }}>
        <div style={{
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '6px',
          borderLeft: '4px solid #3498db'
        }}>
          <strong style={{ color: '#3498db', display: 'block', marginBottom: '5px' }}>
            Name:
          </strong>
          <span style={{ color: '#2c3e50', fontSize: '1.1rem' }}>
            {userData.name}
          </span>
        </div>
        
        <div style={{
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '6px',
          borderLeft: '4px solid #27ae60'
        }}>
          <strong style={{ color: '#27ae60', display: 'block', marginBottom: '5px' }}>
            Email:
          </strong>
          <span style={{ color: '#2c3e50', fontSize: '1.1rem' }}>
            {userData.email}
          </span>
        </div>
        
        <div style={{
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '6px',
          borderLeft: '4px solid #e74c3c'  // Fixed: Added missing #
        }}>
          <strong style={{ color: '#e74c3c', display: 'block', marginBottom: '5px' }}>
            Age:
          </strong>
          <span style={{ color: '#2c3e50', fontSize: '1.1rem' }}>
            {userData.age}
          </span>
        </div>
        
        <div style={{
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '6px',
          borderLeft: '4px solid #9b59b6'  // Fixed: Added missing #
        }}>
          <strong style={{ color: '#9b59b6', display: 'block', marginBottom: '5px' }}>
            Location:
          </strong>
          <span style={{ color: '#2c3e50', fontSize: '1.1rem' }}>
            {userData.location}
          </span>
        </div>
        
        <div style={{
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '6px',
          borderLeft: '4px solid #f39c12'  // Fixed: Added missing #
        }}>
          <strong style={{ color: '#f39c12', display: 'block', marginBottom: '5px' }}>
            Occupation:
          </strong>
          <span style={{ color: '#2c3e50', fontSize: '1.1rem' }}>
            {userData.occupation}
          </span>
        </div>
        
        <div style={{
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '6px',
          borderLeft: '4px solid #1abc9c'  // Fixed: Added missing #
        }}>
          <strong style={{ color: '#1abc9c', display: 'block', marginBottom: '5px' }}>
            Join Date:
          </strong>
          <span style={{ color: '#2c3e50', fontSize: '1.1rem' }}>
            {userData.joinDate}
          </span>
        </div>
      </div>
      
      {/* Demonstration of context update */}
      <div style={{
        padding: '15px',
        backgroundColor: '#e8f4f8',
        borderRadius: '8px',
        marginTop: '20px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#2c3e50', marginBottom: '15px' }}>
          <strong>Context Update Demonstration:</strong> Click below to update the user name
        </p>
        <button
          onClick={handleUpdate}
          style={{
            padding: '10px 25px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Update Name to {userData.name === "Jane Doe" ? "Jane Smith" : "Jane Doe"}
        </button>
      </div>
      
      <div style={{
        marginTop: '25px',
        padding: '15px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        border: '1px dashed #bdc3c7'
      }}>
        <p style={{
          color: '#7f8c8d',
          fontSize: '0.9rem',
          textAlign: 'center',
          margin: 0
        }}>
          <strong>Note:</strong> This component consumes data directly from UserContext 
          using the useContext hook, eliminating prop drilling through parent components.
        </p>
      </div>
    </div>
  );
}

export default UserDetails;