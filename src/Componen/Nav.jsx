import "./Style/Nav.css"
import {Link} from "react-router-dom"
// import React from "react";

function Nav() {
  return (
      <div className="nav-body">
        <ul>
          {/* <li><Link to="/daily">Daily</Link></li> */}
          {/* <li><Link to="/artis">Artis</Link></li>
          <li><Link to="/playlist">Playlist</Link></li> */}

          <input className="src" type="search" placeholder="ketik untuk memulai" />
        </ul>
      </div>

  )

  
}

export default Nav