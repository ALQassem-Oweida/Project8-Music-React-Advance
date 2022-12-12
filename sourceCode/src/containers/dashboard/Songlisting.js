
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Songlisting({ song, key }) {

    // popup edit

    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow1(false);



    const id = key;
    const [inputs, setSongs] = useState([]);
    console.log(inputs);

    useEffect(() => {
        getUse();
    }, []);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSongs(values => ({ ...values, [name]: value,id:song.id }));
    }

    ///show data

    function getUse() {
        axios.get(`http://localhost/ApiReduxPro8/songs.php/${id}`).then(function (response) {
            console.log(response.data);
            setSongs(response.data);
        });
    
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.put(`http://localhost/ApiReduxPro8/songs.php`, inputs);
        
        setShow1(false);
        window.location.reload(false);
    }



    const deleteSong = (id) => {
        axios.delete(`http://localhost/ApiReduxPro8/songs.php/${id}/delete`).then(function (response) {
            console.log(response.data);
            getUse();
        });
        window.location.reload(false);


    }




    return (
        <>

      
            <tr key={key}>

                <th scope="row">{song.id}</th>
                <td><img src={song.song_image} style={{ width: "100px", height: "70px" }}></img></td>
                <td>{song.song_name}</td>
                <td>{song.singer}</td>
                <td>{song.album}</td>
                <td>{song.genre} </td>
                <td scope="col-2">

                    <Button variant="warning" className='mx-2' onClick={() => setShow1(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                    </Button>
                    <button type="button" className="btn btn-danger" onClick={() => deleteSong(song.id)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </button>
                    {/* <button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button> */}

                </td>

                <Modal size="lg" show={show1} onHide={() => setShow1(false)}>
                    <Modal.Header >
                        <Modal.Title>Edit Song</Modal.Title>
                        <Button variant="secondary" onClick={handleClose}>
                            X
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Song Name</Form.Label>
                                <Form.Control type="text" name='song_name' onChange={handleChange} placeholder={song.song_name} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Singer</Form.Label>
                                <Form.Control type="text" name='singer' onChange={handleChange} placeholder={song.singer} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                {inputs.song_image}
                                <Form.Label>Image Song</Form.Label>
                                <Form.Control type="text" name='song_image' onChange={handleChange} placeholder="Enter Url Image Song" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                {inputs.album}
                                <Form.Label>Album	</Form.Label>
                                <Form.Control type="text" name='album' onChange={handleChange} placeholder={song.album} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                {inputs.genre}
                                <Form.Label>Genre	</Form.Label>
                                <Form.Control type="text" name='genre' onChange={handleChange} placeholder={song.genre} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                {inputs.lyrics}
                                <Form.Label>Lyrics</Form.Label>
                                    <Form.Control as="textarea" name='lyrics' onChange={handleChange} placeholder={song.lyrics} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                {inputs.description}
                                <Form.Label>Description Song</Form.Label>
                                <Form.Control as="textarea" name='description' onChange={handleChange} placeholder={song.description} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </tr>
        </>
    )
}

export default Songlisting