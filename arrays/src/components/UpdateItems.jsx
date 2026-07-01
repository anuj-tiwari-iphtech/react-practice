

import { useState } from "react";

function UpdateItem() {
  const [students, setStudents] = useState([
    "Rahul",
    "Amit",
    "Priya"
  ]);

  const updateStudent = () => {
    setStudents(
      students.map((student) =>
        student === "Rahul" ? "Rohan" : student
      )
    );
  };

  return (
    <>
      <button onClick={updateStudent}>
        Update Student
      </button>

      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </>
  );
}

export default UpdateItem;