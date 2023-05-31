import "./App.css"
import Sidebar from './Componen/Sidebar'
import Nav from './Componen/Nav'
import Body from './Componen/Body' 
import SideKiri from './Componen/SideKiri'
import Footer from './Componen/Footer'
function App() {
  return (
    <> 
     <div className="container">
        <Nav/>
        <div className="main-container">
          <Sidebar/>
          <Body/>
          <SideKiri/>
        </div>
        <Footer/>
     </div>
    </>
  )
}

export default App
