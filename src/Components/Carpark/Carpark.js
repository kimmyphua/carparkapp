import React, {useEffect, useState} from 'react';
import * as carParkData from '../../jsonfiles/carparkdata.json'
import {Container, Button, Col, Row} from "react-bootstrap";
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
        let car2 = allCarparks.filter((all) => all.Development.toLowerCase().includes(keyword))
        setCarpark(car2)
    }, [keyword])

    return (
        <div>

                <Row>
                    <Col md={4} className="pt-2">
                        <h4 className="text-center border border-dark pink font-weight-light py-2 px-2">
                            <p><Time/></p>
                            Find your nearest carpark locations!
                            Key in your location to check if there are any available lots currently:<br/>
                            <SearchFormCar searchText={setKeyword}
                            setCarpark={setCarpark}/> <br/>
                            Click on the location to see it on the map!
                        </h4>


                    </Col>
                    <Col md={8} className="my-2">
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

