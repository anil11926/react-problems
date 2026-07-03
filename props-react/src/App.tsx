import React from 'react'
import Child from './Child'
import Addtion from './Additon'
import EmployeeCard from './EmployeeCard';
import EmployeeArray from './EmployeeArray';
import Blog from './Blog';
import Timer from './Timer';
import CountDoun from './CountDown';

function App() {
  const emp = {
    Name:"adithya",
    id:123,
    salary:1234453,
    city:"hyd"    
  };

  const emplArray = [
    {name:"Adithya",id:1,salary:25000,city:"VTZ"},
    {name:"Bobby",id:2,salary:50000,city:"NRT"},
    {name:"vinay",id:3,salary:510000,city:"Amalapuram"},
    {name:"Anil",id:4,salary:5430000,city:"Hyderabad"},
    {name:"pavan",id:5,salary:6750000,city:"kakainada"}
  ]

  return (
    <>
      <Child name = "Adithya" age={23}></Child>
      <Addtion number1={2} number2={4}></Addtion>
      <EmployeeCard emp={emp}></EmployeeCard>

      <h1>All Employeee</h1>
      <ul>
      {
        emplArray.map((empl)=>(
          <li><EmployeeArray empl={empl}></EmployeeArray></li>
        ))
      }
      </ul>
      <Blog />
      <Timer />
      <CountDoun />
    </>
  )
}

export default App