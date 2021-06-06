import React, {useState} from 'react';
import {Button, Row, Col, Container, Modal, ModalFooter} from "react-bootstrap";
import Review from "./Review";

function Bar({address, name, type, officialWebsite, description, businessHour, reviews}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// console.log("reviews",reviews)
    return (
        <div>
            <Container>
                <Col md={8} className="border-bottom border-2 p-4">

                    <button onClick={handleShow} className="px-4 py-2 my-2 text-dark clickable highlight"> <h2>{name} </h2></button>
                    <p>^ Click to see Reviews!</p>
                    <h4 className="font-weight-light">Type: {type}</h4>
                    <h4 className="font-weight-bold" >Address: {address.unitNumber}-{address.floorNumber} {address.streetName},
                        {address.buildingName} {address.block} {address.postalCode}</h4>
                    {businessHour[0] ? <h4 className="light-blue">Business Hours: {businessHour[0].openTime} - {businessHour[0].closeTime}, {businessHour[0].day}</h4> : ""}
                   {businessHour[1] ? <h4 className="light-blue">{businessHour[1].openTime} - {businessHour[1].closeTime}, {businessHour[1].day}</h4> : ""}

                    <h4 className="font-weight-light"> {description}</h4>




                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Reviews</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6 className="font-weight-light">
                                {reviews.map(({text,rating,authorURL,authorName, time}, i) => (
                                    <Review
                                        key={i}
                                        text={text}
                                        rating={rating}
                                        authorURL={authorURL}
                                        authorName={authorName}
                                        time={time}
                                    />
                                ))}
                                <ModalFooter>
                                    <a href={officialWebsite} target="_blank">Link to Website!</a>
                                </ModalFooter>
                            </h6>
                        </Modal.Body>
                    </Modal>

                </Col>



            </Container>
        </div>
    );
}

export default Bar;
