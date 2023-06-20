import ".././assets/Object/Daily"
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Foto from ".././assets/img/alanwalker.jpg"
import Foto2 from ".././assets/img/alanwalker.jpg"


import { FiPlay, FiHeart } from "react-icons/fi";
// import { useEffect, useState } from "react";

// import Foto1 from "../img/blackpink.jpg"

function Daily() {
  const token = localStorage.getItem("spotify-token");

  return (
    <div className="daily">
      <div className="daily-home">
        <Sidebar />
        <div className="daily-judul">
          <div className="daily-judul2">
            <img className="daily-foto" src={Foto} alt="" />
            <div className="daily-button">
              <h1>Babay Metal</h1>
              <button className="day-btn" >
                <FiPlay className="fi-btn" size={30} />
              </button>
              <span className="daily-span">Play</span>
            </div>
          </div>
          <div className="judul-tabel">
            <table className="daily-tabel">
              <tr className="tr-daily">
                <td>#</td>

                <td>Title</td>
                <td>Artis</td>
                <td>Date</td>
                <td>like</td>
                <td>duration</td>
              </tr>

              <tr className="tr-daily">
                <td className="td-daily">
                  <p>1</p>
                  <img className="day-img" src={Foto2} alt="" />
                  <button className="play-btn"><FiPlay size={20} className="fiplay" /></button> 
                </td>

                <td>Separuh Nafas</td>
                <td>Dewa 19</td>
                <td>Mar 16, 2022</td>
                <td>
                  <FiHeart />
                </td>
                <td>3:42</td>
              </tr>
              <tr className="tr-daily">
                <td className="td-daily">
                  <p>2</p>
                  <img className="day-img" src={Foto2} alt="" />
                  <button className="play-btn"><FiPlay size={20} className="fiplay" /></button> 
                </td>

                <td>Separuh Nafas</td>
                <td>Dewa 19</td>
                <td>Mar 16, 2022</td>
                <td>
                  <FiHeart />
                </td>
                <td>3:42</td>
              </tr>
              <tr className="tr-daily">
                <td className="td-daily">
                  <p>3</p>
                  <img className="day-img" src={Foto2} alt="" />
                  <button className="play-btn"><FiPlay size={20} className="fiplay" /></button> 
                </td>

                <td>Separuh Nafas</td>
                <td>Dewa 19</td>
                <td>Mar 16, 2022</td>
                <td>
                  <FiHeart />
                </td>
                <td>3:42</td>
              </tr>
              <tr className="tr-daily">
                <td className="td-daily">
                  <p>4</p>
                  <img className="day-img" src={Foto2} alt="" />
                  <button className="play-btn"><FiPlay size={20} className="fiplay" /></button> 
                </td>

                <td>Separuh Nafas</td>
                <td>Dewa 19</td>
                <td>Mar 16, 2022</td>
                <td>
                  <FiHeart />
                </td>
                <td>3:42</td>
              </tr>
              <tr className="tr-daily">
                <td className="td-daily">
                  <p>5</p>
                  <img className="day-img" src={Foto2} alt="" />
                  <button className="play-btn"><FiPlay size={20} className="fiplay" /></button> 
                </td>

                <td>Separuh Nafas</td>
                <td>Dewa 19</td>
                <td>Mar 16, 2022</td>
                <td>
                  <FiHeart />
                </td>
                <td>3:42</td>
              </tr>
             
            </table>
          </div>
        </div>
      </div>

      <Footer token={token}/>
    </div>
  );
}

export default Daily;
