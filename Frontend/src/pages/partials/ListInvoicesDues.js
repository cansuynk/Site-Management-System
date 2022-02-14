import React, { useState, useEffect } from 'react';
/*
let exampleList = [
    {
        //apartmentId verildi (resident, block, apartment no yerine)
        //det int
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100",
        month: 2,
        year: 2022,
        status: 0     
    },
    {
        resident: "Emre Özkan",
        block: "A",
        apartmentNo: "29",
        debtType: "due",
        debt: "200",
        month: 2,
        year: 2022,
        status: 1   
    },
    {
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100",
        month: 3,
        year: 2021,
        status: 0  
    },
    {
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100",
        month: 2,
        year: 2021,
        status: 1   
    }
];
*/




function ListInvoicesDues(props) {


    function makeList(exampleList){
        exampleList = exampleList.sort((a, b) => parseFloat(a.status) - parseFloat(b.status));
        return exampleList;
    }

    let apartmentList = props.apartmentList;
    //console.log(apartmentList.find( ({ id }) => id === 12 ).resident);
    let exampleList = makeList(props.invoiceDuesList);
    
    let user = props.userObject;

    function filterUser(u){
        let apartment = apartmentList.find( ({ id }) => id === u.apartmentId );
        if(apartment.resident === user.name + " " + user.surname)
            return u;
    }

    if(props.userObject != null){
        exampleList = exampleList.filter(filterUser);
    }


    return (

        <div class="container-fluid px-4">
        <h2 class="mt-4">Invoices / Dues</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
        <div class="card-body">
            
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Resident</th>
                    <th scope="col">Apartment</th>
                    <th scope="col">Debt Type</th>
                    <th scope="col">Debt (TL)</th>
                    <th scope="col">Time</th>
                    <th scope="col">Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {exampleList && exampleList.map((o,index) => 
                    <tr>
                    <th scope="row">{index+1}</th>
                    <td>{apartmentList.find( ({ id }) => id === o.apartmentId ).resident}</td>
                    <td>{apartmentList.find( ({ id }) => id === o.apartmentId ).block} - {apartmentList.find( ({ id }) => id === o.apartmentId ).apartmentNo}</td>
                    <td>{o.debtType}</td>
                    <td>{o.debt}</td>
                    <td>{o.month}/{o.year}</td>
                    <td>  
                        <div class="form-group">
                        <label class="form-checkbox">
                            <input type="checkbox" checked = {o.status===true?true:false}/>
                            <i class="form-icon"></i>{o.status===false?"Paid":"Not Paid"}
                        </label>
                        </div>
                    </td>
                    </tr>
                    )}
            </tbody>
            </table>

        </div>
        </div>
        </div>
    );
  }

  export default ListInvoicesDues;