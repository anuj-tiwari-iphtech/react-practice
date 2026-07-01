

import { useState } from "react";

function AlertMessage(){

    const showAlert = () => {
        alert(`Wecome to React Prep`)
    }

    return(
        <>
        <button onClick={showAlert}>Show Alert</button>
        </>
    )
}

export default AlertMessage