import './css/userPage.css';
import UserMenu from './partials/UserMenu';
import React, { useState } from 'react';
import Profile from './partials/Profile';
import ListInvoicesDues from './partials/ListInvoicesDues';
import ListMessages from './partials/ListMessages';
import SendMessage from './partials/SendMessage';
import PayInvoicesDues from './partials/PayInvoicesDues';

let user = {
  name: "Cansu",
  surname: "Yanık",
  block: "A",
  apartmentNo:"59",
  tcNo: "1111111111111",
  email: "cansuyanik96@gmail.com",
  password: "xxxxxxxx",
  phone: "05303003656",
  numberPlate: "06-CIY-680"
}

function UserPage() {
  
  const [page, setPage] = useState("myProfile");

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
                    <li><a class="dropdown-item" href="#!">{user.name} {user.surname}</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#!">Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>

    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                {<UserMenu parentCallback = {callbackFunction}/>}
                <div class="sb-sidenav-footer">
                    <div class="small">Logged in as:</div>
                    {user.name} {user.surname}
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
            {(page === "myProfile")?<Profile userObject={user}/>:
            (page === "listInvoicesDues")?<ListInvoicesDues userObject={user}/>:
            (page === "listMessages")?<ListMessages userObject={user}/>:
            (page === "payInvoicesDues")?<PayInvoicesDues userObject={user}/>:
            (page === "sendMessage")?<SendMessage/>:null}
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

export default UserPage;
