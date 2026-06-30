
function StudentList(){
    const student = [
        {
            id: 1,
            name: "Anuj Tiwari",
            rollno: "101",
            collegeName: "Lucknow University",
            city: "Lucknow",
        },
        {
            id: 2,
            name: "Rahul Sharma",
            rollno: "102",
            collegeName: "AKTU",
            city: "Kanpur",
        },
        {
            id: 3,
            name: "Aman Singh",
            rollno: "103",
            collegeName: "IIT Kanpur",
            city: "Kanpur",
        },
    ]
    return(
        <>
        

        {student.map((stu) => {
            return (
            <div key={stu.id}>
            <h2>{stu.name}</h2>
            <p>Roll No: {stu.rollno}</p>
            <p>College: {stu.collegeName}</p>
            <p>City: {stu.city}</p>
            </div>
            )
        })}
        </>
    )
}

export default StudentList