import { useState } from "react";

const App = () => {

  const [name,setname] = useState('shaikh');

  const submithandler = (e) =>{
    e.preventDefault();
    console.log('hey its Niet');
  };

  return (
    <div className='h-screen bg-blue-500'>

      <form className=' h-1/2 flex justify-center items-center' onSubmit={(e)=>{
        submithandler(e);
      }}>
        <input type="text" className='border-2 border-black text-white' placeholder='Enter the text'
         value={name}
         onChange={(e)=>{
          setname(e.target.value)
         }}
         
         />
        <button  className='ml-5 text-lg text-blue font-bold px-4 bg-purple-500 rounded-full ' >Submit</button>
      </form>
    </div>
  )
}          

export default App
