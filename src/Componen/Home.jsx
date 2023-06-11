import "./Style/Home.css";
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
    setAccessToken(data.access_token);
  };
  console.log(!accessToken);
  if (!accessToken) {
    return (
      <div className="container">
        <button id="login" onClick={login}>
          Login
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
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