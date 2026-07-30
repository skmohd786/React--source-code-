import axios from 'axios'      // best way to deal with the apis

const App = () => {


    const getdata= async ()=> {

        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(data);
        
        
    }

    return (
        <div className='h-screen bg-cyan-100'>
            <button
            className='bg-red-950 text-white m-60 px-12 py-4 text-2xl  font-medium border-2 border-amber-300 rounded-2xl' 
            onClick={getdata}
            >get</button>

        </div>
    )
}

export default App
