function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '30px 20px',
      marginTop: '40px',
      borderTop: '5px solid #3498db',
      boxShadow: '0 -4px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <p style={{ 
          margin: '10px 0', 
          fontSize: '1.1rem',
          fontWeight: 'bold',
          letterSpacing: '0.5px'
        }}>
          © 2024 My Cities App. All rights reserved.
        </p>
        <p style={{ 
          margin: '10px 0', 
          fontSize: '0.95rem', 
          color: '#bdc3c7',
          lineHeight: '1.6'
        }}>
          Made with <span style={{ 
            color: '#e74c3c',
            fontSize: '1.2rem'
          }}>❤️</span> using React
        </p>
        <div style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px'
        }}>
          <a href="#" style={{
            color: '#3498db',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '1px solid #3498db',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#3498db';
          }}>
            Privacy Policy
          </a>
          <a href="#" style={{
            color: '#3498db',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '1px solid #3498db',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#3498db';
          }}>
            Terms of Service
          </a>
          <a href="#" style={{
            color: '#3498db',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '1px solid #3498db',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#3498db';
          }}>
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;