import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const AdminComment = () => {

  const [inputs, setInput] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getUse();
  }, []);



  ///show data

  function getUse() {
    axios.get(`http://localhost/ApiReduxPro8/Admincomment.php`).then(function (response) {
      console.log(response.data);
      setComments(response.data);
    });
  }


  const deleteComments = (id) => {
    axios.delete(`http://localhost/ApiReduxPro8/Admincomment.php/${id}/delete`).then(function (response) {
      console.log(response.data);
      getUse();
    });
    getUse();


  }
  return (
    <>
      <br /><br /><br /><br /><br />
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="#"><i className="fa fa-home" /> Home</a>
                <span>Admin Dashboard</span>
                <span> &nbsp;&nbsp;|&nbsp;&nbsp;Comment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}


      {/* Breadcrumb End */}
      <section className="discography spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-title">
                <h2>Admin Dashboard Comments</h2>
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="container-xl px-4 mt-4">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col col-md-10"><b><h3>Comments</h3></b></div>

            </div>
          </div>

          <div className="card-body mt-2">
            {/* Billing history table*/}

            <div className="table-responsive table-billing-history">
              <Table striped bordered hover variant="dark" >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">comment_content</th>
                    <th scope="col">Name user</th>
                    <th scope="col"> Post Content</th>
                    <th >Action</th>
                  </tr>
                </thead>
                <tbody>{comments.map((comment, key) =>


                  <tr key={key}>

                    <th scope="row">{comment.id}</th>
                    <td>{comment.comment_content}</td>
                    <td>{comment.name}</td>
                    <td>{comment.post_content}</td>
                    <td scope="col-2">


                      <button type="button" className="btn btn-danger" onClick={() => deleteComments(comment.id)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                      </button>
                      {/* <button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button> */}

                    </td>

                  </tr>)}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>









    </>
  )
}

export default AdminComment