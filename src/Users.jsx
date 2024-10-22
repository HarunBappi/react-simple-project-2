import { useEffect, useState } from "react"
import './box.css'
import User from "./user"
export default function Users() {
    const [users, setUsers] = useState([])
    // UseEffect
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUsers(data))
    },[])
  return (
    <div className="box">
      <h1>Users: {users.length}</h1>
      {users.map(user => <User key={user.id} user={user}></User>)}
    </div>
  )
}
