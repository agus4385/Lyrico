import Sidebar from "../../Componen/Sidebar"
import Footer from "../../Componen/Footer"
import "./Object.css/Artis.css"

function Artis() {
  return (
    <div className="artist">
        <div className="home-artist">
        <Sidebar/>
        <div className="judul-artist">
          <h1>Artist</h1>
        </div>
        <div className="sub-artist">
          
        </div>
        </div>
    <Footer/>
    </div>
  )
}

export default Artis