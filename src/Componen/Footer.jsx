import "./Style/Footer.css"
import "../assets/Object/Object.css/Daily.css"
import Img from "../assets/img/billie1.png"
import {FiSkipBack,FiSkipForward,FiPlayCircle,FiRepeat,FiHeart,FiVolume } from "react-icons/fi";


function Footer() {
  return(
    <div className="footer">
      <div className="music-player">
            <div className="song-bar">
                <div className="song-infos">
                    <div className="image-container">
                      <img src={Img} alt="" />
                    </div>
                    <div className="song-description">
                        <p className="title">
                            Watashitachi wa Sou Yatte Ikite Iku Jinshu na no
                        </p>
                        <p className="artist">Masaru Yokoyama</p>
                    </div>
                </div>
             
            </div>
            <div className="progress-controller">
                <div className="control-buttons">
                    <i><FiRepeat/></i>
                    <i><FiSkipBack/></i>
                    <i><FiPlayCircle/></i>
                    <i><FiSkipForward/></i>
                    <i><FiHeart/></i>
                </div>
                <div className="progress-container">
                    <span>0:49</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    <span>3:15</span>
                </div>
            </div>
            <div className="other-features">
              
                <div className="volume-bar">
                    <i><FiVolume/></i>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>  
                </div>
            </div>
        </div>
    </div> 
  )
  
}

    
export default Footer