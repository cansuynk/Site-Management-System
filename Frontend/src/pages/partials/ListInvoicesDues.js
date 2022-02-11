

const exampleList = [
    {
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100"        
    },
    {
        resident: "Emre Özkan",
        block: "A",
        apartmentNo: "29",
        debtType: "due",
        debt: "200"  
    },
    {
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100"  
    },
    {
        resident: "Cansu Yanık",
        block: "A",
        apartmentNo: "59",
        debtType: "electric",
        debt: "100"  
    }
];

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
                </tr>
                )}
        </tbody>
        </table>
        </div>
    );
  }
  
  export default ListInvoicesDues;
  