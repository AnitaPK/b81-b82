import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {increament, decreament, reset, increamentByAmount} from '../redux/counterSlice'


const Button = () => {
    const [amount, setAmount] = useState()
    const dispatch = useDispatch()

    const handleIncreamentAmount = () =>{
        dispatch(increamentByAmount(Number(amount)))
        setAmount('')
    }

  return (
    <div>
        <button onClick={()=>dispatch(increament())}>Increament</button>
        <button onClick={()=>dispatch(decreament())}>Decreament</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <br />
        <br />
        <input 
        type="number"
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=>setAmount(e.target.value)}
        />
        <br />
        <br />

        <button onClick={handleIncreamentAmount}>Increament By Amount</button>
    </div>
  )
}

export default Button