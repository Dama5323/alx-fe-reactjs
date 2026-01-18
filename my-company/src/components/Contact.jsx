import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      padding: '60px 20px',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#2c3e50',
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: '2.8rem'
        }}>
          Contact Us
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'start'
        }}>
          <div>
            <h2 style={{
              color: '#2c3e50',
              marginBottom: '20px',
              fontSize: '1.8rem'
            }}>
              Get in Touch
            </h2>
            
            <p style={{
              color: '#34495e',
              lineHeight: '1.6',
              marginBottom: '30px'
            }}>
              Have questions? We'd love to hear from you. Send us a message 
              and we'll respond as soon as possible.
            </p>
            
            <div style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              marginBottom: '20px'
            }}>
              <h3 style={{
                color: '#3498db',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                📧 Email
              </h3>
              <p style={{ color: '#2c3e50' }}>deenyashke@gmail.com</p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              marginBottom: '20px'
            }}>
              <h3 style={{
                color: '#3498db',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                📞 Phone
              </h3>
              <p style={{ color: '#2c3e50' }}>+254708729553</p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{
                color: '#3498db',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                📍 Address
              </h3>
              <p style={{ color: '#2c3e50' }}>
                Nairobi<br />
                <br />
                Kenya
              </p>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              color: '#2c3e50',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Send Us a Message
            </h2>
            
            {submitted && (
              <div style={{
                backgroundColor: '#27ae60',
                color: 'white',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                textAlign: 'center',
                animation: 'fadeIn 0.5s ease'
              }}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#2c3e50',
                  fontWeight: '500'
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3498db'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#2c3e50',
                  fontWeight: '500'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3498db'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>
              
              <div style={{ marginBottom: '30px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#2c3e50',
                  fontWeight: '500'
                }}>
                  Your Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #e0e0e0',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3498db'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '15px',
                  backgroundColor: isSubmitting ? '#95a5a6' : '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? '0.7' : '1'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#2980b9';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#3498db';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              <p style={{
                marginTop: '15px',
                color: '#95a5a6',
                fontSize: '0.9rem',
                textAlign: 'center'
              }}>
                * Required fields
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;