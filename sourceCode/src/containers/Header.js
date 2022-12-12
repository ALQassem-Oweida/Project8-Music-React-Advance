import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Tests = () => {

  let navigate=useNavigate();
  
  function logout() {
   sessionStorage.clear();
    navigate('/')
  }



  return (

<>





{/* Header Section Begin */}
<header className="header">
  <div className="container">
    <div className="row">
      <div className="col-lg-2 col-md-2">
        <div className="header__logo">
          <Link to="/"><img src="img/logo1.png" alt /></Link>
        </div>
      </div>
      
      <div className="col-lg-10 col-md-10">
        <div className="header__nav">
          <nav className="header__menu mobile-menu">
            <ul >
              <li className="active"><Link to='/'>Home</Link></li>

              <li><Link to="songs">Songs</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
              {sessionStorage.getItem("username")==null? <li><Link to="regester">Register</Link></li>:null}


             
              {sessionStorage.getItem("username")!== null?<><li><Link className="navbar-brand" to='/profile'> <li><a href="#">Hello, {sessionStorage.getItem('username')}</a>
                                            <ul className="dropdown" >
                                
                                                <li><Link to="/userprofile">PROFILE</Link></li>
                                                
                                                
                                                <li  onClick={logout}><Link style={{ color: "#be9efd"}} to="home">  LOGOUT</Link></li>
                                            </ul>
                                        </li></Link></li>
        {sessionStorage.getItem('role')==="admin"?<li><a href="#">Dashboard</a>
                                                <ul className="dropdown">
                                                    <li><Link to="adminsongs">SONGS</Link></li>
                                                    <li><Link to="adminusers">USERS</Link></li>
                                                    <li><Link to="adminoposts">POSTS</Link></li>
                                                    <li><Link to="admincomments">COMMENTS</Link></li>
                                                </ul>
                                            </li>
                                           
        
        
        :<> </>}
        </>
        :<><li><Link  className="navbar-brand" to='/login'>Login</Link></li></>}
              
            </ul>
          </nav>
       
        </div>
      </div>
    </div>
    <div id="mobile-menu-wrap" />
  </div>
</header>
{/* Header Section End */}


</>

);
};

export default Tests;
