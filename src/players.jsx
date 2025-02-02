import { useState } from "react"

export default function Players(){

     const [Player, setplayers] = useState(11)

const handler =()=>{
    const newplayers = Player  + 1
    console.log(newplayers);
    
    setplayers(newplayers)
}


const removeHandler =()=>{
    setplayers(Player - 1)
}
    const style = {
        margin: '10px',
        padding : '10px',
        border : ' solid black 2 px',
        borderRedius : ' 10px'
    }
    return(
        <div style={style}>
<h1>players : { Player}</h1>
<button onClick={handler}> add</button>
<button onClick={removeHandler}> remove</button>
 

        </div>
    )
}