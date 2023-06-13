import "./Style/Sidebar.css"
import {Link} from "react-router-dom"
import { FiAlignJustify,FiHeart,FiFolder } from "react-icons/fi";



function Sidebar() {
  return (
        <div className="sidebar">
                <ul>
                    <li>  <FiAlignJustify  className="icn"/> <Link className="link-sid" to="/dashboard">
                      Dashboard</Link></li>
                    <li><FiHeart className="icn"/><Link className="link-side" to="/like">
                      Like</Link></li>
                    <li><FiFolder className="icn"/><Link className="link-side" to="/history">
                      Album</Link></li>
                </ul>
        </div>
        
  )
}

export default Sidebar