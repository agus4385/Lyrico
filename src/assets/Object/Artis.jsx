import Sidebar from "../../Componen/Sidebar"
import Footer from "../../Componen/Footer"
import Nav from "../../Componen/Nav"
import "./Object.css/Artis.css"
import rizkyfebian from "../img/rizkyfebian.jpg"
import andmesh from "../img/andmesh.jpg"
import mahalini from "../img/mahalini.jpg"
import virgoun from "../img/virgoun.jpg"
import dennycaknan from "../img/dennycaknan.jpg"
import tulus from "../img/tulus.jpeg"
import anggimarito from "../img/anggimarito.jpg"
import ardhitopramono from "../img/ardhitopramono.jpg"
import budidoremi from "../img/budidoremi.jpg"
import tiaraandini from "../img/tiaraandini.jpg"
import alanwalker from "../img/alanwalker.jpg"
import alditaher from "../img/alditaher.jpeg"




function Artis() {
  return (
    <div className="artist">
        

        <div className="home-artist">
        <Sidebar/>
        <div className="judul-artist">
          <Nav/>
          
          <h1>Recently Searches</h1>
        <div className="artist-scroll">

        <div className="list-artist">
          <img className="artist-img" src={rizkyfebian} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Rizky Febian</a> </h4> 
              <p>Artist</p>
          </div>
        </div>
        
        <div className="list-artist">
          <img className="artist-img" src={andmesh} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Andmesh</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={mahalini} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Mahalini</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={virgoun} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Virgoun</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={dennycaknan} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Denny Caknan</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={tulus} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Tulus</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={anggimarito} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Anggi Marito</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={ardhitopramono} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Ardhito Pramono</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={budidoremi} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Budi Doremi</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={tiaraandini} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Tiara Andini</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={alanwalker} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Alan Walker</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        <div className="list-artist">
          <img className="artist-img" src={alditaher} alt="" />
            <div className="sublist-artist">
              <h4><a href="">Aldi Taher</a> </h4> 
              <p>Artist</p>
          </div>
        </div>

        </div>
    </div>
    </div> 
    <Footer/>
</div>
  )
}

export default Artis