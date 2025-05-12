import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Beats from './pages/Beats'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Events from './pages/Events'
import NotFound from './pages/NotFound'


function App() {


  return (
    <div className="App pt-28 px-4">
      <nav className="fixed top-10 left-0 z-50 w-4/5 h-15 m-2 bg-[#0d0d0d] border-b border-[#212121] shadow-sm px-4">
        <div className="max-w-screen-xl mx-auto flex justify-center"> 
          <ul className="flex gap-6 py-3">
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/beats'>Beats</Link></li>
            <li><Link to ='/about'>About</Link></li>
            <li><Link to ='/contact'>Contact</Link></li>
            <li><Link to ='/events'>Events</Link></li>
          </ul>
        </div>
      </nav>
      <div className="pt-20">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beats' element={<Beats />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
