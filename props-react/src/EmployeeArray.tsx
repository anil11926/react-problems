import React from 'react'

type Employee = {
    id:number;
    name:string;
    salary:number;
    city:string;
}

type Employeecart = {
    empl:Employee;
}

function EmployeeArray({empl}:Employeecart) {
  return (
    <>
        <h1>=======================</h1>
        <h2>ID {empl.id}</h2>
        <h2>Name {empl.name}</h2>
        <h2>Salary {empl.salary}</h2>
        <h2>City {empl.city}</h2>
    </>
  )
}

export default EmployeeArray