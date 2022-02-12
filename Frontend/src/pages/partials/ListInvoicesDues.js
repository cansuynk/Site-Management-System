

let exampleList = [
    {
        resident: "Cansu Yanık",
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
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100",
        month: 2,
        year: 2021,
        status: 1   
    }
];

exampleList = exampleList.sort((a, b) => parseFloat(a.status) - parseFloat(b.status));

function ListInvoicesDues() {
    return (
        
        <div>
        <h3 className="center">All debts are listed below</h3>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Resident</th>
                <th scope="col">Apartment</th>
                <th scope="col">Debt Type</th>
                <th scope="col">Debt (TL)</th>
                <th scope="col">Time</th>
                <th scope="col">Paid</th>
                </tr>
            </thead>
            <tbody>
                {exampleList.map((o,index) => 
                <tr>
                <th scope="row">{index+1}</th>
                <td>{o.resident}</td>
                <td>{o.block}{o.apartmentNo}</td>
                <td>{o.debtType}</td>
                <td>{o.debt}</td>
                <td>{o.month}/{o.year}</td>
                <td>  
                    <div class="form-group">
                    <label class="form-checkbox">
                        <input type="checkbox" checked = {o.status===1?true:false}/>
                        <i class="form-icon"></i>{o.status===1?"Paid":"Not Paid"}
                    </label>
                    </div>
                </td>
                </tr>
                )}
        </tbody>
        </table>
        </div>
    );
  }

  export default ListInvoicesDues;
  