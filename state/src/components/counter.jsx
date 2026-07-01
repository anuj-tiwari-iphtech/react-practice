

import { useState } from "react";

function Counter(){
    const[count, setCount] = useState(0)

    const addValue = () => {
        setCount(count + 1)
    }

    const subtractValue = () => {
        setCount(count - 1)
    }

    return(
        <>
        <h1>Counter Value {count}</h1>

        <button onClick={addValue}>
            Increment
        </button>

        <button onClick={subtractValue}>
            Decrement
        </button>
        </>
    )
}

export default Counter