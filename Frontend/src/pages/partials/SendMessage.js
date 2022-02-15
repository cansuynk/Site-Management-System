import '../css/userPage.css';
import React, { useState } from 'react';
import axios from 'axios';


function SendMessage(props) {

    const [message, setMessage] = useState("");

    let user  = props.userObject;

    function handleSubmit(e){

        //find date with specific format
        var myDate = new Date();
        myDate = myDate.getFullYear() + '-' +('0' + (myDate.getMonth()+1)).slice(-2)+ '-' +  ('0' + myDate.getDate()).slice(-2) + ' '+myDate.getHours()+ ':'+('0' + (myDate.getMinutes())).slice(-2)+ ':'+myDate.getSeconds();
        console.log(message.target.value);
        if(message){ //if message filled, add
                
            axios.post('https://localhost:7214/SiteManagement/AddMessage', {
                residentId: user.id,
                message: message.target.value,
                status: false,
                time: myDate
            })
            .then(function (response) {
                console.log(response);
                alert("Your message is sent");
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
        else{
            alert("Please write your message.");
            e.preventDefault();
        }
    }

    return (

        <div class="container-fluid px-4">
        <h2 class="mt-4">Send Message</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
        <div class="card-body">
        <div className='center'>
        <svg xmlns="http://www.w3.org/2000/svg" height="100" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
        </div>
        <p className='center'>Send Message to Admin</p>
            <form className='formDiv' onSubmit={handleSubmit}>

            <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea" onChange={(e) => setMessage(e)}></textarea>
            <label for="floatingTextarea2" className='placeHolder'>Your Message</label>
            </div>

            <br/>
            <button type="submit" class="btn btn-primary btn-block">Send</button>
            </form>            

        </div>
        </div>
        </div>

    );
  }
  
  export default SendMessage;