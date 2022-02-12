
let user = {
    name: "Cansu",
    surname: "Yanık",
    block: "A",
    apartmentNo:"59",
    tcNo: "1111111111111",
    email: "cansuyanik96@gmail.com",
    password: "xxxxxxxx",
    phone: "05303003656",
    numberPlate: "06-CIY-680"
}


function Profile() {
  
  
    return (
            <div className="container">
                <div class="panel">
                  <div class="panel-header text-center">
                   <svg xmlns="http://www.w3.org/2000/svg" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <div class="panel-title h5 mt-10">{user.name} {user.surname}</div>
                    
                  </div>
                  <nav class="panel-nav">
                    <ul class="tab tab-block">
                      <li class="tab-item active"><a href="#panels">Profile</a></li>
                    </ul>
                  </nav>
                  <div class="panel-body">
                  <table class="center">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td> <div class="tile-title text-bold">E-mail</div></td>
                        <td> <div class="tile-subtitle">bruce.banner@hulk.com</div></td>
                        </tr>
                </tbody>
                </table>
                    
                  </div>

                </div>  
                </div>   
    );
  }
  
  export default Profile;