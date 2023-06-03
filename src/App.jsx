import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Componen/Home"

/* Object */
/* import Daily from "./assets/Object/Daily" */

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/daily" Object={Daily}/>
      
      {/*<Route path="/daily" element={<Daily/>}/> */}
    </Routes>
   </Router>
  )
}

export default App
