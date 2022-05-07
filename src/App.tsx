import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';

function App() {
  const [zip, setZip] = useState('')
  const [error, setError] = useState('')

  function isValidUSZip(sZip:string) {
    return /^\d{5}(-\d{4})?$/.test(sZip);
 }
  function zipChange(zip :string){
    setZip(zip)
    if(isValidUSZip(zip)){
      
      setError('')
    }
    else{
      setError('not valid zip ')
    }
  }
  
  return (<div className='textIn'>
   <TextInput defaultValue={zip} label="zipcode" className=' ' onChange={zipChange}   ></TextInput>

  
   {zip&&(error ? <p className="error">{error}</p>:<p className="valid"> valid zip code</p>)}
   </div>
  );
}

export default App;
