

import { useState } from "react";

function AddItems(){

    const [fruits, addFruits] = useState([
        "Apple",
        "Banana"
    ])

    const addFruit = () => {
        addFruits([...fruits,"Orannge"])
    }

    return(
        <>
        <button onClick={addFruit}>
            Click to add
        </button>

        <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
        </ul>
        </>
    )
}

export default AddItems