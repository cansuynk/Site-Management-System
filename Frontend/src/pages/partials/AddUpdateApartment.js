import '../css/adminPage.css';
import React, { useState } from 'react';
import axios from 'axios';

const blocks = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M"];
const types = ["1+0", "1+1", "2+0", "2+1", "3+0", "3+1", "4+0", "4+1", "5+0", "5+1", "6+0", "6+1", "dubleks", "tripleks"];
const floor = [-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function AddUpdateApartment(props) {

    let apartmentList = props.apartmentList;

    const [block, setBlock] = useState("");
    const [type, setType] = useState("");
    const [floorr, setFloor] = useState(0);
    const [no, setNo] = useState(0);
    const [status, setStatus1] = useState("");
    const [tO, setTO1] = useState("");
    const [resident, setResident] = useState("");


    function handleSubmit(e){

        console.log(resident);

        if(block && type && floorr && no && status){

            let ten = '-';
            let res = '-';

            if(tO)
                ten = tO.target.value;
            if(resident)
                res = resident.target.value;

      
            let blockV = String(block.target.value);
            let noV = parseInt(no.target.value);

            if(apartmentList.find(({ block, apartmentNo }) => block === blockV && apartmentNo === noV)){
                let apartment = apartmentList.find(({ block, apartmentNo }) => block === blockV && apartmentNo === noV);
                console.log(apartment.id);
                let id = apartment.id;
                axios({
                    method: 'PUT',
                    url: 'https://localhost:7214/SiteManagement/UpdateApartment', 
                    params: { id: id },
                    data: {
                        block: block.target.value,
                        status: status.target.value,
                        type: type.target.value,
                        floor: floorr.target.value,
                        apartmentNo: no.target.value,
                        ownerOrTenant: ten,
                        resident: res
                    }, 
                    headers:{'Content-Type': 'application/json; charset=utf-8'}
                }).then(function (response) {
                    console.log(response);
                    alert("Apartment is updated.");
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            else{
                
                axios.post('https://localhost:7214/SiteManagement/AddApartment', {
                    block: block.target.value,
                    status: status.target.value,
                    type: type.target.value,
                    floor: floorr.target.value,
                    apartmentNo: no.target.value,
                    ownerOrTenant: ten,
                    resident: res
                })
                .then(function (response) {
                    console.log(response);
                    alert("New Apartment is added.");
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
        else{
            console.log("ggg");
            alert("Please fill the areas.");
        }
    }

    
    return (

        <div class="container-fluid px-4">
        <h2 class="mt-4">Add / Update Apartments</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
        <div class="card-body">
        <div className='center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="100"><path fill-rule="evenodd" d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"></path></svg>

        
        </div>
            <form className='formDiv' onSubmit={handleSubmit}>

            <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Select Block</label>
            <select class="form-control"  onChange={(e) => setBlock(e)}>
            <option selected>Open this select menu</option>
            {blocks.map((b,index) => <option value={b}>{b}</option>)}
            </select>
            </div>

            <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Select Apartment Type</label>
            <select class="form-control" onChange={(e) => setType(e)}>
            <option selected>Open this select menu</option>
            {types.map((t,index) => <option value={t}>{t}</option>)}
            </select>
            </div>

            <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Select Floor</label>
            <select class="form-control" onChange={(e) => setFloor(e)}>
            <option selected>Open this select menu</option>
            {floor.map((f,index) => <option value={f}>{f}</option>)}
            </select>
            </div>

            <div class="form-outline mb-4 input-group-sm">
                <label class="form-label" for="form6Example3">Apartment No</label>
                <input type="number" id="form6Example3" class="form-control" onChange={(e) => setNo(e)} />
            </div>

             <div className='container center'>
             <div className='col-6'  onChange={(e) => setStatus1(e)}>
            <label class="form-check-label" for="flexRadioDefault1">Apartment Status</label>
            <div class="radio">
            <label>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="Empty"/>
                Empty
            </label>
            </div>
            <div class="radio">
            <label>
                <input type="radio" name="optionsRadios" id="optionsRadios2" value="Full"/>
                Full
            </label>
            </div>
            </div>

            <div className='col-6'  onChange={(e) => setTO1(e)}>
            <label class="form-check-label" for="flexRadioDefault1">Tenant/Owner</label>
            <div class="radio">
            <label>
                <input type="radio" name="optionsRadios1" id="optionsRadios3" value="Tenant"/>
                Tenant
            </label>
            </div>
            <div class="radio">
            <label>
                <input type="radio" name="optionsRadios1" id="optionsRadios4" value="Owner"/>
                Owner
            </label>
            </div>
            </div>
            </div>

            <div class="form-outline mb-4 input-group-sm">
                <label class="form-label" for="form6Example3">Resident Name Surname</label>
                <input type="text" id="form6Example3" class="form-control" placeHolder="Name Surname" onChange={(e) => setResident(e)}/>
            </div>

            <br/>
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </form>            

        </div>
        </div>
        </div>

    );
  }
  
  export default AddUpdateApartment;