import { useState } from "react";

function StudentForm() {
  const initialForm = {
    name: "",
    email: "",
    mobile: "",
    course: "",
    gender: "",
    skills: []
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSkill = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({
        ...form,
        skills: [...form.skills, value]
      });
    } else {
      setForm({
        ...form,
        skills: form.skills.filter((skill) => skill !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    alert("Registration Successful");
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile"
          value={form.mobile}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="course"
          value={form.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>

        <br /><br />

        <strong>Gender:</strong>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br /><br />

        <strong>Skills:</strong>

        <br />

        <label>
          <input
            type="checkbox"
            value="HTML"
            checked={form.skills.includes("HTML")}
            onChange={handleSkill}
          />
          HTML
        </label>

        <label>
          <input
            type="checkbox"
            value="CSS"
            checked={form.skills.includes("CSS")}
            onChange={handleSkill}
          />
          CSS
        </label>

        <label>
          <input
            type="checkbox"
            value="React"
            checked={form.skills.includes("React")}
            onChange={handleSkill}
          />
          React
        </label>

        <br /><br />

        <button type="submit">
          Submit
        </button>

        <button
          type="button"
          onClick={resetForm}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </form>

      <hr />

      <h3>Student Details</h3>

      <p><strong>Name:</strong> {form.name}</p>
      <p><strong>Email:</strong> {form.email}</p>
      <p><strong>Mobile:</strong> {form.mobile}</p>
      <p><strong>Course:</strong> {form.course}</p>
      <p><strong>Gender:</strong> {form.gender}</p>
      <p><strong>Skills:</strong> {form.skills.join(", ")}</p>
    </div>
  );
}

export default StudentForm;