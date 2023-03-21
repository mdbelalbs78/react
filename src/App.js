import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
       {/* <Counter></Counter> */}

       <ExtrenalUsers></ExtrenalUsers>
    </div>
  );
}

function ExtrenalUsers (){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data))

  }, [])
   return(
    <div>
      <h1>Extrenal Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
   </div>
   )
}

function User(props){
  return(
    <div style={{border: '2px solid red', margin: '20px', backgroundColor: 'blue'}}>
       <h1>Name: {props.name}</h1>
       <p>email:{props.email}</p>
    </div>
  )
}

function Counter(){
  const [count , setCount] = useState(0);
  const increaseCount = () =>setCount(count + 1);
  const desCreaseCount = () => setCount(count -1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={desCreaseCount}>Decrease</button>
    </div>
  )
}



// const products = [
//   {name: 'laptop', price: '153000'}, 
//   {name: 'phone', price: '53000'}, 
//   {name: 'watch', price: '3000'}, 
//   {name: 'tablet', price: '23000'}, 
// ]

// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }

//  <Product name='laptop' price='50000'></Product>
//  <Product name='phone' price='45555'></Product>
//  <Product name='watch' price='75555'></Product>

function Product(props){
  return(
    <div className='product'>
       <h3>Name: {props.name}</h3>
       <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
