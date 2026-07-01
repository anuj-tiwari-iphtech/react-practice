

import { useState } from "react";

function RemoveItem() {
  const [students, setStudents] = useState([
    "Rahul",
    "Amit",
    "Priya"
  ]);

  const removeStudent = (name) => {
    setStudents(
      students.filter((student) => student !== name)
    );
  };

  return (
    <ul>
      {students.map((student) => (
        <li key={student}>
          {student}
            {"    "}
          <button onClick={() => removeStudent(student)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default RemoveItem