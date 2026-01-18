function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '50px 20px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        <div>
          <h3 style={{
            color: '#3498db',
            marginBottom: '20px',
            fontSize: '1.5rem'
          }}>
            MyCompany
          </h3>
          <p style={{
            color: '#bdc3c7',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            We are dedicated to delivering excellence in all our services. 
            Our mission is to help businesses grow and succeed in the digital age.
          </p>
        </div>
        
        <div>
          <h4 style={{
            color: '#3498db',
            marginBottom: '20px'
          }}>
            Quick Links
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="/" style={{
                color: '#bdc3c7',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}>
                Home
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/about" style={{
                color: '#bdc3c7',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}>
                About Us
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/services" style={{
                color: '#bdc3c7',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}>
                Services
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/contact" style={{
                color: '#bdc3c7',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 style={{
            color: '#3498db',
            marginBottom: '20px'
          }}>
            Our Services
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '10px', color: '#bdc3c7' }}>Technology Consulting</li>
            <li style={{ marginBottom: '10px', color: '#bdc3c7' }}>Market Analysis</li>
            <li style={{ marginBottom: '10px', color: '#bdc3c7' }}>Product Development</li>
            <li style={{ marginBottom: '10px', color: '#bdc3c7' }}>Digital Marketing</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{
            color: '#3498db',
            marginBottom: '20px'
          }}>
            Contact Info
          </h4>
          <div style={{ color: '#bdc3c7', lineHeight: '1.8' }}>
            <p>📧 deenyashke@gmail.com</p>
            <p>📞 +254708729553</p>
            <p>📍 Nairobi, Kenya</p>
            <p>🕐 Mon-Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        paddingTop: '20px',
        borderTop: '1px solid #34495e',
        color: '#95a5a6',
        fontSize: '0.9rem'
      }}>
        <p>© {currentYear} MyCompany. All rights reserved.</p>
        <p style={{ marginTop: '10px' }}>
          Made with <span style={{ color: '#e74c3c' }}>❤️</span> using React
        </p>
      </div>
    </footer>
  );
}

export default Footer;