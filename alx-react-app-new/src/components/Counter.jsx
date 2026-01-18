import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  // Determine color based on count
  const getCountColor = () => {
    if (count > 0) return '#27ae60'; // Green for positive
    if (count < 0) return '#e74c3c'; // Red for negative
    return '#2c3e50'; // Default color for zero
  };

  return (
    <div style={{
      padding: '30px',
      margin: '30px auto',
      maxWidth: '500px',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      border: '2px solid #3498db',
      textAlign: 'center'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: '25px',
        fontSize: '1.8rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Interactive Counter
      </h2>
      
      <div style={{
        fontSize: '5rem',
        fontWeight: 'bold',
        color: getCountColor(),
        margin: '25px 0',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '15px',
        border: '3px solid',
        borderColor: getCountColor(),
        transition: 'all 0.3s ease'
      }}>
        {count}
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={decrement}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            minWidth: '140px',
            boxShadow: '0 4px 6px rgba(231, 76, 60, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c0392b';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(231, 76, 60, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#e74c3c';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(231, 76, 60, 0.3)';
          }}
        >
          Decrement (-)
        </button>
        
        <button
          onClick={reset}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#f39c12',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            minWidth: '140px',
            boxShadow: '0 4px 6px rgba(243, 156, 18, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#d35400';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(243, 156, 18, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#f39c12';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(243, 156, 18, 0.3)';
          }}
        >
          Reset (0)
        </button>
        
        <button
          onClick={increment}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            minWidth: '140px',
            boxShadow: '0 4px 6px rgba(39, 174, 96, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#229954';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(39, 174, 96, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#27ae60';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(39, 174, 96, 0.3)';
          }}
        >
          Increment (+)
        </button>
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f1f8ff',
        borderRadius: '10px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#3498db'
          }}>
            {count}
          </div>
          <div style={{
            fontSize: '0.9rem',
            color: '#7f8c8d'
          }}>
            Current Value
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: count > 0 ? '#27ae60' : '#e74c3c'
          }}>
            {Math.abs(count)}
          </div>
          <div style={{
            fontSize: '0.9rem',
            color: '#7f8c8d'
          }}>
            Absolute Value
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#9b59b6'
          }}>
            {count * 2}
          </div>
          <div style={{
            fontSize: '0.9rem',
            color: '#7f8c8d'
          }}>
            Double Value
          </div>
        </div>
      </div>
      
      <p style={{
        marginTop: '25px',
        color: '#7f8c8d',
        fontSize: '0.95rem',
        fontStyle: 'italic'
      }}>
        Click the buttons to change the counter value. 
        Positive numbers are green, negative are red.
      </p>
    </div>
  );
}

export default Counter;