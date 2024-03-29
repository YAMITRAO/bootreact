import React, { useContext, useRef } from 'react'
import style from "./LoginPage.module.css"
import DataContext from '../context/DataContext';

const LoginPage = () => {
    const inputEmailRef = useRef();
    const inputPassRef = useRef();
    const ctx = useContext(DataContext);
    

    const submitHandler = (e) => {
            e.preventDefault();
            const entredEmail = inputEmailRef.current.value;
            const entredPassword = inputPassRef.current.value;
            let url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTtOX2Di6R4YAhCh2Lnm63plJ7z5rYEr8"
            fetch( url , {
                method:"POST",
                body: JSON.stringify({
                    email: entredEmail,
                    password: entredPassword,
                    returnSecureToken: true,
                }),
                headers:{
                  'Content-type':"application/json"
                }
              }).then( res => {
                if(res.ok){
                    return res.json().then( data => {
                      ctx.authHandler({
                        type:"LOG_IN",
                        data:data
                      });  
                    });
                }
                else{
                    let errorMsg = "Auth Failed"
                    alert(errorMsg);
                }
              })
    }
  return (
    <div className={style.container}>
        <form onSubmit={submitHandler}>
            <div className={style.title}>
                <h1>Login</h1>
            </div>
        <div className={style.inputContainer}>
            <label>Email</label>
            <input type="email" placeholder='Enter Email' ref={inputEmailRef}/>
            <label>Password</label>
            <input type="password" placeholder='Enter login password' ref={inputPassRef}/>
        </div>
        <div className={style.button}>
            <button type="submit"> Login</button>
        </div>
        </form>
    </div>
  )
}

export default LoginPage