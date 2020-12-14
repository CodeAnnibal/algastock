import React, { useState, useEffect } from 'react'
import './TestComponent.css'

function TestComponent ( props : { name: string }) {
  //const state = {
  //  age: 21
  //}

  const [age, setAge] = useState(21);

  useEffect(()=>{
    console.log('Component was created')
  },[]);

  useEffect(()=>{
    console.log('Age has been updated to: ' + age)
  },[age]);

  return <div className="TestComponent">
    Olá, {props.name}, {age}
    <button onClick={() => {
      //age++
      setAge(age+1);
      console.log(age);
    }}>
      +
    </button>
  </div>
}

export default TestComponent