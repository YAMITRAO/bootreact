import React from 'react'

const Test = () => {
    const myClick = () => {
       let string = "testereeok@gmail.com"
      let y = string.substring(0,string.search("@"));
      console.log(y);
    }

    
  return (
    <div>
        <button onClick={ myClick }>Click</button>
    </div>
  )
}

export default Test