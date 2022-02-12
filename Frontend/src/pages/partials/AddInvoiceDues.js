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

const depthTypes = ["Dues", "Electric", "Hot Water", "Gas", "Other"];
let newList = exampleList.filter( (a) => a.resident!=="-");

function AddInvoiceDue() {

    const [value1, setValue1] = useState(newList[0].resident);
    const [value2, setValue2] = useState("electric");
    const [value3, setValue3] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        console.log(value1.target.value);
        console.log(value2.target.value);
        console.log(value3.target.value);
        
    }

    return (
        
        <div>
        <h2 className="center">Add new debts</h2>
        <br/> <br/>
        <form className='formDiv'  onSubmit={handleSubmit}>
        <div className="container center">
        <div className="col-lg-6"> 
            <div class="form-group groupOp">
            <label class="form-label" for="form6Example3">Select the Apartment and Resident</label>
            
            <select class="form-select" multiple onChange={(e) => setValue1(e)}>
                {newList.map((a) => <option>{a.block}{a.apartmentNo} - {a.resident}</option>)}
            </select>
            </div>
        </div>

        <div className="col-lg-6"> 
            <div class="form-group groupOp">
            <label class="form-label" for="form6Example3">Select the Depth Type</label>
            
            <select class="form-select" multiple onChange={(e) => setValue2(e)}>
                {depthTypes.map((a) => <option>{a}</option>)}
            </select>
            </div>
        </div>

        </div>
        <div className="container center">
        <div class="form-outline mb-4 input-group-lg">
            <label class="form-label" for="form6Example3">Depth Amount (TL)</label>
            <input type="number" id="form6Example3" class="form-control" placeHolder="TL" onChange={(e) => setValue3(e)}/>
        </div>
        </div>

        <br/>
        <div className="container center">
        <button type="submit" value="Submit" class="btn-lg btn-primary btn-block">Submit</button>
        </div>
        </form>
        </div>

    );
  }
  
  export default AddInvoiceDue;
  