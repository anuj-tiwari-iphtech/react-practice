
function Employee({image ,name,age,post,salary,isActive}){
    return(
        <>
        <h1>Employee Details</h1>
        <img src={image} alt={name} width="150" style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginLeft: "20px",
        }}/>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Post : {post}</p>
        <p>Salary : {salary}</p>
        <p>Status : {isActive ? "Active" : "inActive"}</p>
        </>
    )
}

export default Employee