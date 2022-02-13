import '../css/userPage.css';
import creditCards from '../../images/creditCards.png';

let exampleList = [
    {
        resident: "Cansu Yanık",
        residentId:1,
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100",
        month: 2,
        year: 2022,
        status: 0     
    },
    {
        resident: "Emre Özkan",
        residentId:2,
        block: "A",
        apartmentNo: "29",
        debtType: "due",
        debt: "200",
        month: 2,
        year: 2022,
        status: 1   
    },
    {
        resident: "Cansu Yanık",
        residentId:1,
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100",
        month: 3,
        year: 2021,
        status: 0  
    },
    {
        resident: "Cansu Yanık",
        residentId:1,
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100",
        month: 2,
        year: 2021,
        status: 1   
    }
];

let creditCard = [
    {
        resident: "Cansu Yanık",
        residentId: 1,
        type: "Visa",
        number: "111111111111111",
        month: 2,
        year: 2023,
    },
    {
        resident: "Cansu Yanık",
        residentId: 1,
        type: "Maximum",
        number: "111111111111111",
        month: 2,
        year: 2023,
    },
    {
        resident: "Emre Özkan",
        residentId: 2,
        type: "Visa",
        number: "111111111111111",
        month: 2,
        year: 2023
    },
    {
        resident: "Emre Özkan",
        residentId: 2,
        type: "Visa",
        number: "111111111111111",
        month: 2,
        year: 2023  
    }
];

const months = Array.from({length: 12}, (_, i) => i + 1);
const years = Array.from({length: 10}, (_, i) => i + 2022);


function PayInvoicesDues(props) {

    let user = props.userObject;

    function filterUser(u){
        if(u.resident === user.name + " " + user.surname && u.status === 0)
            return u;
    }

    
    //id ile filtreleme
    function filterCard(u){
        if(u.resident === user.name + " " + user.surname){
            u.number = u.number.slice(0,-5) + "XXXXX"; 
            return u;
        }
            
    }

    if(props.userObject != null){
        exampleList = exampleList.filter(filterUser);
        creditCard = creditCard.filter(filterCard);
    }



    function handleSubmit(e){
        e.preventDefault();
        //make status 0;
        
    }

    return (

        <div class="container-fluid px-4">
        <h2 class="mt-4">Pay Invoices / Dues</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
        <div class="card-body">
        <div className='center'>
        <svg xmlns="http://www.w3.org/2000/svg" height="100" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/><path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/></svg>
        </div>
        <p className='center'>Debts are only paid by credit card</p>

        <form className=''  onSubmit={handleSubmit}>
        <div className="container center">
        <div className="col-lg-6 p-3"> 
            <div class="form-group">
            <label class="form-label" for="form6Example3">Select a Debt</label>
            
            <select class="form-select" multiple>
                {exampleList.map((a) => <option>{a.month}/{a.year} - {a.debtType} - {a.debt} TL</option>)}
            </select>
            </div>
        </div>

        <div className="col-lg-6 p-3"> 
            <div class="form-group">
            <label class="form-label" for="form6Example3">Select a Credit Card</label>
            
            <select class="form-select" multiple>
            {creditCard.map((a) => <option>{a.type} - {a.number} - {a.month}/{a.year}</option>)}
            </select>
            </div>
        </div>

        </div>

       <hr/>
        <p className='center'>Or Add New Credit Card and Pay</p>
        <div className="container center">
            <img className="" src={creditCards} alt="creditCards" width="200"/>
        </div>
        
        <div className="container center"> 
       
            <div className="col-lg-6 p-3"> 
                <div class="form-outline input-group-sm">
                <label class="form-label" for="form6Example3">Credit Card Number</label>
                <input type="number" id="form6Example3" class="form-control" placeHolder="111111111" />
                </div>
            </div>

            <div className="col-lg-6 p-3"> 
                <div class="form-outline input-group-sm">
                <label class="form-label" for="form6Example3">Security Number</label>
                <input type="password" id="form6Example3" class="form-control" placeHolder="password" />
                </div>
            </div>

        </div>

        <div className="container center">
        <div className="col-lg-6 p-3"> 
            <div class="form-outline input-group-sm">
            <label class="form-label" for="form6Example3">Select Month</label>
            <select class="form-control">
            <option selected>Open this select menu</option>
            {months.map((t) => <option>{t}</option>)}
            </select>
            </div>
        </div>
        <div className="col-lg-6 p-3"> 
        <div class="form-outline input-group-sm">
            <label class="form-label" for="form6Example3">Select Year</label>
            <select class="form-control">
            <option selected>Open this select menu</option>
            {years.map((t) => <option>{t}</option>)}
            </select>
            </div>
        </div>
        </div>

        <br/>
        <div className="container center">
        <button type="submit" value="Submit" class="btn btn-primary btn-block">Pay Debt</button>
        </div>
        </form>           

        </div>
        </div>
        </div>

    );
  }
  
  export default PayInvoicesDues;