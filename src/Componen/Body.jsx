import Img from "../assets/img/blackpink.jpg"
/* import Bacground from "../assets/backgrn/back.jpg" */
import "./Style/Body.css"
import Sidebar from "./Sidebar"
import SideKiri from "./SideKiri"
import Footer from "./Footer"
/* import Img2 from "../assets/img/nino.jpg" */
import Nav from "./Nav"
function Body() {
  return (
    <div className="layout">

    <div className="body" >
      <Sidebar/>
      <div className="body-layout">

        <Nav/>
         <div className="home">
          
            <div className="sub">
                <div className="putar">
                <img className="img" src={Img} alt="" />
                <div className="judul">
                  
                  <a href="">Twice</a>
                  <h5>Dari : Kipli</h5>
                  <br />
                </div>
                  
              </div>
            </div>
            
       
        
            
         
      
            </div>
           </div>
            <SideKiri/>
        </div>
        <Footer/>
    </div>
  )
}

export default Body