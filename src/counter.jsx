import { useState } from "react"

export default function Counter (){
 const styles = {
    border :'solid blue 2px',
    padding : '20px'
 }
    const [count, setcount] = useState(0)

const  Handler = () =>{
    const newCount = count + 1 
    setcount(newCount)
}
    return(

        <div style = {styles}>
            <h3>counter :</h3>
            <button onClick={Handler}>click</button>
        </div>
    )
}