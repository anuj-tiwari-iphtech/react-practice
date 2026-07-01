
import { useState } from "react";

function OnChange(){

    const[name, setName] = useState("John")

    return(

        <>
        <input
        type = "text"
        placeholder = "Enter your Name"
        value = {name}
        onChange = {(e) => setName(e.target.value)}
        />

        <h2>Hello, {name}</h2>
        </>
    )
}

export default OnChange