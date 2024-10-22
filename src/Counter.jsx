import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0)

    const handleInc = ()=>{
        const newCount = count + 1
        setCount(newCount)
    }
    const handleDec= ()=>{
        const newDec= count -1
        setCount(newDec)
    }
  return (
    <div style={{border:"2px solid skyblue", padding:"15px", borderRadius:"15px"}}>
      <h3>Counter: {count}</h3>
      <button onClick={handleInc} disabled={count>=20} style={{background:"purple"}}>Inc+</button>
      <button onClick={handleDec} disabled={count<=0} style={{background:'tomato', marginLeft:'15px'}}>Dec-</button>
    </div>
  )
}
