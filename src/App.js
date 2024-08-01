import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Todomain from './Componets/TodoMain/Todomain';


function App() {

  const[openCountries,setOpenCountries]=useState(false)
  return (
    <div className='app-container'>

<Todomain/>
    </div>
  );
}

export default App;
