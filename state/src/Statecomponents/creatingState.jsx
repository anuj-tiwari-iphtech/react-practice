

import { useState } from "react";

function CreatingState(){

    const[name, setName] = useState("John")
    return(
        <>
        <h2>{name}</h2>

        <button onClick={() => setName("Anuj")}>
            Change Name
        </button>
        </>
    )
}

export default CreatingState