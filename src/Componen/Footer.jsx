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
          <li>Singe Me To Sleep</li>
        </ul>
        <div className="fot-logo">
          
        </div>
     </div>
    </div>
  )
  
}

    
export default Footer