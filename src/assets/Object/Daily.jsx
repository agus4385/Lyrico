import "./Object.css/Daily.css"
import Sidebar from "../../Componen/Sidebar"
import Footer from "../../Componen/Footer"
import Foto from "../img/baby.jpg"
import Foto1 from "../img/blackpink.jpg"

function Daily() {
  return (
    
    <div className="daily">
       <div className="home-daily">
       <Sidebar/>
        <div className="judul-daily">

        <img className="day-gambar" src={Foto1} alt="" />
          <div className="daily-menu">
              <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
            <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
            <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
            <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
          </div>
        {/* Baris 2 */}
          <div className="daily-menu2">
              <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
            <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
            <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
            <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
          </div>
           {/* Baris 3 */}
           <div className="daily-menu3">
              <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
            <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
            <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
            <li className="day-artis">
                  <img className="day-foto" src={Foto} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                <div className="nama-artis">Unknown</div>
              </a>               
            </li>
          </div>
          
          
        </div>
         
       </div>
      <Footer/>
    </div>
  )
}

export default Daily