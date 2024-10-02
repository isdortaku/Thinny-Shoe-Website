import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";


function Authentication() {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <div>{toggle ?   (<Login toggleForm={handleToggle} /> ):      (<Signup toggleForm={handleToggle}/> ) } </div>
  )
}

export default Authentication;