function MainContent() {
  return (
    <main style={{
      padding: '30px',
      minHeight: '300px',
      backgroundColor: '#ecf0f1',
      borderRadius: '10px',
      margin: '20px auto',
      maxWidth: '800px',
      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)',
      border: '1px solid #dcdde1'
    }}>
      <h2 style={{
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '25px',
        fontSize: '2.2rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        Welcome to Cities Explorer
      </h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* Exact text as requested */}
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          textAlign: 'center',
          color: '#2c3e50',
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontStyle: 'italic',
          borderLeft: '4px solid #3498db'
        }}>
          I love to visit New York, Paris, and Tokyo.
        </p>
        
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          textAlign: 'justify',
          color: '#34495e',
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '8px'
        }}>
          Explore amazing cities around the world. Discover their unique culture, 
          history, and attractions. From bustling metropolises to tranquil towns, 
          each city has its own story to tell.
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px'
        }}>
          <span style={{
            padding: '8px 16px',
            backgroundColor: '#3498db',
            color: 'white',
            borderRadius: '20px',
            fontWeight: 'bold'
          }}>Travel</span>
          <span style={{
            padding: '8px 16px',
            backgroundColor: '#27ae60',
            color: 'white',
            borderRadius: '20px',
            fontWeight: 'bold'
          }}>Culture</span>
          <span style={{
            padding: '8px 16px',
            backgroundColor: '#e74c3c',
            color: 'white',
            borderRadius: '20px',
            fontWeight: 'bold'
          }}>Food</span>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
