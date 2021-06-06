import React, {useEffect, useState} from 'react';
import {
    GoogleMap,
    InfoWindow,
    Marker,
} from "react-google-maps";
import Axios from "axios"
import SearchForm from "../SearchForm";
import FoodItem from "./FoodItem";
import {Col, Container,Modal, Row,Button} from "react-bootstrap";
import Time from "../../Time";


function Food(props) {
    const [food, setFood] = useState([])
    const [keyword, setKeyword] = useState("sushi")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function refreshPage() {
        window.location.reload(false);
    }

    function getFood() {

        Axios.get(`https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=${keyword}&language=en&apikey=nyLLOCpLCaXnDknarNEHfemr4ncNO2EV`)
            .then(res => {
                setFood([])
                res.data.data.forEach((object, i) => {
                    setFood(prevState => [...prevState, res.data.data[i]])
                })


            })
    }

    useEffect(() => {
        getFood()

    }, [keyword])


    return (
        <div>

                <Row>
                    <Col sm={4} className="pt-5">
                        <h4 className="text-center border border-dark light-blue font-weight-light pt-2 px-2">
                            <p><Time /></p>
                            I'm hungry for ...
                            <SearchForm searchText={setKeyword}/>

                            <button className="pb-1 my-2" onClick={refreshPage}> Clear Markers</button>
                        </h4>
                    </Col>

                    <Col sm={8} className="pt-5">
                        {food.map(({
                                       address,
                                       name,
                                       cuisine,
                                       officialWebsite,
                                       location,
                                       description,
                                       businessHour,
                                       images
                                   }, i) => (
                            <FoodItem
                                key={i}
                                address={address}
                                name={name}
                                cuisine={cuisine}
                                officialWebsite={officialWebsite}
                                location={location}
                                description={description}
                                businessHour={businessHour}
                                images={images}
                            />
                        ))}
                    </Col>
                </Row>
            {/*<Button variant="primary" onClick={handleShow}>*/}
            {/*    Launch demo modal*/}
            {/*</Button>*/}


            <GoogleMap>
                {food.map((all, j) => (
                    <Marker
                        key={j}
                        position={{
                            lat: all.location.latitude,
                            lng: all.location.longitude
                        }}
                        onClick={GoogleMap.defaultProps = {
                            center: {
                                lat: all.location.latitude,
                                lng: all.location.longitude
                            },
                            zoom: 13,
                        }}
                        onDblClick={() => {
                            handleShow()
                        }}
                        icon={{
                            url: "https://i.imgur.com/yKpKiPIs.png",
                            scaledSize: new window.google.maps.Size(25, 25)
                        }}>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{all.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>


</Marker>
                ))}
            </GoogleMap>

        </div>
    );
}

export default Food;
