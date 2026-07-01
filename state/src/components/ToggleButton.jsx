
import { useState } from "react"

function ToggleButton(){

    const [isOn , setIsOn] = useState(false)

    return(

        <>
        <h1>{isOn ? "On" : "OFF"}</h1>

        <button onClick={() => setIsOn(!isOn)}>
            Toggle
        </button>
        </>
    )
}

export default ToggleButton