import "./Style/Home.css"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import SideKiri from "./SideKiri"
import Body from "./Body"


function Home() {
  return (
    <div className="container">

        <div className="main-container">
          <Sidebar/>
          <Body />
          <SideKiri/>
        </div>
        <Footer/>
     </div>
  )
}

export default Home