import './css/adminPage.css';
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
            {(page === "listApartments")?<ListApartments/>:
            (page === "listInvoicesDues")?<ListInvoicesDues/>:
            (page === "listMessages")?<ListMessages/>:
            (page === "listResidents")?<ListResidents/>:
            (page === "addUpdateApartment")?<AddUpdateApartment/>:
            (page === "addUpdateResident")?<AddUpdateResident/>:
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
