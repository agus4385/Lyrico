import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Componen/Home"
// import getArtist from '../api/artis'

/* Object */
import Daily from "./assets/Object/Daily" 
import Like from "./Componen/Like"
import History from "./Componen/History"
import Artis from "./assets/Object/Artis"

import Playlist from "./assets/Object/Playlist"


function App() {
  // const artis = getArtist("0TnOYISbd1XYRBk9myaseg")
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/daily" element={<Daily/>}/>
      <Route path="/like" element={<Like/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/artis" element={<Artis/>}/>
      <Route path="/playlist" element={<Playlist/>}/>
    </Routes>
   </Router>
  )
}

export default App
