


import React, { useReducer } from 'react'
import DataContext from './DataContext'

let url = "https://crudcrud.com/api/b0dfbac45560466e9be0277c0f885cfa";
let apiDataBaseName = " ";
let updateID = "";
let apiURL = "";


const updateApi = (data) => {
  fetch('https://crudcrud.com/api/3385d64335734a9f97eeb8234a1fc95e/timpin/660631a01492af03e8f10b71', {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        ...data
      })
    })
    .then(response => console.log(response))
  
}
const deleteApi = (data) => {
  fetch('https://crudcrud.com/api/3385d64335734a9f97eeb8234a1fc95e/timpin/660631a01492af03e8f10b71', {
      // headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'DELETE',
      // body: JSON.stringify({
      //   ...data
      // })
    })
    .then(response => console.log(response))
  
}

const reducer = (state, action) => {
  let apiDataVar = "";
  //Page Visibility "START"
  if(action.type === "LOG_IN"){
    console.log(action.cartApiValue);
    state.authToken = action.data
    state.isAuth = true;
    state.cartItemsList = action.cartApiValue;
    return {
      ...state,
    }
  }
  
  if(action.type === "CART"){
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
    let postData = {
      user:"testok",
      data: [...state.cartItemsList]
    }

    let puturl = `${apiURL}/${updateID}`
    console.log("put url for put request")
    console.log(puturl)
    fetch(puturl, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        user:apiDataBaseName,
        data: [...state.cartItemsList],
      })
    })
    .then(response => console.log(response))
   
    console.log("Data of state");
    console.log(state.cartItemsList);
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

    let puturl = `${apiURL}/${updateID}`
    console.log("put url for put request")
    console.log(puturl)
    fetch(puturl, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        user:apiDataBaseName,
        data: [...state.cartItemsList],
      })
    })
    .then(response => console.log(response))
    return {...state}

  }
  //CART UPDATE :- "END"
  

  //ALL ORDER: START
  if(action.type === "ALL_ORDERED"){
    state.cartItemsList = [];
    //to disppear the card
    let updatedData = {...state.pageVisibility, isCartVisible:!state.pageVisibility.isCartVisible, }
    state.pageVisibility = updatedData;

    let puturl = `${apiURL}/${updateID}`
    console.log("put url for put request")
    console.log(puturl)
    fetch(puturl, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        user:apiDataBaseName,
        data: [...state.cartItemsList],
      })
    })
    .then(response => console.log(response))
    
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
    
    const changeAuth = (data) => {
      let myData = data;
      console.log(data.data.email);
      let userEmail = data.data.email;
      apiDataBaseName = userEmail.substring(0, userEmail.search('@'));
      console.log(apiDataBaseName);
      console.log(url);
       apiURL = `${url}/${apiDataBaseName}`
      // let apiURL =  `${url}/holi`
      fetch( apiURL).then(
        (res) => { return res.json().then( data => {
          console.log(data);
          if(data.length >= 1){
            console.log("Api data is present")
            console.log(data[0]._id);
            updateID = data[0]._id;
            dispatchFun({
              ...myData,
              cartApiValue:data[0].data
            });
          }
          else{
            console.log("No api data is present");
            fetch( apiURL , {
              headers: { "Content-Type": "application/json; charset=utf-8" },
              method: 'POST',
              body: JSON.stringify({
                user:apiDataBaseName,
                data: []
              }
              )
            }).then( res => {
              if(res.ok){
                console.log("Created the userData base with name", apiDataBaseName);
                return res.json().then( apidata => {
                  console.log(apidata);
                  updateID = apidata._id;
               dispatchFun({
              ...myData,
              cartApiValue:apidata.data
            });
                })
              }
              else{
                alert("Error in update");
              }
            })
          }
        })}
      )  
      
      
    }


     const defaultState = {
        productsList: productsList,
        isAuth: false,
        authHandler: changeAuth,
        authToken: {},
        pageVisibility : pageVisibilityData,
        pageVisibilityHandler: visibilityHandler,
        cartItemsList : [],
        cartListUpdate : cartUpdateHandler,
        userDetails : {},
     }

     
     const [state, dispatchFun] = useReducer( reducer, defaultState)

  return (
    <DataContext.Provider value= { state }>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider