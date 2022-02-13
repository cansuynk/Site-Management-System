import Apartments from '../components/Apartments';
import '../css/adminPage.css';

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

let apartments = [];
let i=0;
if(exampleList.length === 0){
    apartments.push(<h2 className='center'>There is not any apartments.</h2>);
}
while(i<exampleList.length){
    let pushed = "";
    if(i+1<exampleList.length && i+2<exampleList.length && i+3<exampleList.length){
        pushed = <tr><td>{<Apartments apartmentObj={exampleList[i]}/>}</td><td>{<Apartments apartmentObj={exampleList[i+1]}/>}</td><td>{<Apartments apartmentObj={exampleList[i+2]}/>}</td>
        <td>{<Apartments apartmentObj={exampleList[i+3]}/>}</td></tr>;
        i = i+4;
    }
    else if(i+1<exampleList.length && i+2<exampleList.length && i+3>=exampleList.length){
        pushed = <tr><td>{<Apartments apartmentObj={exampleList[i]}/>}</td><td>{<Apartments apartmentObj={exampleList[i+1]}/>}</td><td>{<Apartments apartmentObj={exampleList[i+2]}/>}</td></tr>;
        i = i+3;
    }
    else if(i+1<exampleList.length && i+2>=exampleList.length){
        pushed = <tr><td>{<Apartments apartmentObj={exampleList[i]}/>}</td><td>{<Apartments apartmentObj={exampleList[i+1]}/>}</td><td></td></tr>;
        i = i+2;
    }
    else{
        pushed = <tr><td>{<Apartments apartmentObj={exampleList[i]}/>}</td><td></td><td></td></tr>
        i = i+1;
    }
    apartments.push(pushed);
}

function ListApartments() {
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
  