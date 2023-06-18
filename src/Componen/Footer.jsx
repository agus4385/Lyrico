import { useState, useEffect } from "react";
import "./Style/Footer.css"
import "../assets/Object/Object.css/Daily.css"
// import Img from "../assets/img/billie1.png"
import {FiSkipBack,FiSkipForward,FiPlayCircle,FiRepeat,FiHeart,FiVolume } from "react-icons/fi";


function Footer({token}) {
const [player, setPlayer] = useState(null);

  const track = {
    name: "",
    album: {
      images: [{ url: "" }],
    },
    artists: [{ name: "" }],
  };

  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Lyrico",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }

        setTrack(state.track_window.current_track);
        setPaused(state.paused);

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });

      player.connect();
    };
  }, []);

  return(
    <div className="footer">
      <div className="music-player">
            <div className="song-bar">
                <div className="song-infos">
                    <div className="image-container">
                      <img src={current_track.album.images[0].url} alt="" />
                    </div>
                    <div className="song-description">
                        <p className="title">
                            {current_track.name}
                        </p>
                        <p className="artist">{current_track.artists[0].name}</p>
                    </div>
                </div>
             
            </div>
            <div className="progress-controller">
                <div className="control-buttons">
                    
                    <button className="play-pause" onClick={() => {player.previousTrack()}}><FiSkipBack size={20}/></button>
                    <button className="play-pause" onClick={() => {player.togglePlay()}}><FiPlayCircle size={20}/></button>
                    <button className="play-pause" onClick={() => {player.nextTrack()}}><FiSkipForward size={20}/></button>
                   
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