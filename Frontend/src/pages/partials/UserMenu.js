import '../css/userPage.css';
import React, { useState } from 'react';

function UserMenu(props) {
  
  function handleClick(e, param) {
    e.preventDefault();
    props.parentCallback(param);
  }

    return (
        
        <ul class="menu menuDiv">
            
            <a href="" value="list" onClick={(e) => handleClick(e,"myProfile")}><li class="menu-item item">My Profile</li> </a>

            <a href="" onClick={(e) => handleClick(e,"listInvoicesDues")}><li class="menu-item item">List Invoices / Dues</li> </a>

            <a href="" onClick={(e) => handleClick(e,"listMessages")}><li class="menu-item item">List Messages</li> </a>
        
            <li class="divider"></li>
            <li class="divider"></li>
            <li class="divider"></li>

            <a href="" onClick={(e) => handleClick(e,"payInvoicesDues")}><li class="menu-item item">Pay Invoices / Dues</li> </a>
     
            <a href="" onClick={(e) => handleClick(e,"sendMessage")}><li class="menu-item item">Send Message</li></a>
            
      </ul>   
      
    );
  }
  
  export default UserMenu;
  