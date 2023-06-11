import "./Style/Home.css"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import SideKiri from "./SideKiri"
import Body from "./Body"
import { useOutletContext } from "react-router-dom"


function Home() {
  // const token = useOutletContext();
  const data = fetch(
    `${
      import.meta.env.VITE_API_SPOTIFY_URL
    }/api/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: 'grant_type=client_credentials&client_id=d9acce75f1624dcfa73587eecf26bb45&client_secret=99bdbe8480f34ee08016c7bd55a60aad'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  console.log(data)
  return (
    <div className="container">

        <div className="main-container">
          <Sidebar/>
          <Body />
          <SideKiri/>
        </div>
        <Footer/>
     </div>
  )
}

export default Home