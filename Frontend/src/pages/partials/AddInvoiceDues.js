import React, { useState } from 'react';



const exampleList = [
    {
        block: "A",
        status: "full",
        type: "2+1",
        floor: "7",
        apartmentNo: "59",
        ownerOrTenant: "tenant",
        resident: "Cansu Yanık"
    },
    {
        block: "A",
        status: "full",
        type: "1+1",
        floor: "3",
        apartmentNo: "29",
        ownerOrTenant: "tenant",
        resident: "Emre Özkan"
    },
    {
        block: "B",
        status: "empty",
        type: "1+1",
        floor: "3",
        apartmentNo: "29",
        ownerOrTenant: "-",
        resident: "-"
    },
    {
        block: "B",
        status: "empty",
        type: "1+1",
        floor: "3",
        apartmentNo: "29",
        ownerOrTenant: "-",
        resident: "-"
    }
];

const months = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];
const depthTypes = ["Dues", "Electric", "Hot Water", "Gas", "Other"];

let newList = exampleList.filter( (a) => a.resident!=="-");

function AddInvoiceDue() {

    const [value1, setValue1] = useState(newList[0].resident);
    const [value2, setValue2] = useState("electric");
    const [value3, setValue3] = useState("January");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        console.log(value1.target.value);
        console.log(value2.target.value);
        console.log(value3.target.value);
        console.log(value4.target.value);
        console.log(value5.target.value);
        
    }

    return (
        <div class="container-fluid px-4">
        <h2 class="mt-4">Add Invoices / Dues</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
        <div class="card-body">
        <div className='center'>
        
        </div>
        <h2 className="center">Add new debts</h2>
        <br/> <br/>
        <form className=''  onSubmit={handleSubmit}>
        <div className="container center">
        <div className="col-lg-6 p-3"> 
            <div class="form-group">
            <label class="form-label" for="form6Example3">Select the Apartment and Resident</label>
            
            <select class="form-select" multiple onChange={(e) => setValue1(e)}>
                {newList.map((a) => <option>{a.block}{a.apartmentNo} - {a.resident}</option>)}
            </select>
            </div>
        </div>

        <div className="col-lg-6 p-3"> 
            <div class="form-group">
            <label class="form-label" for="form6Example3">Select the Depth Type</label>
            
            <select class="form-select" multiple onChange={(e) => setValue2(e)}>
                {depthTypes.map((a) => <option>{a}</option>)}
            </select>
            </div>
        </div>

        </div>
        <div className="container center">
        <div className="col-lg-6 p-3"> 
            <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Select Month</label>
            <select class="form-control" onChange={(e) => setValue3(e)}>
            <option selected>Open this select menu</option>
            {months.map((t) => <option>{t}</option>)}
            </select>
            </div>
        </div>
        <div className="col-lg-6 p-3"> 
        <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Select Year</label>
            <select class="form-control" onChange={(e) => setValue4(e)}>
            <option selected>Open this select menu</option>
            {years.map((t) => <option>{t}</option>)}
            </select>
            </div>
        </div>
        </div>
        <div className="container center">
        <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Depth Amount (TL)</label>
            <input type="number" id="form6Example3" class="form-control" placeHolder="TL" onChange={(e) => setValue5(e)}/>
        </div>
        </div>

        <br/>
        <div className="container center">
        <button type="submit" value="Submit" class="btn btn-primary btn-block">Submit</button>
        </div>
        </form>
        </div>
        </div>
        </div>
    );
  }
  
  export default AddInvoiceDue;
  