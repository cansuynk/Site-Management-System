import '../css/adminPage.css';
import React, { useState } from 'react';
import axios from 'axios';

/*
let exampleList = [
    {
        //resident id verildi, (resident, block, apartmentno yerine)
        id: 1,
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        message: "We want to a swimming pool",
        status: 0,
        time: "11.11.11 11.11"

    },
    {
        id: 2,
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        message: "svsfbdzfbgfnfgnfgnfgng",
        status: 1,
        time: "11.11.11 11.11"
    },
    {
        id: 3,
        resident: "Emre Özkan",
        block: "A",
        apartmentNo: "59",
        message: "We want to a swimming poolWe want to a swimming poolWe want to a swimming poolWe want to a swimming poolWe want to a swimming pool",
        status: 0,
        time: "11.11.11 11.11"
    }
];
*/

//exampleList = exampleList.sort((a, b) => parseFloat(a.status) - parseFloat(b.status));


function ListMessages(props) {

    function makeList(exampleList){
        return exampleList.sort((a, b) => parseFloat(a.status) - parseFloat(b.status));
    }

    let exampleList = makeList(props.messageList);

    let residentList = props.residentList;

    let user = props.userObject;

    function filterUser(u){
        if(user.id === u.residentId){
            u.status = 1;
            return u;
        }
    }

    if(props.userObject != null){
        exampleList = exampleList.filter(filterUser);
    }
    
    

    const [list, setList] = useState(exampleList);
    const [openM, setOpenM] = useState(true);
    const [currObject, setcurrObject] = useState({});

    function openHandler(e,index){
        let newList = list;
        
        setcurrObject(newList[index]);

        newList[index].status = 1;

        console.log(newList[index].message);
        newList = newList.sort((a, b) => parseFloat(a.status) - parseFloat(b.status));

        setList(newList);
        
        setOpenM(false);
        console.log(list);

        axios({
            method: 'PUT',
            url: 'https://localhost:7214/SiteManagement/UpdateMessage', 
            params: { id: newList[index].id },
            data: {
                residentId: newList[index].residentId,
                message: newList[index].message,
                status: true,
                time: newList[index].time
            }, 
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        }).then(function (response) {
            console.log(response);
            //alert("Apartment is updated.");
            //window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
        <div class="container-fluid px-4">
        <h2 class="mt-4">Messages</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
        <div class="card-body">

        <div className="container-fluid align-top-c">
        <div className="col-lg-6 p-3"> 
            <table class="table">
                <thead>
                    <tr>
                    <td scope="col"></td>
                    <th scope="col">From</th>
                    <th scope="col">Apartment</th>
                    <th scope="col">Time</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((o,index) => 
                    <tr className={o.status===false?"rowNew":""}>
                    <td><strong>{o.status===false?"NEW":null}</strong></td>
                    <td>{residentList.find( ({ id }) => id === o.residentId).name} {residentList.find( ({ id }) => id === o.residentId).surname}</td>
                    <td>{residentList.find( ({ id }) => id === o.residentId).block}-{residentList.find( ({ id }) => id === o.residentId).apartmentNo}</td>
                    <td>{o.time}</td>
                    <td>
                    
                    <a className="btn btn-sm btn-primary btnOpen" href="#example-modal-2" onClick={(e) => openHandler(e,index, o.id)}>Open</a>  
                    </td>
                    </tr>
                    )}
            </tbody>
            </table>
        </div>
        <div className="col-lg-6 p-3"> 
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Message Content</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {!openM?<td>{currObject.message}</td>:null}
                    </tr>
            </tbody>
            </table>
        </div>
        </div>
       

        </div>
        </div>
        </div>

        </div>
    );
  }
  
  export default ListMessages;
  