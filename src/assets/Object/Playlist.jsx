import "./Object.css/Playlist.css"
import Sidebar from "../../Componen/Sidebar"
import Footer from "../../Componen/Footer"

import profil from "../img/coldplay.jpg"
import Listmusic from "./Listmusic"


function Playlist() {
  return (
    <div className="playlist">
        <div className="playlist-home">
          <Sidebar/>
        
          <div className="playlist-scrol">
            <div className="profile">
              <img className="profil-img" src={profil} alt =""/>
              <h1 className="profil-name">Coldplay</h1>
              <h2 className="profil-name1">Profile</h2>
              <h3 className="profil-name2">2 Public Playlist </h3>
              
            </div>
            <Listmusic/>

            <div className=" "></div>

            </div>


         
          
        </div>
        <Footer/>
    </div>
  )
}

export default Playlist 