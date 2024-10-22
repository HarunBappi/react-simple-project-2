import { useState } from "react"


export default function Players() {
    const [player, setPlayer] = useState(11)
    const team = {
        border : '2px solid aquamarine',
        marginTop: '15px',
        borderRadius: '15px',
        padding: '15px'
    }
    const handlePlayerAdd = ()=>{
        const newPlayer = player + 1
        setPlayer(newPlayer)
    }
    const handlePlayerMinus = ()=>{
        const deletePlayer = player - 1
        setPlayer(deletePlayer)
    }
  return (
    <div style={team}>
      <h3>Players: {player}</h3>
      <button onClick={handlePlayerAdd} disabled={player>=15} style={{background:'purple'}}>Player+</button>
      <button onClick={handlePlayerMinus} disabled={player ===10} style={{background :'tomato',marginLeft:'15px'}}>Player-</button>
      {player===10 && alert ("Down Player 11 is Not") }
    </div>
  )
}
