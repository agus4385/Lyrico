import "./Style/Sidebar.css";
import { Link } from "react-router-dom";
import { FiAlignJustify, FiHeart, FiList, FiSearch } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          {" "}
          <FiAlignJustify className="icn" />{" "}
          <Link className="link-sid" to="/">
            Dashboard
          </Link>
        </li>
        <li>
          <FiSearch className="icn" />
          <Link className="link-side" to="/search">
            Search
          </Link>
        </li>
        <li>
          <FiHeart className="icn" />
          <Link className="link-side" to="/like">
            Like
          </Link>
        </li>
        <li>
          <FiList className="icn" />
          <Link className="link-side" to="/myplaylist">
            My Playlist
          </Link>
        </li>

        <li>
          <FiList className="icn" />
          <Link className="link-side" to="/login">
            Login
          </Link>
        </li>

        {/* <li><FiList className="icn"/><Link className="link-side" to="/profile">
                     Profile</Link></li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
