import React, {useEffect, useState} from 'react';
import {
    GoogleMap,
    InfoWindow,
    Marker,
} from "react-google-maps";
import Axios from "axios"
import SearchForm from "../SearchForm";
import {Col, Container,Row} from "react-bootstrap";
import Trail from "./Trail";
import Time from "../../Time";



function Trails(props) {
    const [trail, setTrail] = useState([])
    const [keyword, setKeyword] =useState("city")
    const [latLong, setLatLong] = useState([])
    // const [selectedTrail, setSelectedMall] = useState(null);

    function refreshPage() {
        window.location.reload(false);
    }

    function getTrail(){

        Axios.get(`https://tih-api.stb.gov.sg/content/v1/walking-trail/search?keyword=${keyword}&sortBy=name&sortOrder=asc&language=en&apikey=nyLLOCpLCaXnDknarNEHfemr4ncNO2EV
`)
            .then(res => {
                setTrail([])
                res.data.data.forEach((object, i) => {
                    setTrail(prevState => [...prevState,res.data.data[i]])
                    Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?countrycode=sg&address=${object.name}&key=AIzaSyAKPMPbh_3SfeWejrnsrnbNaOdfEZboS4I`)
                        .then( res1 =>  {
                            if(res1.data.results[0]) {
                                setLatLong(prevState => [...prevState, res1.data.results[0].geometry.location])

                            }
                        })
                })
            })
    }

    useEffect(() => {
        getTrail()

    }, [keyword])



    return (
        <div>

            <GoogleMap>
                {latLong.map((all, j) => (
                    <Marker
                        key ={j}
                        position={{
                            lat: all.lat,
                            lng: all.lng
                        }}
                        onClick={() => {
                            alert("Showing all results for" + " " + keyword);
                        }}
                        onDblClick={ GoogleMap.defaultProps= {
                            center: {
                                lat: all.lat,
                                lng: all.lng
                            },
                            zoom: 14,
                        }}
                        icon={{
                            url: "https://img.icons8.com/plasticine/2x/flower-doodle.png",
                            scaledSize: new window.google.maps.Size(35, 35)
                        }}/>
                ))}

            </GoogleMap>

                <Row>
                    <Col md={4} className="pt-5">

                        <h4 className="text-center border border-dark light-green font-weight-light pt-2 px-2">
                            <p><Time /></p>
                            Trail Finder: Reconnect with nature!
                            <SearchForm searchText={setKeyword}/>
                            <p>If Markers start to build up, please reload page or click the button below.</p>
                            <button className="pb-1 my-2" onClick={refreshPage}> Clear Markers </button>


                        </h4>
                    </Col>

                    <Col md={8} className="pt-5">
                        {trail.map(({officialWebsite, name, type, contact, description,body}, i) => (
                            <Trail
                                key={i}
                                name={name}
                                contact={contact}
                                description={description}
                                officialWebsite={officialWebsite}
                                body={body}
                            />
                        ))}
                    </Col>
                </Row>
        </div>
    );
}

export default Trails;
