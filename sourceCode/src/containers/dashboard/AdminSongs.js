import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Table from 'react-bootstrap/Table';
import Songlisting from './Songlisting'

const AdminSongs = () => {

    // popup add
    const [show, setShow] = useState(false);

    const handleClose1 = () => setShow(false);



    const [inputs, setInput] = useState([]);
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        getUse();
    }, []);



    ///show data

    function getUse() {
        axios.get(`http://localhost/ApiReduxPro8/songs.php`).then(function (response) {
            console.log(response.data);
            setSongs(response.data);
        });
    }

    ////add song
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(`http://localhost/ApiReduxPro8/songs.php`, inputs)
            .then(function (response) {
                console.log(response.data);
            });
        setShow(false);
        getUse();

    };





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
                                <span> &nbsp;&nbsp;|&nbsp;&nbsp;Songs</span>
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
                                <h2>Admin Dashboard Songs</h2>
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
                            <div class="col col-md-10"><b><h3>Songs</h3></b></div>
                            <div class="col col-md-2">
                                <Button variant="success" onClick={() => setShow(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg>   Add Song
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="card-body mt-2">
                        {/* Billing history table*/}

                        <div className="table-responsive table-billing-history">
                            <Table striped bordered hover variant="dark" >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Image Song </th>
                                        <th scope="col">Song Name </th>
                                        <th scope="col"> Singer</th>
                                        <th scope="col">Album </th>
                                        <th scope="col-4">Genre</th>
                                        <th >Action</th>
                                    </tr>
                                </thead>
                                <tbody>{songs.map((song, key) =>

                                    <Songlisting song={song} key={key} />

                                )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>




            {/* Add a song Popup modal */}
            <Modal size="lg" show={show} onHide={() => setShow(false)}>
                <Modal.Header >
                    <Modal.Title>Add Song</Modal.Title>
                    <Button variant="secondary" onClick={handleClose1}>
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Song Name</Form.Label>
                            <Form.Control type="text" name='song_name'
                                onChange={handleChange}
                                required
                                placeholder="Enter name Singer" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Singer</Form.Label>
                            <Form.Control type="text" name='singer' onChange={handleChange}
                                required
                                placeholder="Enter Song Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Image Song</Form.Label>
                            <Form.Control type="text" name='song_image'
                                onChange={handleChange}
                                required
                                placeholder="Enter Url Image Song" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Album	</Form.Label>
                            <Form.Control type="text" name='album'
                                onChange={handleChange}
                                required
                                placeholder="Enter Url Audio Recording" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Genre	</Form.Label>
                            <Form.Control type="text" name='genre'
                                onChange={handleChange}
                                required
                                placeholder="Enter Url Audio Recording" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Lyrics</Form.Label>
                            <FloatingLabel controlId="floatingTextarea" className="mb-3" >
                                <Form.Control as="textarea" name='lyrics'
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Lyrics Song here" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Description Song</Form.Label>
                            <FloatingLabel controlId="floatingTextarea" className="mb-3" >
                                <Form.Control as="textarea" name='description'
                                    onChange={handleChange}
                                    required
                                    placeholder="Leave a Description Song here" />
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>








        </>
    )
}

export default AdminSongs