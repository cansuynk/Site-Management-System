import '../css/apartment.css'

function Apartments(props) {
  return (
    <div class="card center cardDiv">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="50"><path fill-rule="evenodd" d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"></path></svg>
    <div class="card-body">
        <h4 class="card-title">{props.apartmentObj.block} Block</h4>
        <p class="card-text">
        <strong>Apartment Type:</strong> {props.apartmentObj.type} <br/>
        <strong>Apartment No:</strong> {props.apartmentObj.apartmentNo}, {props.apartmentObj.floor}.Floor <br/>
        <strong>Apartment Status:</strong> {props.apartmentObj.status}  <br/>
        <strong>Resident:</strong> {props.apartmentObj.resident} ({props.apartmentObj.ownerOrTenant}) 
        </p>
    </div>
    </div>
  );
}

export default Apartments;
