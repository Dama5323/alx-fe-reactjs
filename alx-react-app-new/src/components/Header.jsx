function Header() {
  return (
    <header style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      marginBottom: '20px'
    }}>
      <h1 style={{ 
        margin: 0, 
        fontSize: '2.5rem',
        fontWeight: 'bold',
        letterSpacing: '1px'
      }}>
        My Favorite Cities
      </h1>
      <p style={{
        marginTop: '10px',
        fontSize: '1.1rem',
        opacity: '0.9'
      }}>
        Discover amazing cities around the world
      </p>
    </header>
  );
}

export default Header;