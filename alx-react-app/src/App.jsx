import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      
      <div style={{ margin: '20px 0' }}>
        <h2>User Profile Cards:</h2>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />
        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Software developer who enjoys coffee and coding" 
        />
        <UserProfile 
          name="Charlie" 
          age="28" 
          bio="Travel enthusiast and food blogger" 
        />
      </div>
      
      <Footer />
    </>
  )
}

export default App