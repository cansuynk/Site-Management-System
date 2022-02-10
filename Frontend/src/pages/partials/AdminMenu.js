import '../css/adminPage.css';
import React, { useState } from 'react';

function AdminMenu(props) {
  
  function handleClick(e, param) {
    e.preventDefault();
    props.parentCallback(param);
  }

    return (
        
        <ul class="menu menuDiv">
            
            <a href="" value="list" onClick={(e) => handleClick(e,"listApartments")}><li class="menu-item item">List Apartments</li> </a>
            
            <a href="" onClick={(e) => handleClick(e,"listInvoicesDues")}><li class="menu-item item">List Invoices/Dues</li> </a>
            
            <a href="" onClick={(e) => handleClick(e,"listMessages")}><li class="menu-item item">List Messages</li> </a>
            
            <li class="divider"></li>
            <li class="divider"></li>
            <li class="divider"></li>

            <a href="" onClick={(e) => handleClick(e,"addUpdateApartment")}><li class="menu-item item">Add/Update Apartment</li> </a>
     
            <a href="" onClick={(e) => handleClick(e,"addUpdateResident")}><li class="menu-item item">Add/Update Resident</li></a>

            <a href="" onClick={(e) => handleClick(e,"addInvoiceDueInformation")}><li class="menu-item item">Add Invoice/Due Information</li></a>
            
      </ul>   
      
    );
  }
  
  export default AdminMenu;
  