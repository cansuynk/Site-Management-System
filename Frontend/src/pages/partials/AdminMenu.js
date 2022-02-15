import '../css/adminPage.css';
import React, { useState } from 'react';

function AdminMenu(props) {

    //Left Side Admin Menu Items
  
    function handleClick(e, param) {
        e.preventDefault();
        props.parentCallback(param);
    }

    return (
      
      
      <div class="sb-sidenav-menu">
      <div class="nav">
          <div class="sb-sidenav-menu-heading">Management</div>
          <a class="nav-link" href="" onClick={(e) => handleClick(e,"listApartments")}>
              <div class="sb-nav-link-icon"></div>
              Apartments
          </a>
          <a class="nav-link" href="" onClick={(e) => handleClick(e,"listResidents")}>
              <div class="sb-nav-link-icon"></div>
              Residents
          </a>
          <a class="nav-link" href="" onClick={(e) => handleClick(e,"listInvoicesDues")}>
              <div class="sb-nav-link-icon"></div>
              Invoives / Dues
          </a>
          <a class="nav-link" href="" onClick={(e) => handleClick(e,"listMessages")}>
              <div class="sb-nav-link-icon"></div>
              Messages
          </a>
          <div class="sb-sidenav-menu-heading">Add / Update</div>
          <a class="nav-link" href="" onClick={(e) => handleClick(e,"addUpdateApartment")}>
              <div class="sb-nav-link-icon"></div>
              Add / Update Apartment
          </a>
          <a class="nav-link" href=""  onClick={(e) => handleClick(e,"addUpdateResident")}>
              <div class="sb-nav-link-icon"></div>
              Add / Update Residents
          </a>
          <a class="nav-link" href="" onClick={(e) => handleClick(e,"addInvoiceDues")}>
              <div class="sb-nav-link-icon"></div>
              Add Invoives / Dues
          </a>

      </div>
  </div>
      
    );
  }
  
  export default AdminMenu;
  