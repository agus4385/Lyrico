import Img from "../assets/img/blackpink.jpg";
/* import Bacground from "../assets/backgrn/back.jpg" */
import "./Style/Body.css";
import Sidebar from "./Sidebar";
import SideKiri from "./SideKiri";
import Footer from "./Footer";
import { Link } from "react-router-dom";
/* import Img2 from "../assets/img/nino.jpg" */
// import Nav from "./Nav"

function Body() {
  return (
    <div className="layout">
      <div className="body">
        <Sidebar />
        <div className="body-layout">
          {/* <Nav/> */}
          <div className="home">
            <div className="sub">
           

              <div className="body-card">
                <img className="card-img" src={Img} alt="" />
                <div className="judul-card">
                  <h4><Link to="/playlist"> Twice </Link> </h4> 
                  <p>Artist</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <SideKiri />
      </div>
      <Footer />
    </div>
  );
}

export default Body;
