//display the details of employee (like name, email, contact number, etc.).
import React from "react";

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="employee-card">
      <img src={`path_to_avatars/${employee.avatar}`} alt="Avatar" />
      <h3>{employee.name}</h3>
      <p>{employee.company}</p>
      <p>{employee.email}</p>
      <p>{employee.contact}</p>
      <p>{employee.designation}</p>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </div>
  );
};

export default EmployeeCard;
