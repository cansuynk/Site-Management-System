import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

let login = false; //make true to open login page
let admin = true; //make login = false, admin = true (to open adminPage)
//make login = false, admin = false (to open userPage)

ReactDOM.render(
  <React.StrictMode>
    {login? <Login/>:admin? <AdminPage /> : <UserPage email={"cansuyanik@test.com"}/>}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
