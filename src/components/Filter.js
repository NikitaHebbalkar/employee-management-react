// this component allows users to filter employees by designation (e.g., Software Developer, Manager, etc.).
import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="">All Designations</option>
      <option value="Software Developer">Software Developer</option>
      <option value="Senior Software Developer">Senior Software Developer</option>
      <option value="Quality Assurance">Quality Assurance</option>
      <option value="Technical Lead">Technical Lead</option>
      <option value="Manager">Manager</option>
    </select>
  );
};

export default Filter;
