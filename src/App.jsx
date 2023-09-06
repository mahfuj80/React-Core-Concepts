import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Device name="laptop" price='55'></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="Watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7" score='99'></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This device: {props.name} price : {props.price} </h2>
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12 };
  return <h3>I am {person.name} with age : {age + money}</h3>
}

// const { } = { grade: '7', score: '90' };
function Student({ grade = 1, score = 0 }) {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class : {grade} </p>
      <p>score : {score} </p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>coding: </p>
    </div>
  )
}

export default App
