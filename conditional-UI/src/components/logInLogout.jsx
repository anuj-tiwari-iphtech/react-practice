

import { useState } from "react";

function LoginExample(){

    const[isloggedIn, setisloggedIn ] = useState(true)

    return(
        <>
            <h2>{ isloggedIn ? "You are Logged in" : "You are Logged Out"}</h2>

            <button onClick={() => setisloggedIn(!isloggedIn)}>
                {isloggedIn ? "Logout" : "Login"}
            </button>
        </>
    )
}

export default LoginExample