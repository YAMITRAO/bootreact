
import './App.css';
import NavBarCompo from './componenets/NavBar/NavBar';

import {  useState } from 'react';
import Project from "./componenets/Project"



function App() {

  return (
    <>
   <NavBarCompo />
   <Project  />
   </>
  );
}

export default App;
