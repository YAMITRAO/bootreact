import React from 'react'

const Test = () => {
    const myClick = () => {
        console.log("clicked");
       let response =  fetch("https://crudcrud.com/api/b9998a6e0b7f4280b589a3ecb5d2ae70/users", {
        headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    name: 'timpo',
    done: false
  })
       })
       response.then( res => {
        console.log(res);
        res.json().then( data => console.log(data[0])); 
       })
    }

    
  return (
    <div>
        <button onClick={ myClick }>Click</button>
    </div>
  )
}

export default Test