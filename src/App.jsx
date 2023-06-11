import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./Componen/Home";
// import getArtist from '../api/artis'

/* Object */
import Daily from "./assets/Object/Daily";
import Like from "./Componen/Like";
import History from "./Componen/History";
import Artis from "./assets/Object/Artis";

import Playlist from "./assets/Object/Playlist";

function App() {
  // const token = fetch(
  //   `${
  //     import.meta.env.VITE_API_SPOTIFY_URL
  //   }/api/token`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: 'grant_type=client_credentials&client_id=d9acce75f1624dcfa73587eecf26bb45&client_secret=99bdbe8480f34ee08016c7bd55a60aad'
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // const artis = getArtist("0TnOYISbd1XYRBk9myaseg")
  return (
    <Router>
      <Routes>
        {/* <Route element={<Outlet context={{ token }} />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/like" element={<Like />} />
          <Route path="/history" element={<History />} />
          <Route path="/artis" element={<Artis />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/top_music" element={<Playlist />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
