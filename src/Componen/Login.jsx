import Gmbr2 from ".././assets/backgrn/cyb.jpg"
import Gmbr from ".././assets/backgrn/lofi.jpg.jpg"
import { Link } from "react-router-dom"
function Login() {
  return (
   <div className="loginlagi">
       <div className="login-kiri">
        
       <Link ></Link>
        <div className="grad">

        <ul>
            <li className="abjad0">Daf <span>tar</span></li>
            <h1 className="abjad4">&</h1>
            <li>N <span>ikmati</span></li>
            <li className="abjad1">M <span>usic Tanpa Henti</span>
            </li>
        </ul>

        <div className="slidegambar">
            <div className="scrol">

                <img className="slideimg" src={Gmbr} alt="" />
            
            
                <img className="slideimg" src={Gmbr2} alt="" />
            </div>
            
            
        </div>
     
        </div>
     
       
       </div>
       <div className="login-kanan">
        <div className="login-body">

        
        <form className="forn-container">
            
            <h2>Register</h2>
            <div className="name">
               
                <input type="text-login" placeholder="First Name"  required />
                <input type="text-login" placeholder="Last Name"  required/>

            </div>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Password" required/>
            <div className="trems">
                <input type="checkbox"/>
                I accept <a href="">Tems of Use</a>
            </div>
            <button>Register</button>
        </form>
        </div>
       </div>

      
   </div>
  
  )
}

export default Login