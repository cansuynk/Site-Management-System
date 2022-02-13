import Residents from '../components/Residents';
import '../css/adminPage.css';
import axios from 'axios';
/*
const exampleList = [
    {
        name: "Cansu",
        surname: "Yanık",
        block: "A",
        apartmentNo:"59",
        tcNo: "1111111111111",
        email: "cansuyanik96@gmail.com",
        password: "xxxxxxxx",
        phone: "05303003656",
        numberPlate: "06-CIY-680"
    },
    {
        name: "Emre Burak",
        surname: "Özkan",
        block: "A",
        apartmentNo:"59",
        tcNo: "1111111111111",
        email: "emreburakozkan@gmail.com",
        password: "xxxxxxxx",
        phone: "05416319137",
        numberPlate: "06-AEF-232"
    },
    {
        name: "Cansu",
        surname: "Yanık",
        block: "A",
        apartmentNo:"59",
        tcNo: "1111111111111",
        email: "cansuyanik96@gmail.com",
        password: "xxxxxxxx",
        phone: "05303003656",
        numberPlate: "06-CIY-680"
    },
    {
        name: "Emre Burak",
        surname: "Özkan",
        block: "A",
        apartmentNo:"59",
        tcNo: "1111111111111",
        email: "emreburakozkan@gmail.com",
        password: "xxxxxxxx",
        phone: "05416319137",
        numberPlate: "06-AEF-232"
    },
    {
        name: "Emre Burak",
        surname: "Özkan",
        block: "A",
        apartmentNo:"59",
        tcNo: "1111111111111",
        email: "emreburakozkan@gmail.com",
        password: "xxxxxxxx",
        phone: "05416319137",
        numberPlate: "06-AEF-232"
    },
    {
        name: "Emre Burak",
        surname: "Özkan",
        block: "A",
        apartmentNo:"59",
        tcNo: "1111111111111",
        email: "emreburakozkan@gmail.com",
        password: "xxxxxxxx",
        phone: "05416319137",
        numberPlate: "06-AEF-232"
    }
];
*/



function ListResidents(props) {

    let callbackFunction = (childData) => {
        console.log(`https://localhost:7214/SiteManagement/DeleteResident/${childData}`);
        axios.delete('https://localhost:7214/SiteManagement/DeleteResident', { params: { id: childData } })
        .then(function (response) {
            console.log(response);
            alert("Resident is deleted.");
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    function makeList(exampleList){
        let residents = [];
        let i=0;
        if(exampleList.length === 0){
            residents.push(<h2 className='center'>There is not any residents.</h2>);
        }
        while(i<exampleList.length){
            let pushed = "";
            if(i+1<exampleList.length && i+2<exampleList.length && i+3<exampleList.length){
                pushed = <tr><td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i]}/>}</td><td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i+1]}/>}</td><td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i+2]}/>}</td>
                <td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i+3]}/>}</td></tr>;
                i = i+4;
            }
            else if(i+1<exampleList.length && i+2<exampleList.length && i+3>=exampleList.length){
                pushed = <tr><td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i]}/>}</td><td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i+1]}/>}</td><td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i+2]}/>}</td></tr>;
                i = i+3;
            }
            else if(i+1<exampleList.length && i+2>=exampleList.length){
                pushed = <tr><td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i]}/>}</td><td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i+1]}/>}</td><td></td></tr>;
                i = i+2;
            }
            else{
                pushed = <tr><td>{<Residents parentCallback = {callbackFunction} residentObj={exampleList[i]}/>}</td><td></td><td></td></tr>
                i = i+1;
            }
            residents.push(pushed);
        }
        return residents;
    }

    let residents = makeList(props.residentList);

    return (
        
        <div class="container-fluid px-4">
        <h2 class="mt-4">Residents</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
            <div class="card-body">

            <div class="table-responsive">
                <table class="table align-middle">
                    <tbody>
                        {residents}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default ListResidents;
  