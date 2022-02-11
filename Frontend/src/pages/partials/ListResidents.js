import '../css/adminPage.css';

const exampleList = [
    {
        name: "Cansu",
        surname: "Yanık",
        tcNo: "1111111111111",
        email: "cansuyanik96@gmail.com",
        phone: "05303003656",
        numberPlate: "06-CIY-680"
    },
    {
        name: "Emre Burak",
        surname: "Özkan",
        tcNo: "1111111111111",
        email: "emreburakozkan@gmail.com",
        phone: "05416319137",
        numberPlate: "06-AEF-232"
    },
    {
        name: "Cansu",
        surname: "Yanık",
        tcNo: "1111111111111",
        email: "cansuyanik96@gmail.com",
        phone: "05303003656",
        numberPlate: "06-CIY-680"
    },
    {
        name: "Emre Burak",
        surname: "Özkan",
        tcNo: "1111111111111",
        email: "emreburakozkan@gmail.com",
        phone: "05416319137",
        numberPlate: "06-AEF-232"
    }
];

function ListResidents() {
    return (
        
        <div>
        <h3 className="center">All residents are listed below</h3>
        <br/>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">TC No</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Vehicle Number plate</th>
                </tr>
            </thead>
            <tbody>
                {exampleList.map((o,index) => 
                <tr>
                <th scope="row">{index+1}</th>
                <td>{o.name}</td>
                <td>{o.surname}</td>
                <td>{o.tcNo}</td>
                <td>{o.email}</td>
                <td>{o.phone}</td>
                <td>{o.numberPlate}</td>
                </tr>
                )}
        </tbody>
        </table>
        </div>
    );
  }
  
  export default ListResidents;
  