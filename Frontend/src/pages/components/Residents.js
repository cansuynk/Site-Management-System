import '../css/apartment.css'

function Residents(props) {

  //Component is for each resident card

  function handleClick(e, param) {
    e.preventDefault();
    props.parentCallback(param);
  }

  return (
    <div class="card center cardDiv">
    <div class="card-body">
    <svg xmlns="http://www.w3.org/2000/svg" height="50" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
        <h4 class="card-title">{props.residentObj.name} {props.residentObj.surname}</h4>
       
        <p class="card-text">
        <strong>Apartment:</strong> Block {props.residentObj.block}, No: {props.residentObj.apartmentNo} <br/>
        <strong>Email:</strong> {props.residentObj.email} <br/>
        <strong>Generated Password:</strong> {props.residentObj.password} <br/>
        <strong>Tc No:</strong> {props.residentObj.tcNo} <br/>
        <strong>Phone:</strong> {props.residentObj.phone} <br/>
        <strong>Vehicle Number Plate:</strong> {props.residentObj.numberPlate} <br/>
        </p>
        <button type="submit" class="btn-sm btn-primary" onClick={(e) => handleClick(e,props.residentObj.id)}>Delete</button>
    </div>
    </div>
  );
}

export default Residents;
