import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <div style={{
      border: '1px solid #bdc3c7',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '10px',
      backgroundColor: 'white'
    }}>
      <h3 style={{
        color: '#34495e',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span style={{
          backgroundColor: '#27ae60',
          color: 'white',
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          2
        </span>
        User Information
      </h3>
      <p style={{
        color: '#95a5a6',
        marginBottom: '15px',
        paddingLeft: '45px'
      }}>
        This component also no longer receives userData as a prop. 
        It simply passes control to UserDetails.
      </p>
      <UserDetails />
    </div>
  );
}

export default UserInfo;