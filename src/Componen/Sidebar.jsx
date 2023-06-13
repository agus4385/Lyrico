import "./Style/Sidebar.css"
import {Link} from "react-router-dom"
import { FiAlignJustify,FiHeart,FiList,FiSearch } from "react-icons/fi";



function Sidebar() {
  return (
        <div className="sidebar">
                <ul>
                    <li>  <FiAlignJustify  className="icn"/> <Link className="link-sid" to="/dashboard">
                      Dashboard</Link></li>
                      <li><FiSearch className="icn"/><Link className="link-side" to="/search">
                      Search</Link></li>
                    <li><FiHeart className="icn"/><Link className="link-side" to="/like">
                      Like</Link></li>
                    <li><FiList className="icn"/><Link className="link-side" to="/history">
                      Playlist</Link></li>
                </ul>
        </div>
        
  )
}

export default Sidebar