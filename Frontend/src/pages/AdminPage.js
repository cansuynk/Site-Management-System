import './css/adminPage.css';
import logo from '../images/SiteMS.png';
import AdminMenu from './partials/AdminMenu';
import ListApartments from './partials/ListApartments';
import React, { useState } from 'react';
import ListInvoicesDues from './partials/ListInvoicesDues';
import ListMessages from './partials/ListMessages';
import AddUpdateApartment from './partials/AddUpdateApartment';
import ListResidents from './partials/ListResidents';
import AddUpdateResident from './partials/AddUpdateResident';
import AddInvoiceDues from './partials/AddInvoiceDues';



function AdminPage() {
  
  const [page, setPage] = useState("listApartments");

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
    {<AdminMenu parentCallback = {callbackFunction}/>}
    </div>

    <div className="col-lg-10" id="col2"> 
    {(page === "listApartments")?<ListApartments/>:
    (page === "listInvoicesDues")?<ListInvoicesDues/>:
    (page === "listMessages")?<ListMessages/>:
    (page === "listResidents")?<ListResidents/>:
    (page === "addUpdateApartment")?<AddUpdateApartment/>:
    (page === "addUpdateResident")?<AddUpdateResident/>:
    (page === "addInvoiceDues")?<AddInvoiceDues/>:null}
    </div>


    </div>
  );
}

export default AdminPage;
