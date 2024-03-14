


import React, { useReducer } from 'react'
import DataContext from './DataContext'

const reducer = (state, action) => {

  //Page Visibility "START"
  let pageData ={ isHomePageVisible: false,
    isProductVisible: false,
    isAboutUsVisible: false,
    isContactUsVisible: false,
    isCartVisible: false,
    }
  if(action.type === "HOME"){
    let updatedData = {...pageData, isHomePageVisible:true}
    state.pageVisibility = updatedData;
    console.log(state);
    return {...state}
  }
  else if(action.type ==="PRODUCTS"){
    let updatedData = {...pageData, isProductVisible:true}
    state.pageVisibility = updatedData;
    console.log(state);
    return {...state}
  }
  else if(action.type ==="CONTACTUS"){
    let updatedData = {...pageData, isContactUsVisible:true}
    state.pageVisibility = updatedData;
    console.log(state);
    return {...state}
  }
  else if(action.type === "ABOUTUS"){
    let updatedData = {...pageData, isAboutUsVisible:true}
    state.pageVisibility = updatedData;
    console.log(state);
    return {...state}
  }
  else if(action.type === "CART"){
    let updatedData = {...state.pageVisibility, isCartVisible:!state.pageVisibility.isCartVisible}
    state.pageVisibility = updatedData;
    console.log(state);
    return {...state}
  }
  //Page Visibility "END"

  //CART UPDATE :- "START"
  console.log(action);
  if(action.type === "ADD_TO_CART"){
    if(state.cartItemsList.length === 0){
      state.cartItemsList.push(action.data);
    }
    else{
      let updateFlag = false;
      state.cartItemsList.forEach( (val,index) => {
        if(val.title === action.data.title){
          updateFlag = true;
          val.quantity += 1;
        }
      })

      if(!updateFlag){
        state.cartItemsList.push(action.data);
      }
    }
   
    return {
      ...state
    }
  }
  else if(action.type === "REMOVE_FROM_CART"){

    state.cartItemsList.forEach( (val,index) => {
      if(val.title === action.data.title){
        console.log("Remove match found");
        state.cartItemsList.splice(index,1);
      }
    })
    return {...state}

  }
  //CART UPDATE :- "END"
  

  //ALL ORDER: START
  if(action.type === "ALL_ORDERED"){
    state.cartItemsList = [];
    //to disppear the card
    let updatedData = {...state.pageVisibility, isCartVisible:!state.pageVisibility.isCartVisible, }
    state.pageVisibility = updatedData;
    return{
      ...state,
    }
  }

  //ALL ORDER : END

  
  return state;
}

const DataProvider = (props) => {
  const visibilityHandler = (data) => {
    dispatchFun({type:data});
  }

  const cartUpdateHandler = (data) => {
    dispatchFun({
      type:data.type,
      data:data,
    })
  }

    let productsList = [

        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]
    
    let pageVisibilityData ={ isHomePageVisible: false,
    isProductVisible: true,
    isAboutUsVisible: false,
    isContactUsVisible: false,
    isCartVisible: false,
    }


     const defaultState = {
        productsList: productsList,

        pageVisibility : pageVisibilityData,
        pageVisibilityHandler: visibilityHandler,

        cartItemsList : [],
        cartListUpdate : cartUpdateHandler,

     }

     const [state, dispatchFun] = useReducer( reducer, defaultState)

  return (
    <DataContext.Provider value= { state }>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider