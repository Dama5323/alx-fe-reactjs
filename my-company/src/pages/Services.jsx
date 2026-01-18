function Services() {
  const services = [
    {
      title: 'Technology Consulting',
      description: 'Expert guidance on implementing cutting-edge technology solutions to streamline your business operations.',
      icon: '💻',
      color: '#3498db'
    },
    {
      title: 'Market Analysis',
      description: 'Comprehensive market research and competitive analysis to help you make informed business decisions.',
      icon: '📊',
      color: '#27ae60'
    },
    {
      title: 'Product Development',
      description: 'End-to-end product development from concept to launch, ensuring quality and user satisfaction.',
      icon: '🚀',
      color: '#e74c3c'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategies to boost your online presence, reach target audiences, and increase conversions.',
      icon: '🎯',
      color: '#9b59b6'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure solutions for modern business needs.',
      icon: '☁️',
      color: '#f39c12'
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing support for your team.',
      icon: '👨‍🏫',
      color: '#1abc9c'
    }
  ];

  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      padding: '60px 20px',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#2c3e50',
          textAlign: 'center',
          marginBottom: '50px',
          fontSize: '2.8rem'
        }}>
          Our Services
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f8f9fa',
                padding: '30px',
                borderRadius: '15px',
                border: `3px solid ${service.color}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 15px 30px ${service.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                {service.icon}
              </div>
              
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '15px',
                fontSize: '1.5rem',
                textAlign: 'center'
              }}>
                {service.title}
              </h3>
              
              <p style={{
                color: '#7f8c8d',
                lineHeight: '1.6',
                textAlign: 'center',
                marginBottom: '20px'
              }}>
                {service.description}
              </p>
              
              <div style={{
                textAlign: 'center',
                marginTop: '20px'
              }}>
                <button style={{
                  padding: '10px 25px',
                  backgroundColor: service.color,
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{
          backgroundColor: '#f1f8ff',
          padding: '40px',
          borderRadius: '15px',
          border: '2px solid #3498db',
          marginTop: '40px'
        }}>
          <h2 style={{
            color: '#2c3e50',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            Why Choose Our Services?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{ color: '#3498db', marginBottom: '10px' }}>Expert Team</h3>
              <p style={{ color: '#7f8c8d' }}>Industry professionals with decades of experience</p>
            </div>
            <div>
              <h3 style={{ color: '#3498db', marginBottom: '10px' }}>Custom Solutions</h3>
              <p style={{ color: '#7f8c8d' }}>Tailored strategies for your specific needs</p>
            </div>
            <div>
              <h3 style={{ color: '#3498db', marginBottom: '10px' }}>Proven Results</h3>
              <p style={{ color: '#7f8c8d' }}>Track record of successful implementations</p>
            </div>
            <div>
              <h3 style={{ color: '#3498db', marginBottom: '10px' }}>24/7 Support</h3>
              <p style={{ color: '#7f8c8d' }}>Round-the-clock assistance for our clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;