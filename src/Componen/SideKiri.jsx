import "./Style/SideKiri.css"

import Bgr from "../assets/backgrn/back.jpg"
import Img from "../assets/img/blackpink.jpg"

function SideKiri() {
  return (

    <div className="menu">
      <div className="list">
      <img className="background" src={Bgr} alt="" />
      <h1>Daily</h1>
        <div className="menu_music">
           
          <li className="item">
              <h2>1</h2>
              <img className="play" src={Img} alt="#"/>
              <a href="">
                Jokowi cover AI
            <div className="artis">Unknown</div>
          </a>               
        </li>
        <li className="item">
              <h2>2</h2>
              <img className="play" src={Img} alt="#"/>
              <a href="">
                Jokowi cover AI
            <div className="artis">Unknown</div>
          </a>               
        </li>
        <li className="item">
              <h2>3</h2>
              <img className="play" src={Img} alt="#"/>
              <a href="">
                Jokowi cover AI
            <div className="artis">Unknown</div>
          </a>               
        </li>
       </div>
      </div>
    </div>
  )
}

export default SideKiri