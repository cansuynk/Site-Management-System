


function Profile(probs) {
  
    let user = probs.userObject;
    
    return (

        <div class="container-fluid px-4">
        <h2 class="mt-4">Profile</h2>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
        <div class="card-body">
        <div className='center'>
        <svg xmlns="http://www.w3.org/2000/svg" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
        </div>

        <div className='center'>
        <h4>{user.name} {user.surname}</h4>
        </div>
        
        <div className="container center">
        <table class="table table-responsive center table-borderless profileTable">
            <thead>
                <tr>
                <th scope="col" colSpan="2"></th>
                </tr>
            </thead>
            <tbody>
  
                <tr>
                <td><strong>Apartment: </strong></td>
                <td>Block {user.block} No: {user.apartmentNo}</td>
                </tr>

                <tr>
                <td><strong>Tc No: </strong></td>
                <td>{user.tcNo}</td>
                </tr>
                  
                <tr>
                <td><strong>Email: </strong></td>
                <td>{user.email}</td>
                </tr>

                <tr>
                <td><strong>Password: </strong></td>
                <td>{user.password}</td>
                </tr>

                <tr>
                <td><strong>Phone: </strong></td>
                <td>{user.phone}</td>
                </tr>

                <tr>
                <td><strong>Vehicle Number Plate: </strong></td>
                <td>{user.numberPlate}</td>
                </tr>
        </tbody>
        </table>

        </div>


        </div>
        </div>
        </div>
    
    

    );
  }
  
  export default Profile;