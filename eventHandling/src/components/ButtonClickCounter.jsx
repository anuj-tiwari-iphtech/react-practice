
import { useState } from "react";

function ButtonClickCounter(){

    const [count, setCount] = useState(0)

    return(
        <>
        <h1> Button Click : {count}</h1>

        <button onClick={() => {
            setCount(count +1 )
        }}>
            Click MMee</button>
        </>
    )
}

export default ButtonClickCounter