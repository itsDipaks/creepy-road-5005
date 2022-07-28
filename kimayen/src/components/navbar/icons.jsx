import Login from "../Login/Login";
import Signup from "../signup/Signup";

import "./Navbar.css"
function Icon(){
    return(
        <div className="icondiv">
           <Signup/>
           
            
            <img className="imgicon"  src="https://cdn-icons-png.flaticon.com/128/747/747376.png" alt="" />
           <Login/>
            
        </div>
    )
}
export default Icon;