// import Gmbr from "../assets/backgrn/abstract-gradient-neon-lights.jpg"

function Login() {
  return (
   <div className="loginlagi">
       <div className="login-kiri">
        <div className="lyrico">
            
        <h1>hai</h1>
        </div>
        <div className="grad">

        <ul>
            <li className="abjad0">Daf <span>tar</span></li>
            <h1 className="abjad4">&</h1>
            <li>N <span>ikmati</span></li>
            <li className="abjad1">M <span>usic</span></li>
            <li className="abjad2">T <span>anpa Batas</span></li>
        </ul>
     
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