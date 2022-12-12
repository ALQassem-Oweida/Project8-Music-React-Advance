import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";

const AddBlog=(props)=> {
  const [modalShow, setModalShow] = useState(false); // Model show for add
  let id = Math.floor(Math.random() * 1000);
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value,songId:props.songId,user_id:props.user_id }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/ApiReduxPro8/posts.php", inputs)
      .then(function (response) {
        console.log(response.data);
      });
    setInputs("");
    id = 0;
    setModalShow(false);
    window.location.reload(false);
  };

  return (
    <div>
      <div>
        <Modal
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalShow}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add A Post
            </Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              
              <div className="form-group">
                
                <label htmlFor="content">Content</label>
             <div>{inputs.content}</div>
                <textarea
                  className="form-control"
                  name="content"
                  rows="10"
                  onChange={handleChange}
                ></textarea>
              </div>
           
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={()=> setModalShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </form>
        </Modal>


        <div className="container">
      
          <Button
          className="btn btn-dark"

           
            onClick={() => setModalShow(true)}
          >
        Add Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
