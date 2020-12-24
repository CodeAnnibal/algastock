import React from 'react';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container/Container';
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
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container>
        <Button 
           onClick={() => window.alert('UIUIU')}
           appendIcon={<TestComponent />}>
             Alert
        </Button>
      </Container>
    </div>
  );
}

export default App;
