import React, { useState, useEffect } from 'react';
import axios from "axios";
import Pagination from "../Pagination";
import { useParams } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import UserEdit from './UserEdit';

const AdminUsers = ({ user }) => {
    const { id } = useParams();

    // popup add
    const [show, setShow] = useState(false);

    const handleClose1 = () => setShow(false);

    // popup edit

    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow1(false);



    const [users, setUsers] = useState([]);
    useEffect(() => {
        // getUsers();
        getUse();
    }, []);


    ///show data

    function getUse() {
        axios.get(`http://localhost/ApiReduxPro8/reg.php`).then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    /////delete

    const deleteUser = (id) => {
        axios.delete(`http://localhost/ApiReduxPro8/reg.php/${id}/delete`).then(function (response) {
            console.log(response.data);
            getUse();
        });

    }

 //For Pagination :

 const [currentPage, setCurrentPage] = useState(1);
 const [usersPerPage] = useState(6);
 // Get current blogs
 const indexOfLastuser = currentPage * usersPerPage;
 const indexOfFirstuser = indexOfLastuser - usersPerPage;
 const currentusers = users.slice(indexOfFirstuser, indexOfLastuser);
 // Change page
 const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                                <span> &nbsp;&nbsp;|&nbsp;&nbsp;Users</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Breadcrumb End */}
            <section className="discography spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title center-title">
                                <h2>Admin Dashboard Users</h2>
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
                            <div class="col col-md-10"><b><h3>Users</h3></b></div>
                        </div>
                    </div>

                    <div className="card-body mt-2">
                        {/* Billing history table*/}

                        <div className="table-responsive table-billing-history">
                            <Table striped bordered hover variant="dark" >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Image  </th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody> {currentusers.map((currentusers, key) =>

                                    <UserEdit user={currentusers} key={key} />
                                )}
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    

                    <div class="card-header">
            <div class="row">
              <div class="col col-md-4"></div>
              <div class="col-lg-4 d-flex justify-content-center align-items-center">
                <div class="pagination__links">

    
                  <Pagination
                    songsPerPage={usersPerPage}
                    totalSongs={users.length}
                    paginate={paginate}
                  />

                </div>
              </div>
              <div class="col-lg-4"></div>
            </div>
          </div>




                </div>
            </div>







        </>
    )
};

export default AdminUsers
