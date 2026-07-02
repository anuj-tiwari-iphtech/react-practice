
// The easiest way to update a state object is by using the JavaScript spread operator (...). 
// This copies all existing properties from the old object, 
// allowing you to overwrite only the specific fields that changed

import { useState } from "react";

function EmployeesDetails(){

    const [employee, setEmployee] = useState({
        name: "John Doe",
        department: "HR",
        isActive: true,
        hobbies : {
            sports : "Cricket",
            extra : "Reading",
        }
    });

    // Update Name
    const updateName = () => {
        setEmployee({
            ...employee,
            name : "Anuj",
        })
    }

    //Update Department
    const upateDepartment = () => {
        setEmployee({
            ...employee,
            department : "Computer Science",
        })
    }

    //Update Active Status
    const toggleStatus = () => {
        setEmployee({
            ...employee,
            isActive : !employee.isActive,
        })
    }

    // updating nested objects
    const updateHobbies = () => {
        setEmployee({
            ...employee,
            hobbies : {
                ...employee.hobbies,
                extra : "Wallking",
            }

        })
    }

    return(
        <>
        <h2>Employee Detail</h2>

        <p><strong>Name :</strong> {employee.name}</p>
        <p><strong>Department :</strong> {employee.department}</p>
        <p><strong>isActive :</strong>{employee.isActive ? "Active" : "InActive"}</p>
        <p><strong>hobbies : </strong>{employee.hobbies.sports},{employee.hobbies.extra}</p>

        <button onClick={updateName}>Update Name</button> | {" "}
        <button onClick={upateDepartment}>Update Department</button> | {" "}
        <button onClick={toggleStatus}>Toggle Active Status</button> | {" "}
        <button onClick={updateHobbies}>Update Hobby</button>
        </>
    )
}

export default EmployeesDetails