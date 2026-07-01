

import Header from "./components/header"
import Navbar from "./components/navbar"
import Student from "./components/student"
import Employee from "./components/Employee"
import Footer from "./components/footer"

function App() {
    const students = [
    {
      name: "Rahul Sharma",
      roll: 101,
      college: "ABC College",
      city: "Delhi",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      hobbies: ["Cricket", "Reading", "Music"],
      status: true
    },
    {
      name: "Priya Singh",
      roll: 102,
      college: "XYZ University",
      city: "Lucknow",
      skills: ["Java", "Spring Boot", "SQL"],
      hobbies: ["Painting", "Traveling"],
      status: false
    }
  ];

  return (
    <>
      <Header/>
      
      <Navbar/>

       <h2>Student Information</h2>

        {
          students.map((student, index) => (
            <Student
              key={index}
              data={student}
            />
          ))
        }

      <Employee
      name = "Amit Kumar"
      id = "EMP101"
      department = "Software Eng"
      city = "Lucknow"
      />

      <Footer/>
    </>
  )
}

export default App
