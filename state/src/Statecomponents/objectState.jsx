
import { useState } from "react"

function ObjectState(){

    const[user, setUser] = useState({
        name : "John",
        age : 22,
        city : "Lko"
    })

    

    return(
        <>
        <h1>// Object State</h1>
        <h2>Name : {user.name}</h2>
        <h2>Age : {user.age}</h2>
        <h2>City : {user.city}</h2>

        <button onClick = {() => 
                setUser({
                    ...user,
                    age : user.age + 1
                })
    }>
            change Age
        </button>
        </>
    )
}

export default ObjectState