import React from "react";
import './Logo.css';
import {BrowserRouter} from 'react-router-dom'
import  ModalSwitch from './Modal'

function App() {
  return (
    <BrowserRouter>
      <ModalSwitch/>
    </BrowserRouter>
  );
}

export default App;
