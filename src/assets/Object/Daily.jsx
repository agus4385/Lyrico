import "./Object.css/Daily.css"
import Sidebar from "../../Componen/Sidebar"
import Footer from "../../Componen/Footer"
import Foto from "../img/baby.jpg"
import Foto2 from "../img/blackpink.jpg"
import {FiPlay,FiHeart } from "react-icons/fi";



// import Foto1 from "../img/blackpink.jpg"

function Daily() {
  return (
    
    <div className="daily">
       <div className="daily-home">
       <Sidebar/>
       <div className="daily-judul">
          <div className="daily-judul2">
           <img className="daily-foto" src={Foto} alt="" />
          <div className="daily-button">

          <h1>Babay Metal</h1>
          <button className="day-btn"><FiPlay className="fi" size={30}/></button> 
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
               
                  <tr  className="tr-daily">
                    <td className="td-daily">
                      <p>1</p>
                      <img className="day-img" src={Foto2} alt="" />
                     <FiPlay className="fiplay"/>
                    </td>
                  
                    <td>Separuh Nafas</td>
                    <td>Dewa 19</td>
                    <td>Mar 16, 2022</td>
                    <td><FiHeart/></td>
                    <td>3:42</td>
                  </tr>
                  <tr  className="tr-daily">
                    <td className="td-daily">
                      <p>1</p>
                      <img className="day-img" src={Foto2} alt="" />
                     <FiPlay className="fiplay"/>
                    </td>
                  
                    <td>Separuh Nafas</td>
                    <td>Dewa 19</td>
                    <td>Mar 16, 2022</td>
                    <td><FiHeart/></td>
                    <td>3:42</td>
                  </tr>
                  <tr  className="tr-daily">
                    <td className="td-daily">
                      <p>1</p>
                      <img className="day-img" src={Foto2} alt="" />
                     <FiPlay className="fiplay"/>
                    </td>
                  
                    <td>Separuh Nafas</td>
                    <td>Dewa 19</td>
                    <td>Mar 16, 2022</td>
                    <td><FiHeart/></td>
                    <td>3:42</td>
                  </tr>
                  <tr  className="tr-daily">
                    <td className="td-daily">
                      <p>1</p>
                      <img className="day-img" src={Foto2} alt="" />
                     <FiPlay className="fiplay"/>
                    </td>
                  
                    <td>Separuh Nafas</td>
                    <td>Dewa 19</td>
                    <td>Mar 16, 2022</td>
                    <td><FiHeart/></td>
                    <td>3:42</td>
                  </tr>
                  
                  
                 
                </table>
              </div>

      </div>
      </div>

       
         
      <Footer/>
    </div>
  )
}

export default Daily