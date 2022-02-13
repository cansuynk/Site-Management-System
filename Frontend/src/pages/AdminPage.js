import './css/adminPage.css';
import AdminMenu from './partials/AdminMenu';
import ListApartments from './partials/ListApartments';
import React, { useState, useEffect } from 'react';
import ListInvoicesDues from './partials/ListInvoicesDues';
import ListMessages from './partials/ListMessages';
import AddUpdateApartment from './partials/AddUpdateApartment';
import ListResidents from './partials/ListResidents';
import AddUpdateResident from './partials/AddUpdateResident';
import AddInvoiceDues from './partials/AddInvoiceDues';
import axios from 'axios';



function AdminPage() {
  
  const [page, setPage] = useState("listApartments");

  const [apartmentList, setApartmentList] = useState("");
  const [residentList, setResidentList] = useState("");
  const [messageList, setMessageList] = useState("");
  const [invoiceDuesList, setinvoiceDuesList] = useState("");


    useEffect(() => {

        getApartments();
        getResidents();
        getMessages();
        getInvoiceDues();

    }, []);

    const getApartments = () => {
        axios.get('https://localhost:7214/SiteManagement/GetApartments').then(function (response) {
            // handle success
            //console.log(response);
            setApartmentList(response.data);
            
        }).catch(function (error) {
            // handle error
            console.log(error);
        }).then(function () {
            
        });
    }

    const getResidents = () => {
        axios.get('https://localhost:7214/SiteManagement/GetResidents').then(function (response) {
            // handle success
            //console.log(response);
            setResidentList(response.data);
            
        }).catch(function (error) {
            // handle error
            console.log(error);
        }).then(function () {
            
        });
    }

    const getMessages = () => {
        axios.get('https://localhost:7214/SiteManagement/GetMessages').then(function (response) {
            // handle success
            //console.log(response);
            setMessageList(response.data);
            
        }).catch(function (error) {
            // handle error
            console.log(error);
        }).then(function () {
            
        });
    }

    const getInvoiceDues = () => {
        axios.get('https://localhost:7214/SiteManagement/GetInvoicesDues').then(function (response) {
            // handle success
            //console.log(response);
            setinvoiceDuesList(response.data);
            
        }).catch(function (error) {
            // handle error
            console.log(error);
        }).then(function () {
            
        });
    }

  let callbackFunction = (childData) => {
    setPage(childData);
  };
  

  return (
    <div>
    
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand ps-3" href="index.html">SiteMS</a>
			<div class="input-group"></div>
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#!">Admin</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#!">Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>

    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              {<AdminMenu parentCallback = {callbackFunction}/>}
                <div class="sb-sidenav-footer">
                    <div class="small">Logged in as:</div>
                    Admin
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
            {(page === "listApartments")?<ListApartments apartmentList={apartmentList}/>:
            (page === "listInvoicesDues")?<ListInvoicesDues invoiceDuesList={invoiceDuesList} apartmentList={apartmentList}/>:
            (page === "listMessages")?<ListMessages messageList={messageList} residentList= {residentList}/>:
            (page === "listResidents")?<ListResidents residentList= {residentList}/>:
            (page === "addUpdateApartment")?<AddUpdateApartment apartmentList={apartmentList}/>:
            (page === "addUpdateResident")?<AddUpdateResident residentList= {residentList}/>:
            (page === "addInvoiceDues")?<AddInvoiceDues/>:null}
            </main>
            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid px-4">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; SiteMS 2022</div>
                    </div>
                </div>
            </footer>
        </div>
    </div>



    </div>
  );
}

export default AdminPage;
