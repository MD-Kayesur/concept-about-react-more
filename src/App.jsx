 
import './App.css'
import Counter from './counter'
import Players from './players'

handle clicked 1 way

function App() {
  const HandlerClick =()=>{
    alert ('hi')
  }


   // handle clicked 4 way
  const clickHandler = (num) =>{ 
     
 alert (num + 4);

  }
  
  // handle clicked 2 way
  function Againclicked (){
    alert ('againclicked')
  }
  
  const classname ={
    margin: '10px'
  }
  
  return (
    <>
       
      <h1>Vite + React</h1>
      <Players></Players>
       
         <button style={classname} onClick={HandlerClick}  >hi</button>
         <button style={classname}  onClick={Againclicked}> click me</button>
    {/* // handle clicked 3 way  with sent prameter*/}
      <button onClick={()=>clickHandler(3)}> clickHandler</button>
      
      <button style={classname} onClick={()=>alert('just cliked')} >justclicked</button>
    
    
    
    <Counter>  </Counter>
    
    </>
  )
}

export default App
