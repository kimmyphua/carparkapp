import React, {useState} from 'react';
import {Button, Row, Col, Container, Modal} from "react-bootstrap";
import Review from "./Review";

function Bar({address, name, type, officialWebsite, description, businessHour, reviews}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// console.log("reviews",reviews)
    return (
        <div>
            <Container>
                <Col md={8} className="border border-1 p-4">

                    <a href={officialWebsite} target="_blank"> <button className="px-4 py-2 my-2 text-dark clickable highlight"> <h2>{name} </h2></button> </a>
                    <p className="font-weight-light">Type: {type}</p>
                    <p className="font-weight-bold" >Address: {address.unitNumber}-{address.floorNumber} {address.streetName},
                        {address.buildingName} {address.block} {address.postalCode}</p>
                   Business Hours: {businessHour[0] ? <h6>{businessHour[0].openTime} - {businessHour[0].closeTime}, {businessHour[0].day}</h6> : ""}
                   {businessHour[1] ? <h6>{businessHour[1].openTime} - {businessHour[1].closeTime}, {businessHour[1].day}</h6> : ""}

                    <p className="font-weight-light"> {description}</p>

                    <Row>
                    <button className=" highlight" onClick={handleShow}>Click to see Reviews!</button>
                    </Row>



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
                            </h6>
                        </Modal.Body>
                    </Modal>

                </Col>



            </Container>
        </div>
    );
}

export default Bar;
