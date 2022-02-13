import '../css/adminPage.css';
import React, { useState } from 'react';
import axios from 'axios';

const blocks = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M"];

function AddUpdateResident(props) {

    //if existing resident(check name: change)
    //else cretae password

    let residentList = props.residentList;

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [block, setBlock] = useState("");
    const [no, setNo] = useState("");
    const [tcNo, setTcNo] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [numberPlate, setNumberPlate] = useState("");

    function generatePassword() {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    function handleSubmit(e){

        if(name && surname && block && no && tcNo && email && phone && numberPlate){

            let tcNoV = String(tcNo.target.value);

            if(residentList.find(({ tcNo }) => tcNo === tcNoV)){
                let resident = residentList.find(({ tcNo }) => tcNo === tcNoV);
                console.log(resident.id);
                
                axios.put('https://localhost:7214/SiteManagement/UpdateResident', { params: { id: resident.id }, data:{
                    name: name.target.value,
                    surname: surname.target.value,
                    block: block.target.value,
                    apartmentNo: no.target.value,
                    tcNo: tcNo.target.value,
                    email: email.target.value,
                    password: generatePassword(),
                    phone: phone.target.value,
                    numberPlate: numberPlate.target.value
                }})
                .then(function (response) {
                    console.log(response);
                    alert("Resident is updated.");
                    //window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            else{
                
                axios.post('https://localhost:7214/SiteManagement/AddResident', {
                    name: name.target.value,
                    surname: surname.target.value,
                    block: block.target.value,
                    apartmentNo: no.target.value,
                    tcNo: tcNo.target.value,
                    email: email.target.value,
                    password: generatePassword(),
                    phone: phone.target.value,
                    numberPlate: numberPlate.target.value
                })
                .then(function (response) {
                    console.log(response);
                    alert("New Resident is added.");
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
        else{
            alert("Please fill all areas.");
        }
    }

    return (

        <div class="container-fluid px-4">
        <h2 class="mt-4">Add / Update Residents</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
        <div class="card-body">
        <div className='center'>
        <svg xmlns="http://www.w3.org/2000/svg" height="100" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>

        
        </div>
        <form className='formDiv' onSubmit={handleSubmit}>

        <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Name</label>
            <input type="text" id="form6Example3" class="form-control"  placeHolder="Name" onChange={(e) => setName(e)}/>
        </div>

        <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Surname</label>
            <input type="text" id="form6Example3" class="form-control"  placeHolder="Surname" onChange={(e) => setSurname(e)}/>
        </div>

        <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Select Block</label>
            <select class="form-control"  onChange={(e) => setBlock(e)}>
            <option selected>Open this select menu</option>
            {blocks.map((b,index) => <option value={b}>{b}</option>)}
            </select>
        </div>

        <div class="form-outline mb-4 input-group-sm">
                <label class="form-label" for="form6Example3">Apartment No</label>
                <input type="number" id="form6Example3" class="form-control" onChange={(e) => setNo(e)} />
        </div>

        <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Tc Number</label>
            <input type="text" id="form6Example3" class="form-control"  placeHolder="Tc Number" onChange={(e) => setTcNo(e)}/>
        </div>

        <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Email</label>
            <input type="email" id="form6Example3" class="form-control"  placeHolder="jane.doe@example.com" onChange={(e) => setEmail(e)}/>
        </div>

        <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Phone</label>
            <input type="phone" id="form6Example3" class="form-control"  placeHolder="05xxxxxxxxx" onChange={(e) => setPhone(e)}/>
        </div>

        <div class="form-outline mb-4 input-group-sm">
            <label class="form-label" for="form6Example3">Vehicle Number Plate</label>
            <input type="text" id="form6Example3" class="form-control"  placeHolder="Number Plate" onChange={(e) => setNumberPlate(e)}/>
        </div>

        <br/>
        <button type="submit" class="btn-sm btn-primary btn-block">Submit</button>
        </form>           

        </div>
        </div>
        </div>

    );
  }
  
  export default AddUpdateResident;