import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div style={{
      border: '2px solid #3498db',
      borderRadius: '10px',
      padding: '25px',
      marginBottom: '20px',
      backgroundColor: '#f8fafc'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span style={{
          backgroundColor: '#3498db',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          1
        </span>
        Profile Page
      </h2>
      <p style={{
        color: '#7f8c8d',
        marginBottom: '20px',
        paddingLeft: '50px'
      }}>
        This component no longer receives userData as a prop. 
        It simply renders the UserInfo component.
      </p>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;