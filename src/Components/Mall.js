import React from 'react';
import {Col, Container} from "react-bootstrap";

function Mall({ address, name, rating, officialWebsite, location, description}) {


    return (
        <div>

            <Col md={8} className="border border-1 p-4">
                <a href={officialWebsite} target="_blank"> <h3 className="clickable font-weight-bold pink">Mall: {name}</h3> </a>
                <p className="font-weight-bold" >Address: {address.block}, {address.streetName}, {address.postalCode} </p>
                <p className="font-weight-light">rating: {rating}</p>
                <p className="font-weight-light">location: {location.latitude}, {location.longitude}</p>
                <p className="font-weight-light">description: {description}</p>
            </Col>

        </div>
    );
}

export default Mall;
