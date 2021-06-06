import React, {useEffect, useState} from 'react';
import {
    GoogleMap,
    InfoWindow,
    Marker,
} from "react-google-maps";
import Axios from "axios"
import SearchForm from "../SearchForm";
import Bar from "./Bar";
import {Col, Container,Modal, Row,Button} from "react-bootstrap";
import Time from "../../Time";


function Bars(props) {
    const [bar, setBar] = useState([])
    const [keyword, setKeyword] = useState("beer")


    function refreshPage() {
        window.location.reload(false);
    }

    function getFood() {

        Axios.get(`https://tih-api.stb.gov.sg/content/v1/bars-clubs/search?keyword=${keyword}&language=en&apikey=nyLLOCpLCaXnDknarNEHfemr4ncNO2EV`)
            .then(res => {
                setBar([])
                res.data.data.forEach((object, i) => {
                    setBar(prevState => [...prevState, res.data.data[i]])
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
                        <p> <Time /></p>
                        I'm looking for a place to drink ...
                        <SearchForm searchText={setKeyword}/>
                        <p>If Markers start to build up, please reload page or click the button below.</p>
                        <button className="pb-1 my-2" onClick={refreshPage}> Clear Markers</button>
                    </h4>
                </Col>

                <Col sm={8} className="pt-5">
                    {bar.map(({
                                   address,
                                   name,
                                   type,
                                   officialWebsite,
                                   description,
                                   businessHour,
                                   reviews

                               }, i) => (
                        <Bar
                            key={i}
                            address={address}
                            name={name}
                            type={type}
                            officialWebsite={officialWebsite}
                            description={description}
                            businessHour={businessHour}
                            reviews={reviews}
                        />
                    ))}
                </Col>
            </Row>



            <GoogleMap>
                {bar.map((all, j) => (
                    <Marker
                        key={j}
                        position={{
                            lat: all.location.latitude,
                            lng: all.location.longitude
                        }}
                        onDlbClick={GoogleMap.defaultProps = {
                            center: {
                                lat: all.location.latitude,
                                lng: all.location.longitude
                            },
                            zoom: 13,
                        }}
                        onClick={() => {
                            alert(all.name)
                        }}
                        icon={{
                            url: "https://cdn.iconscout.com/icon/free/png-512/beer-mug-glass-drink-cocktail-emoj-symbol-babr-30679.png",
                            scaledSize: new window.google.maps.Size(25, 25)
                        }}>




                    </Marker>
                ))}
            </GoogleMap>

        </div>
    );
}

export default Bars;
