//this will handle adding and editing employee details. This form will allow the user to input the name, company, email, contact, and designation of the employee.
import React, { useState } from "react";

const EmployeeForm = ({ onSave, employeeData }) => {
  const [formData, setFormData] = useState(employeeData || {
    name: "",
    company: "",
    email: "",
    contact: "",
    designation: "Software Developer",
    avatar: "avatar1.png",
  });

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Send form data to parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleInputChange}
        placeholder="Company Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="contact"
        value={formData.contact}
        onChange={handleInputChange}
        placeholder="Contact No."
      />
      <select
        name="designation"
        value={formData.designation}
        onChange={handleInputChange}
      >
        <option value="Software Developer">Software Developer</option>
        <option value="Senior Software Developer">Senior Software Developer</option>
        <option value="Quality Assurance">Quality Assurance</option>
        <option value="Technical Lead">Technical Lead</option>
        <option value="Manager">Manager</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
