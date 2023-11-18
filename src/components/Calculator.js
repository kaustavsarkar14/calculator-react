import React, { useState } from 'react'
import "./calculator.css"
const Calculator = () => {
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [error,setError] = useState(null)
    const [result,setResult] = useState(null)

    function calculate(operation){
        if(num1==null || num1=='') {
            setError("Num1 Cannot be Empty")
            return
        }
        if(num2==null || num2=='') {
            setError("Num2 Cannot be Empty")
            return
        }
        setError(null)
        let expression = parseInt(num1)+operation+parseInt(num2)
        setResult(eval(expression))
    }

  return (
    <div className='calculator' >
        <h1>React Calculator</h1>
        <input type="number" onChange={e=>setNum1(e.target.value)} placeholder='Num 1' />
        <input type="number" onChange={e=>setNum2(e.target.value)} placeholder='Num 2' />
        <div className="buttons">
            <button onClick={(e)=>calculate(e.target.innerText)} >+</button>
            <button onClick={(e)=>calculate(e.target.innerText)}>-</button>
            <button onClick={(e)=>calculate(e.target.innerText)}>*</button>
            <button onClick={(e)=>calculate(e.target.innerText)}>/</button>
        </div>
        {
            error &&
            <>
            <h4 style={{color:"#FB184E"}} >Error!</h4>
            <p>{error}</p>
            </>
        }
        {
            (result!=null && !error) &&
            <>
            <h4 style={{color:"#0057FF"}} >Success!</h4>
            <p>Result - {result}</p>
            </>
        }

    </div>
  )
}

export default Calculator