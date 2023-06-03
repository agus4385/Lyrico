import Img from "../assets/img/blackpink.jpg"
/* import Bacground from "../assets/backgrn/back.jpg" */
import "./Style/Body.css"
/* import Img2 from "../assets/img/nino.jpg" */
import Nav from "./Nav"
function Body() {
  return (
    <div className="body" >
        <Nav/>
      
      {/* Baris 1 */}
         <div className="home">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">

                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
            </div>
            <div className="satu">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">
                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
            </div>
            </div>
            <div className="satu">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">
                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
            </div>
            </div>
            <div className="satu">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">
                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
            </div>
            </div>
            <div className="satu">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">
                <h4><a href="">Today Top Hits</a> </h4> 

                <p>Yoashobi</p>
              </div>
            </div>
            </div>
        </div>
        {/* Baris 2 */}
        <div className="baris2">

          <div className="baris">
          <div className="satu">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">
                <h4> <a href="">Today Top Hits</a></h4>
                <p>Yoashobi</p>
              </div>
            </div>
            </div>
          </div>
           <div className="baris">
          <div className="satu">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">
                <h4> <a href="">Today Top Hits</a></h4>

                <p>Yoashobi</p>
              </div>
            </div>
            </div>
          </div>
          <div className="baris">
          <div className="satu">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">
                <h4> <a href="">Today Top Hits</a></h4>

                <p>Yoashobi</p>
              </div>
            </div>
            </div>
          </div>
          <div className="baris">
          <div className="satu">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">
                <h4> <a href="">Today Top Hits</a></h4>

                <p>Yoashobi</p>
              </div>
            </div>
            </div>
          </div>
          <div className="baris">
          <div className="satu">
            <div className="sub">
                <img className="img" src={Img} alt="" />
                <div className="putar">
                <h4> <a href="">Today Top Hits</a></h4>

                <p>Yoashobi</p>
              </div>
            </div>
            </div>
          </div>
          </div>
        
    </div>

  )
}

export default Body