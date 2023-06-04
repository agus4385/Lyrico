import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Componen/Home"
// import getArtist from '../api/artis'

/* Object */
import Daily from "./assets/Object/Daily" 

function App() {
  // const artis = getArtist("0TnOYISbd1XYRBk9myaseg")
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/daily" element={<Daily/>}/>
    </Routes>
   </Router>
  )
}

export default App
