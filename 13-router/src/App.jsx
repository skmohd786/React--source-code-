// there is not a inbuilt lib in react so using lib -> reactRounterDom

// no reloading while rounting -> that is SPA (application) 

import {Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path= '/about' element = {<About/>} />
        <Route path='/Contact' element = {<Contact/>} />
      </Routes>
    
    </div>
  )
}

export default App
