

import "./App.css"
import StudentDetails from './components/student'
import ProductDetails from './components/ProductDetails'
import Employee from './components/Employee'
import anuj from "./assest/anuj.jpg";
import StudentList from "./components/studentList";
import EmployeeList from "./components/EmployeeList";

function App(props) {
  

  return (
    <div className='container'  
    style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
       >

      <section className='card' style={{backgroundColor : "LightBlue"}}>
        <h2>1-Multiple Props</h2>
            <StudentDetails
            image = {anuj}
            name = "Anuj Tiwari" 
            rollno = "1234"
            collegeName = "Lucknow University"
            city = "Lucknow" 
            marks = {32}
            />
      </section>

      <hr/>

      <section className='card' style={{backgroundColor : "LightBlue"}}>
        <h2>2-Destructuring Props</h2>
          <Employee
          image ={anuj}
          name = "Anuj Tiwari"
          age={21}
          post="Software intern"
          salary="Youtube Earning"
          isActive={true}
          />
      </section>

      <hr/>

      <section className='card' style={{backgroundColor : "LightBlue"}}>
        <h2>3-Default Values Props</h2>
          <ProductDetails
          name = "Men Footwears"
          price = {1000}
          stock = {120}
          />
      </section>

      <section className='card' style={{backgroundColor : "LightBlue"}}>
        <h1>Student List</h1>
      <StudentList/> 
      </section>     

      <section className='card' style={{backgroundColor : "LightBlue"}}>
        <h1>Employee List</h1>
      <EmployeeList/> 
      </section>  
      
    </div>
  )
}

export default App
