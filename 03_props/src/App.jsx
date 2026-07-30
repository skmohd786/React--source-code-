
import Card from  './components/card.jsx'

const App = () => {
  return (
    <div className='parent'>

      <Card user = 'Cristiano Ronaldo' age = {43} img = "https://images.unsplash.com/photo-1719404363999-5145022af635?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
 
      <Card user = "Mohammad Salah" age = {34} img = "https://plus.unsplash.com/premium_vector-1729912512830-97c954c328f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://commons.wikimedia.org/wiki/File:Mo_Salah_2018_(cropped).jpg"/>

      <Card user ="Neymar" age = {34} img = "https://images.unsplash.com/photo-1666377454944-17a17d22a751?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV5bWFyfGVufDB8fDB8fHww"/>

    </div>
  )
}

export default App
