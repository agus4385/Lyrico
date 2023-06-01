import "./Style/Footer.css"
import "../assets/Object/Object.css/Daily.css"
import Img from "../assets/img/billie1.png"

function Footer() {
  return(
    <div className="footer">
      <img className="fot-img" src={Img} alt="/"/>
      <div className="fot-artis">
        <ul>
          <li><a>Singe Me To Sleep</a></li>
          <li>Alan Walker</li>
        </ul>
        <div className="fot-logo">
          
        </div>
      
     </div>
     <span id="currentStart">0:00</span>
        <div className="bar">
           <input type="range" id="seek" min={"100"} value={"0"} max={"100"} />
            <div className="bar2" id="bar2"></div>
            <div className="dot"></div>
          </div>
    </div> 
  )
  
}

    
export default Footer