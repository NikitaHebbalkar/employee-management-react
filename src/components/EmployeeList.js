// this component will render the list of employees. It will loop through all employees and display them using the EmployeeCard component.
import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EmployeeList;
