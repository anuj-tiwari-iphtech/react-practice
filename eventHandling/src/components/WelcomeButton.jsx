
import { useState } from "react";

function WelcomeUserButton(){
    const[name,setName] = useState("")
    const[message, setMessage] = useState("")

        const welcomeUser = () => {
            setMessage(`Welcome, ${name}`)
        }

    return(
        <>
        <input
        type = "text"
        placeholder="Enter Name"
        value = {name}
        onChange={ (e) => 
            setName(e.target.value)
        }
        />

        <button onClick={welcomeUser}>
            Click
        </button>

        <h2>{message}</h2>
        </>
    )
}

export default WelcomeUserButton