import React, {useEffect, useState} from 'react';
import * as carParkData from '../../jsonfiles/carparkdata.json'
import {Container, Button, Col, Row, Nav} from "react-bootstrap";
import CarparkItem from './carparkItem'
import SearchFormCar from "./SearchFormCar";
import Time from "../../Time";

// console.log(carParkData.default.value)
function Carpark(props) {
    const [carpark, setCarpark] = useState([])
    const [keyword, setKeyword] = useState("orchard")
    // const [showingOrchard, setShowOrchard] = useState(false);
    // const showOrchard = () => setShowOrchard(true);

    useEffect(() => {

        let allCarparks = carParkData.default.value
        let car2 = allCarparks.filter((all) => all.Development.toLowerCase().includes(keyword.toLowerCase()))
        setCarpark(car2)
    }, [keyword])

    return (
        <div>

                <Row>
                    <Col md={4}>
                        <h5 className="text-center border border-dark pink font-weight-light px-2">
                            <p><Time/></p>
                            Find your nearest carpark locations!
                            Key in your location to check if there are any available lots currently:<br/>
                            <SearchFormCar searchText={setKeyword}
                            setCarpark={setCarpark}/>
                            <p>Click on the location to see it on the map!</p>
                            <p>Looking for HDB Car Parks?
                                <Nav.Link href="hdb" className="mx-5 my-3 border border-2 border-dark text-dark clickable">CLICK HERE!</Nav.Link></p>

                        </h5>


                    </Col>
                    <Col md={8} className="">
                        <div className="carpark-container">
                            {carpark.map(({Development, AvailableLots, Location, LotType, Area, Agency, CarParkID}) => (
                                <CarparkItem
                                    key={CarParkID}
                                    Development={Development}
                                    AvailableLots={AvailableLots}
                                    Location={Location}
                                    LotType={LotType}
                                    Area={Area}
                                    Agency={Agency}

                                />
                            ))}
                        </div>

                    </Col>
                </Row>


        </div>
    );
}

export default Carpark;

