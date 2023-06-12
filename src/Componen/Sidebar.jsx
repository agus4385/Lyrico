import "./Style/Sidebar.css"
import {Link} from "react-router-dom"
import { FiAlignJustify,FiHeart,FiFolder } from "react-icons/fi";



function Sidebar() {
  return (
        <div className="sidebar">
                <ul>
                    <li> <Link to="/dashboard">
                      <FiAlignJustify  className="icn"/> Dashboard</Link></li>
                    <li><Link to="/like">
                      <FiHeart className="icn"/>Like</Link></li>
                    <li><Link to="/history">
                      <FiFolder className="icn"/>History</Link></li>
                </ul>
        </div>
        
  )
}

export default Sidebar