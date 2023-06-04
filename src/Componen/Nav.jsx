import "./Style/Nav.css"
import {Link} from "react-router-dom"

function Nav() {
  return (
      <div className="nav-body">
        <ul>
          <li><Link to="/daily">Daily</Link></li>
          <li><a href="">Daily</a></li>
          <li><a href="">Daily</a></li>
          <li><a href="">Daily</a></li>
        <input className="src" type="search" />
        </ul>
      </div>
  
  )
}

export default Nav