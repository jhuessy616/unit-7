import React from 'react';
import './App.css';
import Form from './components/Form';
import GoingFurtherForm from './components/GoingFurtherForm';

function App() {
  const message= "Lovely to see you "
  return (
    <main>
      <Form message={message} />
      <GoingFurtherForm message={message}/>
      
    </main>
  );
}

export default App;
