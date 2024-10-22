import './App.css'
import Counter from './Counter'
import Players from './Players'
import Users from './Users'
function App() {
 
  function handleClick1(){
    alert ('click me 1111111')
  }
  // Arrow Function in parameter
  const buttonAdd = (num)=> {
    alert( num +5)
  }
  return (
    <>
      <h3>My Simple React project 2</h3>
      <Users></Users>
      <Counter></Counter>
      <Players></Players>
      {/* Function Call use Button */}
    <button onClick={handleClick1}>Click Me11111111</button>
    {/* Onclick arrow Function  */}
    <button onClick={()=>{
      alert('Click me 222222222')
    }}>Click Me 22222</button>
  <button onClick={()=> buttonAdd(5)}>button three</button>

    </>
  )
}

export default App
