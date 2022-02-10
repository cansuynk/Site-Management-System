import './css/adminPage.css';
import logo from '../images/SiteMS.png';
import AdminMenu from './partials/AdminMenu';
import ListApartments from './partials/ListApartments';
import React, { useState } from 'react';
import ListInvoicesDues from './partials/ListInvoicesDues';



function AdminPage() {
  
  const [page, setPage] = useState("listApartments");

  let callbackFunction = (childData) => {
    setPage(childData);
  };
  

  return (
    <div className="container-fluid" id='containerId'>
    
    <nav class="navbar navbar-inverse navbar-fixed-top header">
      <ul class="nav navbar-nav navbar-left">
      <li><a href="#"><img className="d-inline-block align-top logo" src={logo} alt="logo"/></a></li>
      </ul>
      <ul></ul>
      <ul class="nav navbar-nav navbar-left">
        <li><a href="#">SiteMS</a></li>
      </ul>
    
    <div class="container">   
      
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Sign Up</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"> Admin</a></li>
      </ul>
    </div>
  </nav>

    <div className="col-lg-2 center" id="col1"> 
    {<AdminMenu parentCallback = {callbackFunction}/>}
    </div>

    <div className="col-lg-10" id="col2"> 
    {(page === "listApartments")?<ListApartments/>:
    (page === "listInvoicesDues")?<ListInvoicesDues/>:
    (page === "listMessages")?"listMessages":
    (page === "addUpdateApartment")?"addUpdateApartment":
    (page === "addUpdateResident")?"addUpdateResident":
    (page === "addInvoiceDueInformation")?"addInvoiceDueInformation":null}
    </div>


    </div>
  );
}

export default AdminPage;
