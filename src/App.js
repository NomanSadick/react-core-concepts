import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Jasim','Rajjak', 'Alamgir','shuvo']
  const products=[
    {name:'Photoshop', price:'$999'},
    {name:'Pen', price:'$9'},
    {name:'Water', price:'$990'}
  ]
  const nayokNames=nayoks.map(nayok =>nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a React Person </h1>
        <Counter></Counter>

        <ul>
        {nayoks.map(nayo =><li>{nayo}</li>)}
        {
          products.map(product =><li>{product.name}</li>)
        }
        </ul>
        {
                products.map(pd =><Product product={pd}></Product>)
        }


        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
         
        <Person name="Rajjak" job="Minister"></Person>
        <Person name="Samir" job="Business"></Person>
      </header>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease= () => setCount(count + 1);
  const handleDcrease= () => setCount(count - 1);
  
  return(
    <div>
      <h1>Coun: {count}</h1>
      <button onClick={handleDcrease}>Dcrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const styleProduct={
    border:'2px solid gray',
    borderRadius:'5px',
    width:'200px',
    hieght:'200px',
    backgroundColor: 'lightgray',
    float:'left'
  }
  console.log(props)
  return(
    <div style={styleProduct}>
      <h2>{props.product.name} </h2>
      <h1>{props.product.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid gold', width:'400px', margin:'10px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}
export default App;
