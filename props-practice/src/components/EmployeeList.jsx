
function EmployeeList(){

    const EmployeeData = [
        {
            id: 1,
            name: "Anuj",
            age: 21,
            post: "Intern",
            salary: 6000,
            isActive: true,
        },
        {
            id: 2,
            name: "Rahul",
            age: 25,
            post: "React Developer",
            salary: 45000,
            isActive: false,
        },
    ]
    return (
        <>
        {EmployeeData.map((emp) => {
            return(
                <div key = {emp.id}>
                <h2>{emp.name}</h2>
                <p>Age : {emp.age}</p>
                <p>Post : {emp.post}</p>
                <p>Salary : {emp.salary}</p>
                <p>isActice : {emp.isActive}</p>
                </div>
            )
        })}
        </>
    )
}

export default EmployeeList