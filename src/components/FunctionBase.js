import { useEffect, useState } from "react"
import React from 'react'
import useTitleCount from "./useTitleCount";

export default function FunctionBase() {
const [count, setCount] = useState(0);
const [calculation, setCalculation] = useState(0);

useEffect(() => {
  setCalculation(count*2)
} , [count])

//===========Custom Hook=================
useTitleCount(count);   //will effect title of project

return (
    <>
    <p>Count is: {count}</p>
    <button className="btn-primary" onClick={() => {setCount(count+1)}}>+</button>
    <p>Calculation is: {calculation}</p>
    </>
  )
}
