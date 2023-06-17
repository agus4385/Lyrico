import "./Object.css/Daily.css"
import Sidebar from "../../Componen/Sidebar"
import Footer from "../../Componen/Footer"
import Foto from "../img/baby.jpg"
// import Listmusic from "./Listmusic"
// import Foto1 from "../img/blackpink.jpg"

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
          <div className="rowlist">
          <div className="table-row table-head">
        <div className="table-cell first-cell">
            <p>Judul</p>
        </div>
        <div className="table-cell">
            <p>Artis</p>
        </div>
        <div className="table-cell last-cell">
            <p>Waktu</p>
        </div> 
    </div>
    {/* <Listmusic/> */}
  

            
          </div>

         
          
          
            
        
      </div>
      </div>
       
         
      <Footer/>
    </div>
  )
}

export default Daily