

import { useState } from "react";

function ArrayState(){

    const [fruit, setfruit] = useState([
        "Apple",
        "Banana"
    ]);

    const addFruit = () => {
        setfruit([
            ...fruit,
            "Orange"
        ]);
    }

    return(
        <>
            <ul>
                {fruit.map((fruits,index) => (
                    <li key={index}>{fruits}</li>
                ))}
            </ul>

            <button onClick={addFruit}>
                Add Fruit
            </button>
        </>
    )
}

export default ArrayState