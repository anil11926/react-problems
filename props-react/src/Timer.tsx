import React, { useEffect, useState } from 'react'

function Timer() {
    let [count,setcount]= useState(0);
    useEffect(()=>{
        let timeid = setInterval(()=>{
            console.log("timer started");
            setcount(prve => prve + 1)
        },1000);
        return (()=>{
            clearInterval(timeid);
        });
    },[])
  return (
    <>
      <h2>Timer {count}</h2>
    </>
  )
}

export default Timer