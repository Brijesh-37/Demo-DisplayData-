// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';

function App() {
  const [name,setName]= useState(" ");
  const [age,setAge]= useState(" ");
  const [height,setHeight]= useState(" ");
  const [superPower,setSuperPower]= useState(" ");

  return (
    <div className="container">
      <center>
      <h1>Build  a Hero</h1>
       <label >Name : </label>
       <input type="text"  style={{margin:10}} onChange={event =>{setName(event.target.value)}} />
       <label >Age :</label>
       <input type="number"  style={{margin:10}}  onChange={event =>{setAge(event.target.value)}}/>
       <label >Height :</label>
       <input type="number" style={{margin:10}}  onChange={event =>{setHeight(event.target.value)}} />
       <label >Super Power:</label>
       <input type="text" style={{margin:10}} onChange={event =>{setSuperPower(event.target.value)}}/>

  <h1> Name :  {name} </h1>
  <h1>Age :   {age}</h1>
  <h1>Height :  {height}</h1>
  <h1> SuperPower:  {superPower}</h1>
      
      </center>
    </div>
  );
}

export default App;
