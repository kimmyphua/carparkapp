import React, {useState} from 'react';
import {Col, Container, Modal,Button} from "react-bootstrap";

function Trail({officialWebsite, name, type, contact, description,body}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

console.log(contact)
    return (
        <div>
            <Container>
                <Col md={8} className="border-bottom border-2 p-4 text-center">
                    <button onClick={handleShow} className="px-4 py-2 my-2 clickable light-green"> <h3>{name} ♥</h3></button>
                    <p>^ Click to Learn More </p>
                    <p className="font-weight-light"> {type}</p>
                    {contact.primaryContactNo ? <p>Primary Contact :{contact.primaryContactNo} </p>: " " }
                    {contact.secondaryContactNo ? <p>Secondary Contact :{contact.secondaryContactNo} </p> : " " }
                    <p className="font-weight-light"> {description}</p>

                </Col>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p> {body.replace(/<\/?p[^>]*>/g, "   ").replace(/<br>\\*/g, "  " ).replace(/<\/?b[^>]*>/g, "   ")}</p>
                        <a href={officialWebsite} target="_blank"> [Link to website!] </a>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
}

export default Trail;
