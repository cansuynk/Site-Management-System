import './css/login.css';
import logo from '../images/SiteMS.png';
import { faHomeLg, faHomeUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
  return (
<div className="container-fluid" id='containerId'>
    
        <div className="col-lg-8" id="col1">
            <div className='logoGroup'>

            <div className='logo center'>
            <img className="mb-4" src={logo} alt="logo"/>
            </div>

            <div class="card-group center">
            <div class="card col-md-6 cards">
                <FontAwesomeIcon id= "icon" icon={faHomeLg}/>
                <div class="card-body">
                <h4 class="card-title">Site/Apartment Manager</h4>
                <p class="card-text text-muted">Create apartments, edit information, assign residents, generate invoices, view payment information, read messages</p>
                </div>
                <div class="card-footer">
                </div>
            </div>
            <div class="card col-md-6 cards">
                <FontAwesomeIcon id= "icon"  icon={faHomeUser} />
                <div class="card-body">
                <h4 class="card-title">Resident</h4>
                <p class="card-text text-muted">View apartment information, view & pay invoices and dues, send a message to the manager</p>
                </div>
                <div class="card-footer">
                </div>
            </div>
            </div>
            </div>
        
        </div>
        <div className="col-lg-4 center" id="col2">
            <div className='signin'>
                <main className="form-signin">
                    <form action="/" method="post">
                        
                        <h1 className="h2 center mb-3 fw-normal">Please sign in</h1>

                        
                        <div className="form-floating">
                            <label for="floatingInput">Email address</label>
                            <input type="email" name="email" className="form-control bottom" placeholder="name@example.com"/>
                            
                        </div>

                        <div className="form-floating">
                            <label for="floatingPassword">Password</label>
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            
                        </div>

                        <button className="btn btn-lg btn-primary btn-block btnCustom" type="submit">Sign in</button>
                    </form>
                </main>  
            </div>     
    </div>
    
</div>
  );
}

export default Login;
