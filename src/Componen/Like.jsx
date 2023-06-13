import "./Style/Like.css"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Foto from "../assets/img/MCR.jpg"
import Foto2 from "../assets/img/The Black Parade.jpeg"
import Foto3 from "../assets/img/World of Walker.jpeg"
import Foto4 from "../assets/img/billie1.png"
import Foto5 from "../assets/img/Cinta Luar Biasa.png"
import Foto6 from "../assets/img/Born Pink.jpeg"
import Foto7 from "../assets/img/Manusia.jpg"
import Foto8 from "../assets/img/Life is but a Dream.jpg"

function Like() {
  return (
    <div className="like">
        <div className="like-home">
          <Sidebar/>
          <div className="like-judul-album">
            <div className="like-album">
              <img className="album-img" src={Foto} alt="Foto" />
              <h1>My Chemical Romance</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
              <div className="buttons">
                <button>Play</button>
                <button>Liked</button>                    
              </div>                                                                                                                                                                                                                                                                                                                                                                             
            </div> 
          </div>
          <div className="like-album-2">
            <div className="h2">
              <h2>Album</h2>
            </div>
            <div className="album">
              <div className="sub">
                <img className="img" src={Foto2} alt="" />
                <div className="putar">
                  <h4><a href="">The Black Parade</a></h4> 
                  <p>My Chemical Romance</p>
                </div>
              </div>
              <div className="sub">
                <img className="img" src={Foto3} alt="" />
                <div className="putar">
                  <h4><a href="">World of Walker</a></h4> 
                  <p>Alan Walker</p>
                </div>
              </div>
              <div className="sub">
                <img className="img" src={Foto4} alt="" />
                <div className="putar">
                  <h4><a href="">Happier Than Ever</a></h4> 
                  <p>Billie Eilish</p>
                </div>
              </div>
              <div className="sub">
                <img className="img" src={Foto5} alt="" />
                <div className="putar">
                  <h4><a href="">Cinta Luar Biasa</a></h4> 
                  <p>Andmesh Kamaleng</p>
                </div>
              </div>
              <div className="sub">
                <img className="img" src={Foto6} alt="" />
                <div className="putar">
                  <h4><a href="">Born Pink</a></h4> 
                  <p>Blackpink</p>
                </div>
              </div>
              <div className="sub">
                <img className="img" src={Foto7} alt="" />
                <div className="putar">
                  <h4><a href="">Manusia</a></h4> 
                  <p>Tulus</p>
                </div>
              </div>
              <div className="sub">
                <img className="img" src={Foto8} alt="" />
                <div className="putar">
                  <h4><a href="">Life Is but a Dream...</a></h4> 
                  <p>Avenged Sevenfold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Like