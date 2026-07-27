import { useState } from "react";

const App = () => {


  const [bgcolor,setbgcolor] = useState("bg-amber-950");   // use state const [read,write] = useState(intial value of read)

  
  const changecolor=  ()=>{
    if(bgcolor == "bg-amber-950") setbgcolor("bg-white-300");
    else setbgcolor("bg-amber-950");
  };

  return (
    <div className={`flex h-screen justify-center items-center ${bgcolor}`}>
      <button onClick={changecolor}> <h1 className="bg-blue-200 w-40 h-15 flex justify-center items-center rounded-2xl">hello its Niet</h1>
      </button>
    </div>
  )
}


export default App
