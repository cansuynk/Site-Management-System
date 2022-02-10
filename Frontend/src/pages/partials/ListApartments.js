import Aparments from '../components/Apartments';
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
    }
];

let apartments = [];
let i=0;
while(i<exampleList.length){
    let pushed = "";
    if(i+1<exampleList.length && i+2<exampleList.length){
        pushed = <tr><td>{<Aparments/>}</td><td>{<Aparments/>}</td><td>{<Aparments/>}</td></tr>;
        i = i+3;
    }
    else if(i+1<exampleList.length && i+2>=exampleList.length){
        pushed = <tr><td>{<Aparments/>}</td><td>{<Aparments/>}</td><td></td></tr>;
        i = i+2;
    }
    else{
        pushed = <tr><td>{<Aparments/>}</td><td></td><td></td></tr>
        i = i+1;
    }
    apartments.push(pushed);
}

function ListApartments() {
    return (
        
         <div class="table-responsive">
  <table class="table align-middle">
    
    <tbody>
        {apartments}
    </tbody>
    </table>
    </div>
    );
  }
  
  export default ListApartments;
  