import React, {useState} from 'react';
import {Card, Row, Container, Button} from "react-bootstrap";
import {GoogleMap, Marker} from "react-google-maps";

function CarparkItem({CarParkID, Development, AvailableLots, Location, LotType, Area, Agency}) {
const [selected, setSelected] = useState( "")
// console.log(Location)
//     console.log(typeof(selected))
   let newSelect = selected.split(" ")
    // console.log(Development)

    return (
        <div>
 <Container>
     <Row className="border-bottom border-5">
                   <button onClick={()=> setSelected(Location)} className=" p-2 highlight clickable ">{Development}</button>
                        <h5 className="font-weight-light">Lot Type: {LotType}</h5>
                        <h5 className="font-weight-light">AvailableLots: {AvailableLots}</h5>
                        <h5 className="font-weight-light">Area: {Area}</h5>
                    <h5 className="font-weight-light">Agency: {Agency}</h5>
     </Row>

 </Container>

            <GoogleMap>

            <Marker
                position={{
                    lat: Number(newSelect[0]),
                    lng: Number(newSelect[1])
                }}
                onClick={() => {
                    alert(Development);
                }}
                onDblClick={ GoogleMap.defaultProps= {
                    center: {
                        lat: Number(newSelect[0]),
                        lng: Number(newSelect[1])
                    },
                    zoom: 12,
                }}
                icon={{
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png",
                    scaledSize: new window.google.maps.Size(20, 20)
                }}/>

            </GoogleMap>

        </div>
    );
}

export default CarparkItem;
