
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const[amount,setAmount]=useState(0);//1000
  const [year,setYear]=useState(0);//5
  const[rate,setRate]=useState(0);//3
  const[intrest,setIntrest]=useState(0)
  console.log(amount,year,rate);

  const calculate=(e)=>{
    const output =amount*year*rate/100;
    console.log(output)
    setIntrest(output)
  }

  const reset=(e)=>{
    setAmount(0);
    setRate(0);
    setYear(0)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="header">
    <h1>Simple Intrest Calculator</h1>
    <p>Calculate your simple intrest with us🤍</p>
    </div>
<div className="total">
  <h3>&#8377;{intrest}</h3>
  <p>Your total intrest</p>
</div>
    <div className="form">
      <form action="">
        <div className="input">
<TextField id="outlined-basic"  onChange={(e)=>setAmount(e.target.value)} value={amount||""}  label="Amount" variant="standard" /> <br />

<TextField id="filled-basic" onChange={(e)=>setYear(e.target.value)} value={year||""} label="Year" variant="standard" /><br />
<TextField id="standard-basic" onChange={(e)=>setRate(e.target.value)} value={rate||""} label="Rate" variant="standard" />  <br />
        </div>
        <div className="button">
          <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
<Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
        </div>
      </form>
    </div>
        </div>
      </div>
      
     
  );
}

export default App;
