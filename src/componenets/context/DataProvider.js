


import React, { useReducer } from 'react'
import DataContext from './DataContext'

const reducer = (state, action) => {
  let pageData ={ isHomePageVisible: false,
    isProductVisible: false,
    isAboutUsVisible: false,
    isContactUsVisible: false,
    isCartVisible: false,
    }
  console.log(action)
  if(action.type === "HOME"){
    console.log("Home visibility change");
    let updatedData = {...pageData, isHomePageVisible:true}
    state.pageVisibility = updatedData;
    console.log(state);
    return state
    
  }
  else if(action.type="PRODUCTS"){
    console.log("Products visibility change");
    let updatedData = {...pageData, isProductVisible:true}
    state.pageVisibility = updatedData;
    console.log(state);
    return state
  }
  return state;
}

const DataProvider = (props) => {
  const visibilityHandler = (data) => {
    dispatchFun({type:data})
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
    isProductVisible: false,
    isAboutUsVisible: false,
    isContactUsVisible: false,
    isCartVisible: false,
    }

     const defaultState = {
        productsList: productsList,
        pageVisibility : pageVisibilityData,
        pageVisibilityHandler: visibilityHandler,
     }

     const [state, dispatchFun] = useReducer( reducer, defaultState)

  return (
    <DataContext.Provider value= { state }>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider