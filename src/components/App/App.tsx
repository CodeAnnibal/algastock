import React from 'react';
import Button from '../Button/Button';
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
      <div className="Container">
        <Button 
          content="Click me" 
          onClick={() => window.alert('asdadaw')}/>
      </div>
      <div className="Container">
        <Button 
           onClick={() => window.alert('UIUIU')}
           appendIcon={<TestComponent />}>
             Alert
           </Button>
      </div>
    </div>
  );
}

export default App;
