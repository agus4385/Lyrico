import "./Object.css/Daily.css"
import Sidebar from "../../Componen/Sidebar"
import Footer from "../../Componen/Footer"
import Foto from "../img/baby.jpg"
import Foto1 from "../img/blackpink.jpg"

function Daily() {
  return (
    
    <div className="daily">
       <div className="daily-home">
       <Sidebar/>
        <div className="daily-judul">
          <div className="daily-lagu">
            <img className="judul-img" src={Foto} alt="#" />
          <h1>Hallo</h1>
          </div>
          <div className="daily-music">
              <li>
                  <img className="daily-play" src={Foto1} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                    <div className="daily-artis">Unknown</div>
                  </a>               
             </li>
             <li>
                  <img className="daily-play" src={Foto1} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                    <div className="daily-artis">Unknown</div>
                  </a>               
             </li>
              <li>
                  <img className="daily-play" src={Foto1} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                    <div className="daily-artis">Unknown</div>
                  </a>               
             </li>
             <li>
                  <img className="daily-play" src={Foto1} alt="#"/>
                  <a href="">
                    Jokowi cover AI
                    <div className="daily-artis">Unknown</div>
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