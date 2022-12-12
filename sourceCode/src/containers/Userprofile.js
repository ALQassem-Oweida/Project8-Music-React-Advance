import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactDom from "react-dom";
import Modal from "./Modal";



function Userprofile() {


    const navigate = useNavigate();

    const [userInfo, setInfo]=useState({
        name:"",
        email:"",
        phone:"",
        department:''



       }) 

const [bg,setbg]=useState('');
    const [updateMassage,setMassage]=useState('')
    const id = sessionStorage.getItem("id");

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/ApiReduxPro8/reg.php/${id}`).then(function(response) {
            setInfo(response.data);
        });
    }
    console.log(id)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo(values => ({...values, [name]: value}));
    }
    const handleSubmit = (e) => {
        
        e.preventDefault();
        axios.put(`http://localhost/ApiReduxPro8/reg.php/${id}`, userInfo).then(function(response){
            navigate('/Userprofile');
            setMassage('User Data Update Succsesfuly')
        });
        getUser();
        setbg('#4dae3c91')
    }


const portalHandel=()=>{
  setIsOpen(true)
  
}

    const [isOpen, setIsOpen] = useState(false);

    const [value, setValue] = useState({
      value:sessionStorage.getItem('id'),
      top:"50%",
      left:"50%"
  });






    return (
<>
<br/><br/><br/><br/><br/><br/>

<Modal onClose={() => setIsOpen(false)} value={value} open={isOpen}/>

<div className="container mt-5">
<h2 className='mb-4'>Your Profile</h2>
  <div className="main-body">
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">



            <form onSubmit={handleSubmit}>


            <center>
           
               <h4 style={{textAllign:'center',color:'',padding:'10px',backgroundColor:bg}} className="m-3">{updateMassage}</h4>
                
                
              </center> 


{/* id */}
            <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">User Number</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input disabled className="form-control"  value={userInfo.id} />
                </div>
              </div>


{/* Name */}
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="name" type="text" className="form-control"  value={userInfo.name}     onChange={handleChange}/>
                </div>
              </div>

             


{/* Email */}             
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="email" type="email" className="form-control" value={userInfo.email}     onChange={handleChange}/>
                </div>
              </div>

{/* Phone */}              
              {/* <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="phone" type="text" className="form-control"     onChange={handleChange}/>
                </div>
              </div> */}



              <div className="row">
                <div className="col-sm-3" />
                <div className="col-sm-9 text-secondary">
                  <button type="submit" className="btn btn-primary px-4" >Save Changes</button>
                </div>
              </div>
            </form>
          </div>
          
          <button className='btn btn-info' onClick={portalHandel} >Favorite Songs</button>
        </div>
        
      </div>


      
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center"> <br /> <br />
              <img src={userInfo.img} alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
              <div className="mt-3">
                <br />
                
                <br />
              </div>
            </div>
            <hr className="my-2" />
            <br/>
            <div className="row">
              <div className="col-lg-6">
                <label>Registration Date : </label>
              </div>
              <div className="col-lg-6">
                <p className="text-secondary mb-1">{userInfo.created_at}</p>
              </div>
              <br/><br/><br/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  


</div>



</>
  
    );
  }
  
  export default Userprofile;