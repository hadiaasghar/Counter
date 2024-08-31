import React, { useState } from 'react'

const ShortCircuits = () => {
  const [test,setTest]=useState("a");
  // const first =test &&"hello from the and operator";
  // const second = test ||"hello from the or operator";

  return (
    <>
    {/* <h1 className='text-center display-5'>
      {test &&'hello from the And operator'}

      
    </h1>
    <h1 className='text-center display-5'>
      {test || "hello from the Or operator"}

      
    </h1> */}

    <h1 className='text-center display-5'>
      {test ? ( <h1> this is true </h1>):(<h1>this is false</h1>)}

      
    </h1>
    </>
  )
}

export default ShortCircuits
