import React from 'react'
 type Employee = {
    Name:string;
    id:number;
    salary:number;
    city:string;
 }

 type EmployeeCardProps = {
    emp:Employee;
 }

function EmployeeCard({emp}:EmployeeCardProps) {
  return (
    <>
      <h1>Employee cart</h1>
      <h2>Id:{emp.id}</h2>
      <h2>Name:{emp.Name}</h2>
      <h2>Salary:{emp.salary}</h2>
      <h2>City:{emp.city}</h2>
    </>
  )
}export default EmployeeCard