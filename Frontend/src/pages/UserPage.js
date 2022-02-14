import './css/userPage.css';
import UserMenu from './partials/UserMenu';
import React, { useState, useEffect } from 'react';
import Profile from './partials/Profile';
import ListInvoicesDues from './partials/ListInvoicesDues';
import ListMessages from './partials/ListMessages';
import SendMessage from './partials/SendMessage';
import PayInvoicesDues from './partials/PayInvoicesDues';
import axios from 'axios';

/*
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
*/

function UserPage(props) {

    let loginEmail = props.email;
    const [page, setPage] = useState("myProfile");
    const [user, setUser] = useState("");

    const [apartmentList, setApartmentList] = useState("");
    const [residentList, setResidentList] = useState("");
    const [messageList, setMessageList] = useState("");
    const [invoiceDuesList, setinvoiceDuesList] = useState("");
    const [creditCards, setCreditCards] = useState("");

  useEffect(() => {

    getApartments();
    getResidents();
    getMessages();
    getInvoiceDues();
    getCreditCards();

}, []);

useEffect(() => {

    setUserProfile();

});

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
    
    setUserProfile();
}


const getCreditCards = () => {
    axios.get('https://localhost:7039/CreditCards').then(function (response) {
        // handle success
        console.log(response);
        setCreditCards(response.data);
        
    }).catch(function (error) {
        // handle error
        console.log(error);
    }).then(function () {
        
    });
}

function setUserProfile(){
    console.log(loginEmail);

    for(let i=0; i<residentList.length; i++){
        if(residentList[i].email === loginEmail){
            setUser(residentList[i]);
            return;
        }
    }
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
            (page === "listInvoicesDues")?<ListInvoicesDues invoiceDuesList={invoiceDuesList} apartmentList={apartmentList} userObject={user}/>:
            (page === "listMessages")?<ListMessages messageList={messageList} residentList= {residentList} userObject={user}/>:
            (page === "payInvoicesDues")?<PayInvoicesDues apartmentList={apartmentList} invoiceDuesList={invoiceDuesList} userObject={user} creditCardList={creditCards} />:
            (page === "sendMessage")?<SendMessage userObject={user}/>:null}
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
