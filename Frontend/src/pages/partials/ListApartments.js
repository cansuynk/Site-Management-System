import Apartments from '../components/Apartments';
import '../css/adminPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ListApartments(props) {

    //const [apartments, setApartments] = useState("")

    //This is callback function. If delete button is clicked, selected apartment is deleted.
    let callbackFunction = (childData) => {
        console.log(`https://localhost:7214/SiteManagement/DeleteApartment/${childData}`);
        axios.delete('https://localhost:7214/SiteManagement/DeleteApartment', { params: { id: childData } })
        .then(function (response) {
            console.log(response);
            alert("Apartment is deleted.");
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    //This function displays apartments 4 by 4. This is just for layout. If there is no 4 apartments, displays 3 apartments.
    //Each apartment is displayed in Apartment Component.
    function makeList(exampleList){
        let apartments = [];
        let i=0;
        if(exampleList.length === 0){
            apartments.push(<h2 className='center'>There is not any apartments.</h2>);
        }
        while(i<exampleList.length){
            let pushed = "";
            if(i+1<exampleList.length && i+2<exampleList.length && i+3<exampleList.length){
                pushed = <tr><td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i]}/>}</td><td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i+1]}/>}</td><td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i+2]}/>}</td>
                <td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i+3]}/>}</td></tr>;
                i = i+4;
            }
            else if(i+1<exampleList.length && i+2<exampleList.length && i+3>=exampleList.length){
                pushed = <tr><td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i]}/>}</td><td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i+1]}/>}</td><td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i+2]}/>}</td></tr>;
                i = i+3;
            }
            else if(i+1<exampleList.length && i+2>=exampleList.length){
                pushed = <tr><td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i]}/>}</td><td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i+1]}/>}</td><td></td></tr>;
                i = i+2;
            }
            else{
                pushed = <tr><td>{<Apartments parentCallback = {callbackFunction} apartmentObj={exampleList[i]}/>}</td><td></td><td></td></tr>
                i = i+1;
            }
            apartments.push(pushed);
        }

        return apartments;

    }
    let apartments = makeList(props.apartmentList);


    return (

    <div class="container-fluid px-4">
        <h2 class="mt-4">Apartments</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
            <div class="card-body">

            <div class="table-responsive">
                <table class="table align-middle">
                    <tbody>
                        {apartments}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>


    );
  }
  
  export default ListApartments;
  