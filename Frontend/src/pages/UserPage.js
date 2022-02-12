import './css/userPage.css';
import logo from '../images/SiteMS.png';
import UserMenu from './partials/UserMenu';
import React, { useState } from 'react';
import Profile from './partials/Profile';



function UserPage() {
  
    const [page, setPage] = useState("myProfile");

    let callbackFunction = (childData) => {
      setPage(childData);
    };
    
  
    return (
      <div className="container-fluid" id='containerId'>
      
      <nav class="navbar-inverse navbar-fixed-top header">
      <div className='container-left'>
        <ul class="nav navbar-nav navbar-left">
        <li><a href="#"><img className="d-inline-block align-top logo" src={logo} alt="logo"/></a></li>
        </ul>
        
        <ul class="nav navbar-nav navbar-left mleft10">
          <li><a href="#">SiteMS</a></li>
        </ul>
      </div>
      
      <div class="container-right">   
        
        <ul class="nav navbar-nav navbar-right">
          <li class="no-padd"><a href="#"><span class="glyphicon glyphicon-log-in"></span> Sign Up</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"> Admin</a></li>
        </ul>
      </div>
    </nav>
  
      <div className="col-lg-2 position-fixed center" id="col1"> 
      {<UserMenu parentCallback = {callbackFunction}/>}
      </div>
  
      <div className="col-lg-10" id="col2"> 
      {(page === "myProfile")?<Profile/>:
      (page === "listInvoicesDues")?"ListInvoicesDues":
      (page === "listMessages")?"ListMessages":
      (page === "payInvoicesDues")?"payInvoicesDues":
      (page === "sendMessage")?"sendMessage":null}
      </div>
  
  
      </div>
    );
  }

export default UserPage;
