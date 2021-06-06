import React, {useState} from 'react';
import {Col, Container, Modal, ModalFooter} from "react-bootstrap";

function Mall({ address, name, rating, officialWebsite, location, description}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <Col md={8} className="p-2">
                <button onClick={handleShow}> <h4>{name}</h4> Click Me!</button>
            </Col>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="font-weight-bold" >Address: {address.block}, {address.streetName}, {address.postalCode} </h5>
                    <h5>{description}</h5>
                    <p className="font-weight-light"> ♥ Mall Rating: {rating}</p>
                </Modal.Body>
                    <ModalFooter>
                    <a href={officialWebsite} target="_blank"> [Link to website!] </a>
                    </ModalFooter>

            </Modal>
        </div>
    );
}

export default Mall;
