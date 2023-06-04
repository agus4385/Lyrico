import "./Style/Sidebar.css"
import {Link} from "react-router-dom"


/* import Bgr from "../assets/backgrn/wallpaperflare.com_wallpaper (2).jpg"
import Img from "../assets/img/twice.jpg" */
/* import Body from "./Body" */
function Sidebar() {
  return (
        <div className="sidebar">
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/like">Like</Link></li>
                    <li><Link to="/history">History</Link></li>
                </ul>
        </div>
        
  )
}

export default Sidebar