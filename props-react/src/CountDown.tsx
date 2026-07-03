import React, { useEffect, useState } from 'react'

function CountDown() {
    let [count,setCount] = useState(60);
    let [submitted,setSubmitted] = useState(false);
    useEffect(()=>{
        if (count <= 0) {
      setSubmitted(true); // Time is up → exam submitted
      return; // Stop timer
    }

        let timerid = setInterval(()=>{
            setCount(prev => prev - 1);
        },1000);
    return(()=>{
        clearInterval(timerid);
    });
    },[count])
  return (
    <>
      {
        !submitted ? (
        <>
          <h2>Exam Timer</h2>
          <h3>
            Time Left: {count}
          </h3>
        </>
        ) : (
            <>
            <h1>time is up</h1>
            </>
        )
      }

    </>
  )
}

export default CountDown