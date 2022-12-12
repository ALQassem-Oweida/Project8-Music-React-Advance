import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './main.css';
import { Link } from "react-router-dom";





const Register= () => {

    const [formErrors, setFormErrors] = useState({});
    const [data, setData] = useState({
        name: "",
        email: "",
        pass: "",
        mobile: "",
        conpassword: "",
        role:'',

    })

    let navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));
    }

    const submitForm = (e) => {


        e.preventDefault();
        setFormErrors(validate(data));
        if (Object.values(formErrors).length === 0) {
            axios.post('http://localhost/ApiReduxPro8/reg.php', data)
                .then((result) => {
                    if (result.data.Status ==='Invalid') {
                        alert('Invalid Data')
                    } else {
                        navigate('/Login');
                    }
                })
        }
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

        if (!values.mobile) {
            errors.mobile = "mobile is required";
        } else if (!pregex.test(values.mobile)) {
            errors.mobile = "Please enter a valid mobile number";
        }

        if (!values.pass) {
            errors.pass = "Password is required";
        } else if (values.pass.length < 7) {
            errors.pass = "Password must be 8 characters or more";
        } else if (values.pass.length > 12) {
            errors.pass = "Password must be 12 characters or less";
        }

        if (!values.conpassword) {
            errors.conpassword = "Password confirmation is required";
        } else if (values.conpassword !== values.pass) {
            errors.conpassword = "Passwords don't match ";
        }

        if (!values.name) {
            errors.name= "name is required";
        }

        return errors;
    };





    return (


        <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo mt-5">
                <div className="wrapper wrapper--w680">
                    <div className="card card-1">
                        <div className="card-heading" />
                        <div className="card-body">
                            <h2 className="title">Sign up Info</h2>
                            <form onSubmit={submitForm}>
                            <div className="input-group">
                                    <input className="input--style-1 @error('name') is-invalid @enderror" placeholder="NAME" name="name"
                                    onChange={handleChange}
                                    value={data.name} />
                                    <p className="errors">{formErrors.name}</p>

                                </div>
                                <div className="input-group">
                                    <input className="input--style-1 @error('mobile') is-invalid @enderror" placeholder="number" name="mobile"
                                    onChange={handleChange}
                                    value={data.mobile} />
                                    <p className="errors">{formErrors.mobile}</p>

                                </div>

                                <div className="input-group">
                                    <input className="input--style-1  @error('email') is-invalid @enderror" type="email" placeholder="Email " name="email"
                                    onChange={handleChange}
                                    value={data.email} />
                                    <p className="errors">{formErrors.email}</p>

                                </div>
                                <div className="input-group">
                                    <input className="input--style-1 @error('pass') is-invalid @enderror" type="password" placeholder="password " name="pass"
                                    onChange={handleChange}
                                    value={data.pass} />
                                    <p className="errors">{formErrors.pass}</p>

                                </div>

                                <div className="input-group">
                                    <input className="input--style-1" id="password-confirm" type="password" placeholder="confirm password " name="conpassword" required
                                    onChange={handleChange}
                                    value={data.conpassword}
                                    />
                                    <p className="errors">{formErrors.conpassword}</p>

                                </div>
                                
                                
                                <div className="p-t-20">
                                    <button className="btn btn-primary btn-block mb-4" type="submit">Regester</button>
                                    <div class="text-center"><p>Already have an account ? <Link to="/login">Login</Link></p> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
    )
}
export default Register