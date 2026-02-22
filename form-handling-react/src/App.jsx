import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Form Handling in React</h1>
      </header>
      <main>
        <RegistrationForm />
        <hr style={{ margin: '40px 0' }} />
        <FormikForm />
      </main>
    </div>
  );
}

export default App;