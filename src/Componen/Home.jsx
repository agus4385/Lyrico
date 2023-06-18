// import "./Style/Home.css";
import "./Style/Login.css";
import ".././assets/Object/Object.css/Homepage.css";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import SideKiri from "./SideKiri";
// import Body from "./Body";
// import { useState } from "react";
import { Outlet } from "react-router-dom";

function Home() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const token = localStorage.getItem("spotify-token");
  
  const login = async () => {
    console.log("breee");
    const scopes = 'streaming user-read-private user-read-email'

    const auth_query_parameters = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope: scopes,
        redirect_uri: 'http://localhost:5173/callback',
    })
    window.location.replace('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
  };

  console.log(!token);

  if (!token) {
    return (
      <div className="home-img">
        <div className="cover">
          <h1 className="judul">
            L <span className="yrico">y</span>
          </h1>
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
      <Outlet />
    );
  }
}

export default Home;
