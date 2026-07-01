

function Employee(props){

    return(
        <>
        <h2>Employee Details</h2>
        <p><b>Name :</b> {props.name}</p>
        <p><b>Employee id :</b> {props.id}</p>
        <p><b>Department : </b> {props.department}</p>
        <p><b>City :</b>{props.city}</p>
        </>
    )
}

export default Employee