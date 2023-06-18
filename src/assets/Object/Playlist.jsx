import React from "react";
import "./Object.css/Playlist.css";
import Sidebar from "../../Componen/Sidebar";
import Footer from "../../Componen/Footer";
import yellow from "../img/yellow.jpg";
import profil from "../img/coldplay.jpg";
import Listmusic from "./Listmusic";

function Playlist() {
  return (
    <div className="playlist">
      <div className="playlist-home">
        <Sidebar />

        <div className="playlist-scrol">
          <div className="profile">
            <img className="profil-img" src={profil} alt="" />
            <h1 className="profil-name">Coldplay</h1>
            <h2 className="profil-name1">Profile</h2>
            <h3 className="profil-name2">2 Public Playlist</h3>
          </div>
          <Listmusic />
          <div className="artist-tophits">
          <img className="yellow" src={yellow} alt="" />
            
            <h1 className="yellow-h1">Yellow</h1>
            <h2 className="yellow-h2">Coldplay</h2>
         </div>

          <div className="table-like-album">
            <table>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>Title</td>
                  <td>Artis</td>
                  <td>Date</td>
                  
                  <td>duration</td>
                </tr>
                <tr>
                  <td className="td-position">
                    1
                    <img className="foto-like" src={yellow} alt="" />
                  </td>
                  <td>Separuh Nafas</td>
                  <td>Dewa 19</td>
                  <td>mar 16, 2022</td>
                  
                  <td>3:42</td>
                </tr>
                <tr>
                  <td className="td-position">
                    2
                    <img className="foto-like" src={yellow} alt="" />
                  </td>
                  <td>Pink Venom</td>
                  <td>Black Pink</td>
                  <td>14 mar, 2022</td>
                  
                  <td>3:04</td>
                </tr>
                <tr>
                  <td className="td-position">
                    3
                    <img className="foto-like" src={yellow} alt="" />
                  </td>
                  <td>Pluto Projector</td>
                  <td>Rex Orange</td>
                  <td>mar 12, 2022</td>
                  
                  <td>4:27</td>
                </tr>
                <tr>
                  <td className="td-position">
                    4
                    <img className="foto-like" src={yellow} alt="" />
                  </td>
                  <td>Die For You</td>
                  <td>The Weeknd</td>
                  <td>reb 18, 2022</td>
                  
                  <td>4:20</td>
                </tr>
                <tr>
                  <td className="td-position">
                    5
                    <img className="foto-like" src={yellow} alt="" />
                  </td>
                  <td>The Scientist</td>
                  <td>Colplay</td>
                  <td>Feb 18, 2022</td>
                  <td>5:09</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Playlist;
