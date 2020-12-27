import React, { useState } from 'react';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container/Container';
import Input from '../../shared/Input';
import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img 
            width="16"
            src="https://img.icons8.com/pastel-glyph/452/search--v2.png"
            alt="search icon" />
}

// import ClassComponent from '../ClassComponent/ClassComponent'
function App() {
  const [street, setStreet] = useState('')

  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container>
        <Button 
           onClick={() => window.alert('UIUIU')}
           appendIcon={<TestComponent />}>
             Alert
        </Button>
        <Input 
          label="Street"
          placeholder="E.g.: 15th Avenue" 
          value={street}
          onChange={ e => setStreet(e.target.value) }
          />
      </Container>
    </div>
  );
}

export default App;
