// Here is the code for main appjs file
import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDesignation, setFilterDesignation] = useState("");

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { ...employee, id: Date.now() },  // Unique ID for each employee
    ]);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees((prevEmployees) => prevEmployees.filter((e) => e.id !== id));
    }
  };

  const handleSearchChange = (query) => setSearchQuery(query);
  const handleFilterChange = (designation) => setFilterDesignation(designation);

  const filteredEmployees = employees
    .filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((employee) =>
      filterDesignation ? employee.designation === filterDesignation : true
    );

  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeForm onSave={addEmployee} />
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <Filter onFilterChange={handleFilterChange} />
      <EmployeeList employees={filteredEmployees} onDelete={deleteEmployee} />
    </div>
  );
};

export default App;
