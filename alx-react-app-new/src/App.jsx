import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  const users = [
    { 
      name: "John Doe", 
      age: 28, 
      bio: "Loves traveling and photography. Has visited over 30 countries and specializes in urban photography." 
    },
    { 
      name: "Jane Smith", 
      age: 32, 
      bio: "Passionate about urban development and sustainable cities. Works as a city planner in New York." 
    },
    { 
      name: "Mike Johnson", 
      age: 25, 
      bio: "Architecture enthusiast and city explorer. Loves discovering hidden gems in every city he visits." 
    },
    { 
      name: "Sarah Williams", 
      age: 29, 
      bio: "Food blogger who travels the world to explore different cuisines and food cultures in various cities." 
    }
  ];

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      paddingBottom: '20px'
    }}>
      <Header />
      
      <MainContent />
      
      <Counter />
      
      <div style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2c3e50',
          fontSize: '2rem',
          marginBottom: '30px',
          paddingBottom: '10px',
          borderBottom: '3px solid #3498db'
        }}>
          Our City Explorers
        </h2>
        
        {users.map((user, index) => (
          <UserProfile 
            key={index}
            name={user.name}
            age={user.age}
            bio={user.bio}
          />
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;