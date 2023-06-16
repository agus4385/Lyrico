import "./App.css";

import Home from "./Componen/Home";
import  Body from "./Componen/Body"
import Daily from "./assets/Object/Daily"
import Like from "./Componen/Like"
// import History from/ "./Componen/History"
import Artis from "./assets/Object/Artis"
// import Halaman_Awal from "./assets/Object/Halaman_Awal";
import Playlist from "./assets/Object/Playlist"
// import Daily from "./assets/Object/Daily";
import Login from "./Componen/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Body />} />
          {/* <Route path="/daily" element={<Daily />} /> */}
          <Route path="/like" element={<Like />} />
          <Route path="/search" element={<Artis />} />
          {/* <Route path="/artis" element={<Artis />} /> */}
          <Route path="/myplaylist" element={<Playlist />} />
          {/* <Route path="/lyrico" element={<Halaman_Awal />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/top_music" element={<Playlist />} /> */}
          <Route path="/playlist" element={<Daily />}/>
          {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
