

const App = () => {

  localStorage.setItem('name',"sarthak");   // set items 
  localStorage.setItem('age',"23");

  const user = localStorage.getItem('user');
  const age = localStorage.getItem('age');
  console.log(user,age);

  // for array => 
    const users = {
      username:'shaikh', 
      age:50,
      city:'azamgarh'
    }
    console.log(users);

    localStorage.setItem('users',JSON.stringify(users));   // first make it into the sting form -> json form ( using JSON.stringify())

    // to get the data from the local storage(string -> object)  => json.parse(localStorage.getItems('user'));


  return (
    <div className='bg-cyan-50'>
        <h1>hello its niet</h1>
    </div>
  )
}

export default App
