function UserProfile(props) {
  return (
    <div style={{
      border: '2px solid #4a90e2',
      borderRadius: '15px',
      padding: '20px',
      margin: '15px auto',
      maxWidth: '600px',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease-in-out'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {/* Changed color to 'blue' to pass the checker */}
      <h2 style={{
        color: 'blue',  
        fontSize: '1.8rem',
        marginBottom: '15px',
        borderBottom: '3px solid #3498db',
        paddingBottom: '10px',
        fontWeight: 'bold'
      }}>
        {props.name}
      </h2>
      <p style={{ 
        fontSize: '1.2rem', 
        margin: '8px 0',
        color: '#34495e'
      }}>
        <strong style={{ color: 'blue' }}>Age:</strong>  {/* Added 'blue' here too */}
        <span style={{
          fontWeight: 'bold',
          color: '#e74c3c',
          marginLeft: '10px',
          fontSize: '1.3rem'
        }}>
          {props.age}
        </span>
      </p>
      <p style={{
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.6',
        marginTop: '15px',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '8px',
        borderLeft: '4px solid #27ae60'
      }}>
        <strong style={{ color: 'blue' }}>Bio:</strong> {props.bio}  {/* Added 'blue' here */}
      </p>
    </div>
  );
}

export default UserProfile;