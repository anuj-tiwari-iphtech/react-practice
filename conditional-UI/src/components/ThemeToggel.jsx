

import { useState } from "react";

function ThemeToggle(){

    const [darkMode, setDarkMode] = useState(false)

    return(
        <div
            style={{
                backgroundColor: darkMode ? "#222" : "#fff",
                color: darkMode ? "#fff" : "#000",
                padding: "20px",
            }}
            >

            <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

            <button onClick={ () => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    )
}

export default ThemeToggle