import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Table from 'react-bootstrap/Table';

const AdminPosts = () => {


    const [inputs, setInput] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getUse();
    }, []);



    ///show data

    function getUse() {
        axios.get(`http://localhost/ApiReduxPro8/Adminpost.php`).then(function (response) {
            console.log(response.data);
            setPosts(response.data);
        });
    }


    const deletePosts = (id) => {
        axios.delete(`http://localhost/ApiReduxPro8/Adminpost.php/${id}/delete`).then(function (response) {
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
                                <span> &nbsp;&nbsp;|&nbsp;&nbsp;Posts</span>
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
                                <h2>Admin Dashboard Posts</h2>
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
                            <div class="col col-md-10"><b><h3>Posts</h3></b></div>

                        </div>
                    </div>

                    <div className="card-body mt-2">
                        {/* Billing history table*/}

                        <div className="table-responsive table-billing-history">
                            <Table striped bordered hover variant="dark" >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name User </th>
                                        <th scope="col">Song Name  </th>
                                        <th scope="col">Post Content</th>

                                        <th >Action</th>
                                    </tr>
                                </thead>
                                <tbody>{posts.map((post, key) =>


                                    <tr key={key}>

                                        <th scope="row">{post.id}</th>
                                        <td>{post.name}</td>
                                        <td>{post.song_name}</td>
                                        <td>{post.post_content}</td>
                                        <td scope="col-2">
                                            <Button variant="success" className='mx-2' >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </Button>

                                            <button type="button" className="btn btn-danger"  >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                </svg>
                                            </button>

                                            &nbsp;&nbsp;


                                            {/* <button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button> */}
                                            <button type="button" className="btn btn-danger" onClick={() => deletePosts(post.id)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                        </td>

                                    </tr>
                                )}
                                </tbody>

                            </Table>
                        </div>
                    </div>
                </div>
            </div>









        </>
    )
}

export default AdminPosts
