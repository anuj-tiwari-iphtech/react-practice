

import { useState } from "react";

function ShowHidePassword(){

    const [show , setshow] = useState(false)

    return(
        <>
        <input
        type = {show ? "text" : "password"}
        placeholder="Enter your password"
        />

        <button onClick={() => setshow(!show)}>
            {show ? "Hide" : "show"}
        </button>
        </>

    )
}

export default ShowHidePassword