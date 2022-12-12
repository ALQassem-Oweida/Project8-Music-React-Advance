import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./App.css";



const Login = () => {

    const [formErrors, setFormErrors] = useState({});
    let navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
        role:"",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));

    }



    const submitForm = (e) => {
        e.preventDefault();


        axios.post('http://localhost/ApiReduxPro8/login.php', data)

            .then((result) => {
                // console.log(result.data);
                // console.log(result.data[0].role)

                if (result.data.length == 0) {
                    const elem = document.getElementById("errorMassage");
                    elem.innerHTML = "Invalied Email and Password";

                } else if (result.data.length !== 0 && result.data[0].role === 'user') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('id', result.data[0].id);
                    sessionStorage.setItem('role', result.data[0].role);


                    navigate('/');


                } else if (result.data.length !== 0 && result.data[0].role === 'admin') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('id', result.data[0].id);
                    sessionStorage.setItem('role', result.data[0].role);


                    navigate('/');

 
                } else {
                    navigate('/Signup');
                }
            })




    }




    const validate = (values) => {
        const errors = {};
        const regex =
            /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email";
        }

        const pregex = /^[0-9]*$/;


        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 7) {
            errors.password = "Password must be 8 characters or more";
        } else if (values.password.length > 12) {
            errors.password = "Password must be 12 characters or less";
        }
        return errors;
    };







    return (
        <div className="login" >
            <br /><br /><br /><br />
          

                <div className="container">
                    
                  
                            
                                <div className="row p-5">

                                <div className="col-lg-3"></div>
                                    <div className="col-lg-6">
                                    <div className="card rounded-3 text-black">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                            <p id="errorMassage" className="errors"></p>
                                                <h2>Login</h2>
                                            </div><br />


                                            <form onSubmit={submitForm}  >


                                                <div className="row mb-2">{/* Email  */}

                                                    <label
                                                        className="col-md-4 col-form-label ">Email </label>
                                                    <div className="col-md-12">
                                                        <input id="email" type="email"
                                                            className="form-control @error('email')" name="email" 
                                                            onChange={handleChange}
                                                            value={data.email} />
                                                        <p className="errors">{formErrors.email}</p>
                                                    </div>

                                                </div>





                                                <div className="row mb-2">{/* Password  */}
                                                    <label
                                                        className="col-md-4 col-form-label ">Password</label>
                                                    <div className="col-md-12">

                                                        <input id="password" type="password"
                                                            className="form-control"
                                                            name="password" 
                                                            onChange={handleChange}
                                                            value={data.password}
                                                        />
                                                        <p className="errors">{formErrors.password}</p>
                                                    </div>

                                                </div>





                                                <div className="row mb-3">
                                                    <div className="col-md-3"></div>
                                                    <div className="col-md-6">
                                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                                            Login
                                                        </button>
                                                    </div>   
                                                    <div className="col-md-3"></div>                                      
                                                </div>

                                                <div class="text-center"><p>Not a member? <Link to="/regester">Register</Link></p> </div>

                                            </form>

                                        </div>
                                    </div>
                                    </div> 
                                    <div className="col-lg-3"></div>
                                </div>
                            </div>

                      
                    </div>
           
    
       
    )
}
export default Login