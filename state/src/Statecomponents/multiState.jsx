
import { useState } from "react"

function MultiState(){

    const [name,setName] = useState("John")
    const [Age, setAge] = useState("18")

    const changeName = () => {
        setName("Anuj")
    }

    const changeAge = () => { 
        setAge("21")
    }

    return(
        <>
        <h2>Name : {name}</h2>
        <h2>Age : {Age}</h2>

        <button onClick={changeName}>
            Change Name
        </button>

        <button onClick={changeAge}>
            change Age</button>

        </>
    )
}

export default MultiState