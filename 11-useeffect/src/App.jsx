// useeffect -> it execute the after rendering operation(like  functional componenets done their work ) -> like fetch api,settimeintetval() etc

import { useEffect, useState } from "react"


const App = () => {

  const [value, setvalue] = useState(10);   // usestate

  useEffect(function(){           //  useeffect
    console.log("use effect us running"); 

  },[value])     // using the dependency array(vacant) -> it can be change when changing the value  imp o

  return (
    <div className="h-screen flex justify-center items-center h-screen bg-black text-white text-2xl font-medium pt-5 pl-5">

      <button className = " bg-cyan-500 px-10 py-2 rounded-2xl" onClick={()=>{
        let x = value; 
        x += 10;
        setvalue(x);
      }}>
        
      <h1>{value}</h1> </button>

    </div>
  )
}
export default App
