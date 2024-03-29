import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap/dist/react-bootstrap';
// import "../node_modules/react-bootstrap/dist/react-bootstrap"
import DataProvider from './componenets/context/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <DataProvider> <App /></DataProvider>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
