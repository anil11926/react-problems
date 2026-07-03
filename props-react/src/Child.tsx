import React from 'react'

type ChildProps = {
    name?:string;
    age?:number;
}

function Child({name="adithya",age=22}:ChildProps) {
  return (
    <>
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
    </>
  )
}

export default Child