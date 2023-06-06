import "./Object.css/Playlist.css"
import Sidebar from "../../Componen/Sidebar"
import Footer from "../../Componen/Footer"
import Fot from "../img/gambar1.jpg"
import { Link } from "react-router-dom"

function Playlist() {
  return (
    <div className="playlist">
        <div className="playlist-home">
          <Sidebar/>
          <div className="playlist-scrol">

          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><Link to="/top_music">Today Top Hits</Link> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>
          <div className="playlist-body">
                <img className="playlist-img" src={Fot} alt="" />
                <div className="playlist-putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
          </div>

          </div>
          
        </div>
        <Footer/>
    </div>
  )
}

export default Playlist 