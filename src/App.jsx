import "./App.css";

import Home from "./Componen/Home";
import Body from "./Componen/Body";
import Daily from "./assets/Object/Daily";
import Like from "./Componen/Like";
import Artis from "./assets/Object/Artis";
import Playlist from "./assets/Object/Playlist";
// import Login from "./Componen/Login";
// import Myprofile  from "./Componen/Myprofile";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Callback from "./Componen/Callback";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />}>
          <Route index element={<Body />} />
          {/* <Route path="/profile" element={<Myprofile />} /> */}
          {/* <Route path="/daily" element={<Daily />} /> */}
          <Route path="like" element={<Like />} />
          <Route path="search" element={<Artis />} />
          {/* <Route path="/artis" element={<Artis />} /> */}
          <Route path="myplaylist" element={<Playlist />} />
          {/* <Route path="/lyrico" element={<Halaman_Awal />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/top_music" element={<Playlist />} /> */}
          <Route path="playlist" element={<Daily />} />
          {/* <Route path="/myprofile" element={<Myprofile />} /> */}
        </Route>
        <Route path="/callback" element={<Callback />} />
      </>
    )
  );
  return (
    <RouterProvider router={router} />
    // <Router>
    //   <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/dashboard" element={<Body />} />
    //       {/* <Route path="/profile" element={<Myprofile />} /> */}
    //       {/* <Route path="/daily" element={<Daily />} /> */}
    //       <Route path="/like" element={<Like />} />
    //       <Route path="/search" element={<Artis />} />
    //       {/* <Route path="/artis" element={<Artis />} /> */}
    //       <Route path="/myplaylist" element={<Playlist />} />
    //       {/* <Route path="/lyrico" element={<Halaman_Awal />} /> */}
    //       {/* <Route path="/login" element={<Login />} /> */}
    //       {/* <Route path="/top_music" element={<Playlist />} /> */}
    //       <Route path="/playlist" element={<Daily />}/>
    //       {/* <Route path="/myprofile" element={<Myprofile />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
