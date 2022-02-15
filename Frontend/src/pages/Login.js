import './css/login.css';
import logo from '../images/SiteMS.png';
import { faHomeLg, faHomeUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
    //Login page
  return (
    <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
        <main>
        
        
        <div className="container-fluid center">
        
        <div className="col-1 p-3"></div>
   
    
        <div className="col-6 p-3"> 
        <div className="container-fluid center">
            <div className='row'>
            <div className="col-12 center logoGroup">
            <img className="mylogo" src={logo} alt="logo"/>
            </div>
            
            <div className="col-6 p-3 card-group">

                <div class="card shadow-lg border-0 rounded-lg mt-4">
                <div class="card-header"><FontAwesomeIcon id= "icon" icon={faHomeLg}/> <br/><strong>Site/Apartment Manager</strong></div>
                <div class="card-body">Create apartments, edit information, assign residents, generate invoices, view payment information, read messages</div>
                </div>
            </div>
            
            <div className="col-6 p-3 card-group">
                <div class="card shadow-lg border-0 rounded-lg mt-4">
                <div class="card-header"><FontAwesomeIcon id= "icon"  icon={faHomeUser}/><br/><strong>Resident</strong></div>
                <div class="card-body">View apartment information, view & pay invoices and dues, send a message to the manager</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        
        <div className="col-1 p-3"></div>
        <div className="col-4 p-3 no-float"> 
            <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                <div class="card-body">
                    <form>
                        <div class="form-floating mb-3">
                            <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                            <label for="inputEmail">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" id="inputPassword" type="password" placeholder="Password" />
                            <label for="inputPassword">Password</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a class="small"></a>
                            <a class="btn btn-primary" href="index.html">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>


        </main>
    </div>
    <div id="layoutAuthentication_footer">
        <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center justify-content-between small">
                    <div class="text-muted">Copyright &copy; SiteMS 2022</div>
                </div>
            </div>
        </footer>
    </div>
</div>
  );
}

export default Login;
