import React from 'react'

type AdditionProps = {
        number1:number;
        number2:number;
    }

function Addtion({number1,number2}:AdditionProps) {
    
  return (
    <>
      <h1>Addtion of two numbers</h1>
      <h2>Number:{number1}</h2>
      <h2>Number:{number2}</h2>
      <h2>Results:{number1 + number2}</h2>
    </>
  )
}

export default Addtion