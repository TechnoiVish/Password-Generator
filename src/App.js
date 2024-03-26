
import { useState } from 'react';
import './App.css';
import { Symbol,LowerChar, UpperChar,Number } from './Data/p-characters';

function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [symbol,setSymbol]=useState(false)
  let [number,setNumber]=useState(false)
  let [passlength,setPasslength]=useState(10)
  let [showpass,setShowpass]=useState('')


  let createPassword =()=>{
    let finalpass=''
    let newChar=''
if(uppercase||lowercase||symbol||number){
if(symbol) newChar+=Symbol;
if(uppercase) newChar+=UpperChar;
if(lowercase) newChar+=LowerChar;
if(number) newChar+=Number;
for(let i=0;i<passlength;i++){
  finalpass+=newChar.charAt(Math.floor(Math.random()*newChar.length))
}
setShowpass(finalpass)
}
else{
  alert("Atleast one box should be checked!...")
}
  }
  let copypass=()=>{
    navigator.clipboard.writeText(showpass)
  }
  return (
    <>
    <div className="P-Box">
      <h2>Password Generator</h2>
      <div className="inside-P">
        <input type="text" readOnly value={showpass}/><button onClick={copypass}>Copy</button>
      </div>
      <div className="P-length">
        <label>Password Length</label>
 
        <input type="number" max={15} min={6}  onChange={(event)=>setPasslength(event.target.value)}/>
      </div>
      <div className="check">
        <label>Uppercase letters</label>
        <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>
      <div className="check">
        <label>Lowercase letters</label>
        <input type="checkbox"  checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
      </div>
      <div className="check">
        <label>Symbols</label>
        <input type="checkbox"  checked={symbol} onChange={()=>setSymbol(!symbol)}/>
      </div>
      <div className="check">
        <label>Numbers</label>
        <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
      </div>
<button className='btn' onClick={createPassword}>Generate Password</button>
    </div>
    </>
  );
}

export default App;
