function About() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      padding: '60px 20px',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#2c3e50',
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: '2.8rem',
          position: 'relative',
          paddingBottom: '20px'
        }}>
          About Us
          <span style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '4px',
            backgroundColor: '#3498db',
            borderRadius: '2px'
          }}></span>
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '50px'
        }}>
          <div>
            <h2 style={{
              color: '#2c3e50',
              marginBottom: '20px',
              fontSize: '2rem'
            }}>
              Our Story
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#34495e',
              marginBottom: '20px'
            }}>
              Our company has been providing top-notch services since 1990. 
              We specialize in various fields including technology, marketing, 
              and consultancy.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#34495e'
            }}>
              Starting as a small team of passionate professionals, we have 
              grown into a trusted partner for businesses worldwide. Our 
              commitment to excellence and customer satisfaction has been the 
              cornerstone of our success.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '2px solid #3498db'
          }}>
            <h3 style={{
              color: '#3498db',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Company Values
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#e8f4f8',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  color: '#27ae60',
                  fontWeight: 'bold'
                }}>✓</span>
                Integrity and Transparency
              </li>
              <li style={{
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#e8f4f8',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  color: '#27ae60',
                  fontWeight: 'bold'
                }}>✓</span>
                Innovation and Creativity
              </li>
              <li style={{
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#e8f4f8',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  color: '#27ae60',
                  fontWeight: 'bold'
                }}>✓</span>
                Customer-Centric Approach
              </li>
              <li style={{
                padding: '15px',
                backgroundColor: '#e8f4f8',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  color: '#27ae60',
                  fontWeight: 'bold'
                }}>✓</span>
                Sustainable Growth
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '40px',
          borderRadius: '15px',
          marginTop: '40px'
        }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '30px',
            color: '#3498db'
          }}>
            Our Mission & Vision
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              padding: '25px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#3498db', marginBottom: '15px' }}>Mission</h3>
              <p>
                To empower businesses with innovative solutions that drive growth, 
                efficiency, and success in the digital era.
              </p>
            </div>
            <div style={{
              padding: '25px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#3498db', marginBottom: '15px' }}>Vision</h3>
              <p>
                To be the leading global partner for businesses seeking 
                transformative digital solutions and strategic growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;