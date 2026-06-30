

function StudentDetails(prop){
    return (
        <>
        <h1>Student Details</h1>
        <img src= {prop.image} alt = {prop.name} width = "150"
        />
        <p>Name : {prop.name}</p>
        <p>Roll No : {prop.rollno}</p>
        <p>College Name : {prop.collegeName}</p>
        <p>City : {prop.city}</p>
        <p>Result : {prop.marks>=33 ? "Pass" : "Fail"}</p>
        </>
    )
}

export default StudentDetails