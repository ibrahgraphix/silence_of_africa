

import './App.css'
import About from './pages/About'
import Terms from './pages/Terms'
import Beach from './pages/Beach'
import Contact from './pages/Contact'
import Hiking from './pages/Hiking'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Safaris from './pages/Safaris'
import Singlepackage from './pages/Singlepackage'

function App() {
  
  return (
    <>
    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/beach"} element={<Beach />} />
      <Route path={"/hiking"} element={<Hiking />} />
      <Route path={"/safaris"} element={<Safaris />} />
      <Route path={"/terms"} element={<Terms />} />
     
      <Route path="/packages/:detailId" element={<Singlepackage />} />

    </Routes>
     
    </>
  )
}

export default App
