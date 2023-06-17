
import "./Object.css/Daily.css"
import Artis from "../img/blackpink.jpg"
import likeicon from "../assets/img/love.png"

function Listmusic() {
    return (
        <div className="table-like-album">
                <table> 
                
                  <tr>
                    <td>#</td>
                   
                    <td>Title</td>
                    <td>Artis</td>
                    <td>Date</td>
                    <td>like</td>
                    <td>duration</td>
                  </tr>
               
                  <tr>
                    <td className="td-position">1
                      
                      <img className="foto-like" src={Artis} alt="" />
                    </td>
                  
                    <td>Separuh Nafas</td>
                    <td>Dewa 19</td>
                    <td>mar 16, 2022</td>
                    <td><img 
                          className="iconlike" 
                          src={likeicon} 
                          alt="" /></td>
                    <td>3:42</td>
                  </tr>
                  <tr>
                  <td className="td-position">2
                      
                      <img className="foto-like" src={Artis} alt="" />
                    </td>
                    <td>Pink Venom</td>
                    <td>Black Pink</td>
                    <td>14 mar, 2022</td>
                    <td><img 
                          className="iconlike" 
                          src={likeicon} 
                          alt="" /></td>
                    <td>3:04</td>
                  </tr>
                  <tr>
                  <td className="td-position">3
                      
                      <img className="foto-like" src={Artis} alt="" />
                    </td>
                    <td>Pluto Projector</td>
                    <td>Rex Orange</td>
                    <td>mar 12, 2022</td>
                    <td><img 
                          className="iconlike" 
                          src={likeicon} 
                          alt="" /></td>
                    <td>4:27</td>
                  </tr>
                  <tr>
                  <td className="td-position">4
                      
                      <img className="foto-like" src={Artis} alt="" />
                    </td>
                    <td>Die For You</td>
                    <td>The Weeknd</td>
                    <td>reb 18, 2022</td>
                    <td><img 
                          className="iconlike" 
                          src={likeicon} 
                          alt="" /></td>
                    <td>4:20</td>
                  </tr>
                  <tr>
                  <td className="td-position">5
                      
                      <img className="foto-like" src={Artis} alt="" />
                    </td>
                    <td>The Scientist</td>
                    <td>Colplay</td>
                    <td>Feb 18, 2022</td>
                    <td><img 
                          className="iconlike" 
                          src={likeicon} 
                          alt="" /></td>
                    <td>5:09</td>
                  </tr>
                </table>
              </div>
    )
}
export default Listmusic