import './App.css'
import Clients from './Components/Clients/Clients'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
