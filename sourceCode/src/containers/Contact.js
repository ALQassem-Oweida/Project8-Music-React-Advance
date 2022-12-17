import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email:'', phone:'', message:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
      const state = this.state
      state[event.target.name] = event.target.value
      this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault();
 
    let formData = new FormData();
    formData.append('name', this.state.name)
    formData.append('email', this.state.email)
    formData.append('phone', this.state.phone)
    formData.append('message', this.state.message)
 
    axios({
        method: 'post',
        url: `http://localhost/ApiReduxPro8/contact.php`,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        console.log(response)
        alert('New Contact Successfully Added.');  
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
 
  } 
  render() {
    return (
        <div>
      <div className="breadcrumb-option">
        <br /><br /><br /><br /><br /><br /><br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="./Home.js">
                  <i className="fa fa-home" /> Home
                </a>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact__address">
                <div className="section-title">
                  <h2>Contact info</h2>
                </div>
                <p>
                  Feel free to contact us!
                </p>
                <ul>
                  <li>
                    <i className="fa fa-map-marker" />
                    <h5>Address</h5>
                    <p>Amman, Jordan</p>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <h5>Phone</h5>
                    <span>962 775 352251</span>
                    <span>962 796 66889</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <h5>Email</h5>
                    <p>Support@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact__form">
                <div className="section-title">
                  <h2>Get in touch</h2>
                </div>
                <p>
                  Filling out this form will send your message directly to our team!{" "}
                </p>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group className='mb-3 mt-3'>
                    <Form.Control type="text" name='name'  placeholder="Enter your name " value={this.state.name} onChange={this.handleChange}/>
                    {/* <p className="errors">{formErrors.name}</p> */}
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control type="text" name='email'  placeholder="Enter your email" value={this.state.email} onChange={this.handleChange}/>
                    {/* <p className="errors">{formErrors.email}</p> */}
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Control type="text" name='phone'  placeholder="Enter your phone number" value={this.state.phone} onChange={this.handleChange}/>
                    {/* <p className="errors">{formErrors.email}</p> */}

                  </Form.Group>
                  <Form.Group  >
                    <Form.Control as="textarea" name='message'   placeholder='Enter message ' value={this.state.message} onChange={this.handleChange}/>
                    {/* <p className="errors">{formErrors.message}</p> */}

                  </Form.Group>

                  <Button type="submit" className="site-btn">
                    Submit
                  </Button>
                </Form>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    );
  }
}
 
export default Contact;