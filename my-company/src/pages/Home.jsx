function Home() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '20px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Welcome to Our Company
        </h1>
        
        <p style={{
          fontSize: '1.3rem',
          maxWidth: '800px',
          margin: '0 auto 40px',
          lineHeight: '1.8',
          opacity: '0.9'
        }}>
          We are dedicated to delivering excellence in all our services. 
          With over 20 years of experience, we help businesses transform 
          and thrive in the digital age.
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginTop: '50px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '30px',
            borderRadius: '15px',
            width: '250px',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px'
            }}>
              🚀
            </div>
            <h3 style={{ marginBottom: '15px' }}>Innovation</h3>
            <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
              Cutting-edge solutions for modern businesses
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '30px',
            borderRadius: '15px',
            width: '250px',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px'
            }}>
              ⭐
            </div>
            <h3 style={{ marginBottom: '15px' }}>Excellence</h3>
            <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
              Unmatched quality in every project
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '30px',
            borderRadius: '15px',
            width: '250px',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px'
            }}>
              🤝
            </div>
            <h3 style={{ marginBottom: '15px' }}>Partnership</h3>
            <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
              Building lasting relationships with clients
            </p>
          </div>
        </div>
        
        <button style={{
          marginTop: '50px',
          padding: '15px 40px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#c0392b';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#e74c3c';
          e.target.style.transform = 'scale(1)';
        }}>
          Explore Our Services
        </button>
      </div>
    </div>
  );
}

export default Home;