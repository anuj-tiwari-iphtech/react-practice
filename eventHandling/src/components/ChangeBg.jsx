

import { useState } from "react";

function ChangeBg(){

    const[color, setColor] = useState("white")

    return(
        
          <div  style = {{
                backgroundColor: color,
                height: "100vh",
                padding: "20px"
            }}>

                <button onClick={() => setColor("red")}>Red</button>
                <button onClick={() => setColor("blue")}>Blue</button>
        </div>
    )
}

export default ChangeBg