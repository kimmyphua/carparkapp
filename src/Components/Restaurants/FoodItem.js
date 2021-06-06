import React, {useState} from 'react';
import {Col, Modal,Container, Button} from "react-bootstrap";
import ReviewFood from "./ReviewFood";

function FoodItem({address, name, cuisine, officialWebsite, reviews, description, businessHour, images}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showRev, setShowRev] = useState(false);
    const handleCloseRev = () => setShowRev(false);
    const handleShowRev = () => setShowRev(true);


// console.log("images",images[0].url)
    return (
        <div>
            <Container>
                <Col md={8} className="border-bottom border-2 p-4 text-center">
                    {images[0] ? <img style={{width: "100%"}} src={images[0].url} alt="pic" /> : "No Pic Available" }
                    <br />
                    <button onClick={handleShow} className="px-4 py-2 my-2 text-dark highlight "> <h3>{name} </h3></button>

                    <h5 className="font-weight-light">Eats: {cuisine}</h5>
                    <h5 className="font-weight-bold" >Address: {address.buildingName} {address.block} {address.floorNumber} -
                        {address.unitNumber} {address.streetName} {address.postalCode}</h5>
                    <button onClick={handleShowRev} className="mx-5 text-center pink highlight"> Reviews ♥</button>
                    {/*<p className="font-weight-light">businessHour: {businessHour[0].day}, From {businessHour[0].openTime} to*/}
                    {/*    {businessHour[0].closeTime}</p>*/}
                    {/*<p className="font-weight-light">location: {location.latitude}, {location.longitude}</p>*/}
                    {/*<p className="font-weight-light"><button onClick={handleShow}> Click to see more </button></p>*/}
                </Col>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><h5>{description}</h5>
                        <a href={officialWebsite} target="_blank"> [Link to website!] </a>
                    </Modal.Body>
                </Modal>

                <Modal show={showRev} onHide={handleCloseRev}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reviews ♥</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 className="font-weight-light">
                            {reviews.map(({text,rating,authorURL,authorName, time}, i) => (
                                <ReviewFood
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

            </Container>
        </div>
    );
}

export default FoodItem;
