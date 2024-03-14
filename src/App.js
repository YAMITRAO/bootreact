
import './App.css';
import NavBarCompo from './componenets/NavBar/NavBar';

import {  useState } from 'react';
import Project from "./componenets/Project"


const reducer = (state, action) => {
  // console.log(action);
return state
}
function App() {
  let defaultState = {
    isHomePageVisible: false,
    isProductVisible: false,
    isAboutUsVisible: false,
    isContactUsVisible: false,
    isCartVisible: false,
  }

  const [dataVisisble, setDataVisisble ]  = useState(defaultState)

  const displayHandler = (data) => {
    // console.log(data);
    if(data === "home"){
      setDataVisisble( { ...defaultState, isHomePageVisible:true})
    }
    else if(data === "products"){
      setDataVisisble( { ...defaultState, isProductVisible:true})
    }
    else if(data === "contactus"){
      setDataVisisble( { ...defaultState, isContactUsVisible:true})
    }
    else if(data === "aboutus"){
      setDataVisisble( { ...defaultState, isAboutUsVisible:true})
    }
    else if(data === "cart"){
      setDataVisisble( (prevState) => {
        return {
          ...prevState,
          isCartVisible:!(prevState.isCartVisible),
        }
      })
    }

  }

  return (
    <>
   <NavBarCompo onClickTab= { displayHandler}/>
   <Project data = {dataVisisble} />
   </>
  );
}

export default App;
