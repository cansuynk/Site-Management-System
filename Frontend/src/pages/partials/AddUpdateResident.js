import '../css/adminPage.css';



function AddUpdateResident() {

    //if existing resident(check name: change)
    //else cretae password

    return (
        <div>
        <div className='center'>
        <svg xmlns="http://www.w3.org/2000/svg" height="100" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>

        
        </div>
        <p className='center'>Add a resident or update existing resident!</p>
        <form className='formDiv'>

        <div class="form-outline mb-4 input-group-lg">
            <label class="form-label" for="form6Example3">Name</label>
            <input type="text" id="form6Example3" class="form-control"  placeHolder="Name" />
        </div>

        <div class="form-outline mb-4 input-group-lg">
            <label class="form-label" for="form6Example3">Surname</label>
            <input type="text" id="form6Example3" class="form-control"  placeHolder="Surname" />
        </div>

        <div class="form-outline mb-4 input-group-lg">
            <label class="form-label" for="form6Example3">Tc Number</label>
            <input type="text" id="form6Example3" class="form-control"  placeHolder="Tc Number"/>
        </div>

        <div class="form-outline mb-4 input-group-lg">
            <label class="form-label" for="form6Example3">Email</label>
            <input type="email" id="form6Example3" class="form-control"  placeHolder="jane.doe@example.com"/>
        </div>

        <div class="form-outline mb-4 input-group-lg">
            <label class="form-label" for="form6Example3">Phone</label>
            <input type="phone" id="form6Example3" class="form-control"  placeHolder="05xxxxxxxxx"/>
        </div>

        <div class="form-outline mb-4 input-group-lg">
            <label class="form-label" for="form6Example3">Vehicle Number Plate</label>
            <input type="text" id="form6Example3" class="form-control"  placeHolder="Number Plate"/>
        </div>

        <br/>
        <button type="submit" class="btn-lg btn-primary btn-block">Submit</button>
        </form>
        </div>
    );
  }
  
  export default AddUpdateResident;