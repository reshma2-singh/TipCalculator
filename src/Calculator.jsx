import React from "react"
import List from './List'
import Tip from './Tip'
import { useState } from "react"

function Calculator() {
  const [amount, setAmount] = useState(0);
  const [val, setVal] = useState(0);
  const [name, setName] = useState("")
  const [store, setStore] = useState([]);
  const handleClick = () => {
    const per = val * amount;
    const all={name:name,percentage:per};
    setStore((old) => {
      return [...old, all]
    })
  }
  return (
    <div  className='main'>

      <h2 className='custom'>Enter your bill amount</h2>
      <div className='first'>
      <input className='input' type="number" onChange={(e) => setAmount(e.target.value)}
        value={amount} /></div>
      <div className='service'>
        <p ><b>How was the service</b></p>
        <select className='input1' onChange={(e) => setVal(e.target.value)} value={val} >
          <option disabled value="0"><b>Choose</b></option>
          <option value="0.2">Excellent-20%</option>
          <option value="0.1">good-10%</option>
          <option value="0.05">bad-5%</option>
        </select>

        <input className='input1' type="text" placeholder='Customer Name' 
        onChange={(e) => setName(e.target.value)} value={name} />
        <button className='btn' onClick={handleClick} >Add customer</button>
      </div>
      <div>
        
        
      <h2 className='custom'>Customer List</h2>
      
       
      <div className='list'>
        <ul>
          {store.map((item, index) => <li key={index}>{item.name} is offering {item.percentage}</li>)}
          
        </ul>
        </div>
      </div>
      <div>
        <Tip data={store} />
      </div>

    </div>
  )
}

export default Calculator;