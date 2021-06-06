import React from 'react';
import {Col, Container} from "react-bootstrap";

function FoodItem({address, name, cuisine, officialWebsite, location, description, businessHour, images}) {

// console.log("images",images[0].url)
    return (
        <div>
            <Container>
                <Col md={8} className="border border-1 p-4 text-center">
                    {images[0] ? <img style={{width: "50%"}} src={images[0].url} alt="pic" /> : "No Pic Available" }
                <br />
                    <a href={officialWebsite} target="_blank"> <button className="px-4 py-2 my-2 text-dark highlight "> <h3>{name} </h3></button> </a>
                    <p className="font-weight-light">Eats: {cuisine}</p>
                    <p className="font-weight-bold" >Address: {address.buildingName} {address.block} {address.floorNumber} -
                        {address.unitNumber} {address.streetName} {address.postalCode}</p>
                    {/*<p className="font-weight-light">businessHour: {businessHour[0].day}, From {businessHour[0].openTime} to*/}
                    {/*    {businessHour[0].closeTime}</p>*/}
                    {/*<p className="font-weight-light">location: {location.latitude}, {location.longitude}</p>*/}
                    <p className="font-weight-light"> {description}</p>
                </Col>



            </Container>
        </div>
    );
}

export default FoodItem;
