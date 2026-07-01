

function Student({data}){
    return(
        <>
        <h1>Student Details</h1>
        <p><b>Name :</b>{data.name}</p>
        <p><b>College :</b>{data.college}</p>
        <p><b>City :</b>{data.city}</p>
        <h4>Skills</h4>
        <ul>
            {
                data.skills.map((skill,index) => (
                    <li key={index}>{skill}</li>
                ))
            }
        </ul>
        <h4>Hobbies</h4>
        <ul>
            {
                data.hobbies.map((hobbiie,index) => (
                    <li key={index}>{hobbiie}</li>
                ))
            }
        </ul>
        </>
    )
}

export default Student