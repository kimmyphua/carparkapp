import React from 'react';
import {Col, Container} from "react-bootstrap";

function Trail({officialWebsite, name, type, contact, description}) {

console.log(contact)
    return (
        <div>
            <Container>
                <Col md={8} className="border border-1 p-4 text-center">
                    <a href={officialWebsite} target="_blank"> <button className="px-4 py-2 my-2 text-dark highlight"> <h2>{name} </h2></button> </a>
                    <p className="font-weight-light"> {type}</p>
                    {contact.primaryContactNo ? <p>Primary Contact :{contact.primaryContactNo} </p>: " " }
                    {contact.secondaryContactNo ? <p>Secondary Contact :{contact.secondaryContactNo} </p> : " " }
                    <p className="font-weight-light"> {description}</p>
                </Col>

            </Container>
        </div>
    );
}

export default Trail;
