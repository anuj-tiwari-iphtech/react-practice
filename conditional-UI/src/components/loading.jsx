// Toggle Loading message

import { useState } from "react";

function Loading(){

    const[loading, setloading] = useState(true)

    return(
        <>
            {loading ? <h1>Loading...</h1>:<h1>Data Loaded</h1>}

            <button onClick={() => setloading(!loading)}>
                Toggle Loading
            </button>
        </>
    )
}

export default Loading