import { useState } from "react";
import  UserSignUp from './components/Auth/Signin'
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Signup(props) {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMassage] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/Dashboard";

    const {error, Signin} = UserSignUp();

    const handleSignedUp = async (e) => {
        e.preventDefault();
        await Signin(Email, Password)
        if(!error) {
            navigate(from, {replace: true})
            setEmail("")
            setPassword("")
            console.log('success')
            return;

        }else{
            setErrorMassage(errorMessage)
            console.log(errorMessage)
        }
    }


  return (
    <><Link to='/' className="back">Back</Link><div className="more">
          <h1 className="h1-more">Create your account</h1>
          <form onSubmit={handleSignedUp}>
              <input
                  type="email"
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)} />

              <input
                  type="Password"
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)} />
              {errorMessage && <p>{errorMessage}</p>}
              <button className="form-btn">Signup</button>

          </form>

          <p>Have an account</p>
          <button className="form-btn" onClick={props.toggleForm}>Login</button>

      </div>
      
      </>
    
  )
}

export default Signup;