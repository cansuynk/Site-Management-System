import '../css/userPage.css';
import creditCards from '../../images/creditCards.png';
import axios from 'axios';
import React, { useState } from 'react';


//create month and year array
const months = Array.from({length: 12}, (_, i) => i + 1);
const years = Array.from({length: 10}, (_, i) => i + 2022);
const cardTypes = ["PayPal", "Visa", "Maximum", "MasterCard"];

function PayInvoicesDues(props) {

    //form info, creaditCard Information
    const [depth, setDepth] = useState("");
    const [card, setCard] = useState("");
    const [type, setType] = useState("");
    const [number, setNumber] = useState("");
    const [securityNum, setSecurityNum] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    let exampleList = props.invoiceDuesList;  //apartmentId
    let apartmentList = props.apartmentList;
    let creditCardList = props.creditCardList; //residentId

    let user = props.userObject;

    function filterUser(u){
        //filter only current user's credit cards
        let apartment = apartmentList.find( ({ id }) => id === u.apartmentId);
        if((apartment.resident === user.name + " " + user.surname) && u.status === false){
            return u;
        }
    }

    //find user in residentList
    function filterCard(u){
        if(u.residentId === user.id){
            u.number = u.number.slice(0,-5) + "XXXXX"; //hide creditcard last 5 number
            return u;
        }
            
    }

    if(user != null){
        exampleList = exampleList.filter(filterUser);
        //console.log(creditCardList);
        creditCardList = creditCardList.filter(filterCard);
    }

    //function is used after form is submitted
    function handleSubmit(e){
        e.preventDefault();

        //if debt and card area is filded
        if(depth && card){
            let dept = depth.target.value;
            
            //take id of debt
            dept = parseInt(dept.substring( dept.indexOf("(") + 1, dept.lastIndexOf(")")));
            
            //find debt from list
            let deptObj = exampleList.find( ({ id }) => id === dept);
            console.log(deptObj);
            
            //make it paid
            axios({
                method: 'PUT',
                url: 'https://localhost:7214/SiteManagement/UpdateInvoiceDues', 
                params: { id: deptObj.id },
                data: {
                    apartmentId: deptObj.apartmentId,
                    debtType: deptObj.debtType,
                    debt: deptObj.debt,
                    month: deptObj.month,
                    year: deptObj.year,
                    status: true
                }, 
                headers:{'Content-Type': 'application/json; charset=utf-8'}
            }).then(function (response) {
                console.log(response);
                alert("Dept is paid.");
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });

        }
        //if new credit card areas are flled
        else if (depth && number && type && securityNum && month && year){
            let dept = depth.target.value;

            dept = parseInt(dept.substring( dept.indexOf("(") + 1, dept.lastIndexOf(")")));
            
            //add new credit card to db and make paid the selected debt
            let deptObj = exampleList.find( ({ id }) => id === dept);
            axios.post('https://localhost:7039/CreditCards', {
                residentId: user.id,
                type: type.target.value,
                number: number.target.value,
                securityNum: securityNum.target.value,
                month: month.target.value,
                year: year.target.value,
            })
            .then(function (response) {
                console.log(response);
                e.preventDefault();
            })
            .catch(function (error) {
                console.log(error);
            });
            
            
            axios({
                method: 'PUT',
                url: 'https://localhost:7214/SiteManagement/UpdateInvoiceDues', 
                params: { id: deptObj.id },
                data: {
                    apartmentId: deptObj.apartmentId,
                    debtType: deptObj.debtType,
                    debt: deptObj.debt,
                    month: deptObj.month,
                    year: deptObj.year,
                    status: true
                }, 
                headers:{'Content-Type': 'application/json; charset=utf-8'}
            }).then(function (response) {
                console.log(response);
                alert("Dept is paid and new credit card is added.");
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
        else{
            alert("Please fill the areas.");
        }
        
    }

    return (

        <div class="container-fluid px-4">
        <h2 class="mt-4">Pay Invoices / Dues</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
        <div class="card-body">
        <div className='center'>
        <svg xmlns="http://www.w3.org/2000/svg" height="100" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/><path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/></svg>
        </div>
        <p className='center'>Debts are only paid by credit card</p>

        <form className=''  onSubmit={handleSubmit}>
        <div className="container center">
        <div className="col-lg-6 p-3"> 
            <div class="form-group">
            <label class="form-label" for="form6Example3">Select a Debt</label>
            
            <select class="form-select" multiple onChange={(e) => setDepth(e)}>
                {exampleList.map((a) => <option> ({a.id}) {a.month}/{a.year} - {a.debtType} - {a.debt} TL</option>)}
            </select>
            </div>
        </div>

        <div className="col-lg-6 p-3"> 
            <div class="form-group">
            <label class="form-label" for="form6Example3">Select a Credit Card</label>
            
            <select class="form-select" multiple multiple onChange={(e) => setCard(e)}>
            {creditCardList.map((a) => <option>{a.type} - {a.number} - {a.month}/{a.year}</option>)}
            </select>
            </div>
        </div>

        </div>

       <hr/>
        <p className='center'>Or Add New Credit Card and Pay</p>
        <div className="container center">
            <div className="col-lg-6 p-3"> 
            <div class="form-outline input-group-sm center">
            <img className="" src={creditCards} alt="creditCards" width="200"/>
            </div>
            </div>

            <div className="col-lg-6 p-3"> 
            <div class="form-outline input-group-sm">
                <label class="form-label" for="form6Example3">Select Credit Card Type</label>
                <select class="form-control"  onChange={(e) => setType(e)}>
                <option selected>Open this select menu</option>
                {cardTypes.map((b,index) => <option value={b}>{b}</option>)}
                </select>
            </div>
            </div>
        </div>
        
        <div className="container center"> 
       
            <div className="col-lg-6 p-3"> 
                <div class="form-outline input-group-sm">
                <label class="form-label" for="form6Example3">Credit Card Number</label>
                <input type="text" id="form6Example3" class="form-control" placeHolder="111111111" onChange={(e) => setNumber(e)}/>
                </div>
            </div>

            <div className="col-lg-6 p-3"> 
                <div class="form-outline input-group-sm">
                <label class="form-label" for="form6Example3">Security Number</label>
                <input type="text" id="form6Example3" class="form-control" placeHolder="XXXX" onChange={(e) => setSecurityNum(e)}/>
                </div>
            </div>

        </div>

        <div className="container center">
        <div className="col-lg-6 p-3"> 
            <div class="form-outline input-group-sm">
            <label class="form-label" for="form6Example3">Select Month</label>
            <select class="form-control" onChange={(e) => setMonth(e)}>
            <option selected>Open this select menu</option>
            {months.map((t) => <option>{t}</option>)}
            </select>
            </div>
        </div>
        <div className="col-lg-6 p-3"> 
        <div class="form-outline input-group-sm">
            <label class="form-label" for="form6Example3">Select Year</label>
            <select class="form-control" onChange={(e) => setYear(e)}>
            <option selected>Open this select menu</option>
            {years.map((t) => <option>{t}</option>)}
            </select>
            </div>
        </div>
        </div>

        <br/>
        <div className="container center">
        <button type="submit" value="Submit" class="btn btn-primary btn-block">Pay Debt</button>
        </div>
        </form>           

        </div>
        </div>
        </div>

    );
  }
  
  export default PayInvoicesDues;