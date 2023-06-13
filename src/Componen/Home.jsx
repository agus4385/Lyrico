// import "./Style/Home.css";
import "./Style/Login.css";
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
    localStorage.setItem("spotify-token". d)
    setAccessToken(data.access_token);
  };
  console.log(!accessToken);
  if (!accessToken) {
    return (
      <div className="container">
        <form className="loginForm">
          <h2>Play Music </h2>
          <div className="fill">
            <input type="text" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
          </div>
              <button className="loginButton" onClick={login}>Login</button>
              {/* <button className="loginButton" type="submit">Login</button> */}
              <p>Belum ada akun? <a href="">Buat akun</a></p>
          <div className="cekPrivasi">
            <input type="checkbox" name="check"/>
            <p className="cekKeterangan">to be your self
            </p>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="container-login">
        <div className="main-container">
          {/* <Sidebar /> */}
          <Body />
          {/* <SideKiri /> */}
        </div>
      </div>
    );
  }
}

export default Home;
