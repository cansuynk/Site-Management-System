import '../css/userPage.css';
import React, { useState } from 'react';

function UserMenu(props) {
  
  function handleClick(e, param) {
    e.preventDefault();
    props.parentCallback(param);
  }

    return (
        <div class="sb-sidenav-menu">
        <div class="nav">
            <div class="sb-sidenav-menu-heading">List</div>
            <a class="nav-link" href="" onClick={(e) => handleClick(e,"myProfile")}>
                <div class="sb-nav-link-icon"></div>
                Profile
            </a>
            <a class="nav-link" href="" onClick={(e) => handleClick(e,"listInvoicesDues")}>
                <div class="sb-nav-link-icon"></div>
                Invoices / Dues
            </a>
            <a class="nav-link" href="" onClick={(e) => handleClick(e,"listMessages")}>
                <div class="sb-nav-link-icon"></div>
                Messages
            </a>
            <div class="sb-sidenav-menu-heading">Pay / Send Message</div>
            <a class="nav-link" href="" onClick={(e) => handleClick(e,"payInvoicesDues")}>
                <div class="sb-nav-link-icon"></div>
                Pay Invoices / Dues
            </a>
            <a class="nav-link" href="" onClick={(e) => handleClick(e,"sendMessage")}>
                <div class="sb-nav-link-icon"></div>
                Send Message
            </a>
        </div>
    </div>      
    );
  }
  
  export default UserMenu;
  