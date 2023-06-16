// import "./Style/Home.css";
import "./Style/Login.css";
import ".././assets/Object/Object.css/Homepage.css"
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import SideKiri from "./SideKiri";
import Body from "./Body";
import { useState } from "react";

function Home() {
  const [accessToken, setAccessToken] = useState(null);
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  const login = async () => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    });
    const data = await response.json();
    console.log(data);
    // localStorage.setItem("spotify-token". data)
    setAccessToken(data.access_token);
  };
  console.log(!accessToken);
  if (!accessToken) {
    return (
      <div className="home-img"> 
      <div className="cover">

       <h1 className="judul">L <span className="yrico">y</span></h1>
      </div>
       <div className="text-judul">
        <div className="layhom">

        <h1 className="text1">BUAT</h1>
        <h1 className="text2">HARIMU</h1>
        <h1 className="text3">LEBIH</h1>
        <h1 className="text4">MENYENANGKAN</h1>
        </div>
        <div className="layhomekanan">
        <h1 className="text5">BERSAMA</h1>
        <h1 className="text5">LyRico</h1>
      
          <button className="get-start" id="start" onClick={login}>
           Get start
          </button>

        </div>

       </div>
    
    </div>

    
  
    
          
   
    );
  } else {
    return (
      <div className="main-container">
        {/* <div className="main-container"> */}
          {/* <Sidebar /> */}
          <Body />
          {/* <SideKiri /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Home;
