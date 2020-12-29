import React from 'react';
import Container from '../../shared/Container/Container';
import Table from '../../shared/Table';
import Header from '../Header';
import './App.css';

// import ClassComponent from '../ClassComponent/ClassComponent'
function App() {
 
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container>
        <Table />
      </Container>
    </div>
  );
}

export default App;
