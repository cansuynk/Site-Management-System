import '../css/adminPage.css';
import React, { useState } from 'react';

let exampleList = [
    {
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

exampleList = exampleList.sort((a, b) => parseFloat(a.status) - parseFloat(b.status));


function ListMessages(props) {

    let user = props.userObject;

    function filterUser(u){
        if(u.resident === user.name + " " + user.surname){
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
                    <tr className={o.status===0?"rowNew":""}>
                    <td><strong>{o.status===0?"NEW":null}</strong></td>
                    <td>{o.resident}</td>
                    <td>{o.block}{o.apartmentNo}</td>
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
  