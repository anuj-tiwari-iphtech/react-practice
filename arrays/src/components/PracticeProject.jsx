

import { useState } from "react";

function PracticeProject() {
  const [students, setStudents] = useState([
    "Rahul",
    "Amit",
    "Priya"
  ]);

  const [newStudent, setNewStudent] = useState("");

  const addStudent = () => {
    if (newStudent.trim() === "") return;

    setStudents([...students, newStudent]);
    setNewStudent("");
  };

  const deleteStudent = (index) => {
    setStudents(
      students.filter((_, i) => i !== index)
    );
  };

  const updateStudent = (index) => {
    const updatedName = prompt(
      "Enter New Student Name",
      students[index]
    );

    if (!updatedName) return;

    setStudents(
      students.map((student, i) =>
        i === index ? updatedName : student
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <hr />

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}

            <button
              onClick={() => updateStudent(index)}
              style={{ marginLeft: "10px" }}
            >
              Update
            </button>

            <button
              onClick={() => deleteStudent(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeProject;