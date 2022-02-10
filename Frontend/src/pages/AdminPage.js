import './css/adminPage.css';
import logo from '../images/SiteMS.png';
import AdminMenu from './partials/AdminMenu';
import ListApartments from './partials/ListApartments';

function AdminPage() {
  return (
    <div className="container-fluid" id='containerId'>
    
    <nav class="navbar navbar-inverse header">
      <ul class="nav navbar-nav navbar-left">
      <li><a href="#"><img className="d-inline-block align-top logo" src={logo} alt="logo"/></a></li>
    </ul>
    <ul></ul>
    <ul class="nav navbar-nav navbar-left">
      <li><a href="#">SiteMS</a></li>
    </ul>
  
  <div class="container">   
    
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Sign Up</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"> Admin</a></li>
    </ul>
  </div>
  </nav>

    <div className="col-lg-2 center" id="col1"> 
    {<AdminMenu/>}
    </div>

    <div className="col-lg-10" id="col2"> 
    {<ListApartments/>}
    </div>


    </div>
  );
}

export default AdminPage;
