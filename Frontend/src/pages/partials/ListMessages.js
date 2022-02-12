import '../css/adminPage.css';
import React, { useState } from 'react';

let exampleList = [
    {
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        message: "We want to a swimming pool",
        status: 0,
        time: "11.11.11 11.11"

    },
    {
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        message: "svsfbdzfbgfnfgnfgnfgng",
        status: 1,
        time: "11.11.11 11.11"
    },
    {
        resident: "Emre Özkan",
        block: "A",
        apartmentNo: "59",
        message: "We want to a swimming poolWe want to a swimming poolWe want to a swimming poolWe want to a swimming poolWe want to a swimming pool",
        status: 0,
        time: "11.11.11 11.11"
    }
];

exampleList = exampleList.sort((a, b) => parseFloat(a.status) - parseFloat(b.status));


function ListMessages() {
    const [list, setList] = useState(exampleList);
    const [openM, setOpenM] = useState(false);
    const [currObject, setcurrObject] = useState({});

    function openHandler(e,index){
        let newList = list;
        
        setcurrObject(newList[index]);

        newList[index].status = 1;

        console.log(index);
        newList = newList.sort((a, b) => parseFloat(a.status) - parseFloat(b.status));

        setList(newList);
        
        setOpenM(false);
        console.log(list);
    }

    function closeHandler(e,list){
        e.preventDefault();
        setList(list);
        setOpenM(true);
    }

    return (
        <div>
        <h3 className="center">All messages are listed below</h3>
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
                    <a className="btn-sm btn-primary btnOpen" href="#example-modal-2" onClick={(e) => openHandler(e,index)}>Open</a>
                    {!openM?
                    <div class="modal" id="example-modal-2">
                        <a href="#modals-sizes" class="modal-overlay" aria-label="Close" onClick={(e) => closeHandler(e,list)}></a>
                        <div class="modal-container" role="document">
                            <div class="modal-header">
                                <a href="#modals-sizes" class="btn btn-clear float-right" aria-label="Close" onClick={(e) => closeHandler(e,list)}></a>
                            <div class="modal-title h5">{currObject.resident} - {currObject.block}{currObject.apartmentNo}</div>
                            </div>
                            <div class="modal-body">
                            <div class="content">
                                {currObject.message}
                            </div>
                            </div>
                            <div class="modal-footer">
                            </div>
                        </div>
                    </div>:null}
                </td>
                </tr>
                )}
        </tbody>
        </table>
        </div>
    );
  }
  
  export default ListMessages;
  