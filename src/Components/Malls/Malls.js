import React, {useEffect, useState} from 'react';
import {
    GoogleMap,
    InfoWindow,
    Marker,
} from "react-google-maps";
import Axios from "axios"
import Mall from "./Mall";
import SearchForm from "../SearchForm";
import {Col, Container,Row} from "react-bootstrap";
import Time from "../../Time";


function Malls(props) {
    const [mall, setMall] = useState([])
    const [keyword, setKeyword] =useState(null)
    // const [selectedMall, setSelectedMall] = useState(null);

    function refreshPage() {
        window.location.reload(false);
    }

   function getMall(){

       Axios.get(`https://tih-api.stb.gov.sg/content/v1/shops/search?keyword=${keyword}&language=en&apikey=nyLLOCpLCaXnDknarNEHfemr4ncNO2EV`)
           .then(res => {
               setMall([])
               res.data.data.forEach((object, i) => {
                   setMall(prevState => [...prevState,res.data.data[i]])
               })
    })
    }

    useEffect(() => {
        getMall()

    }, [keyword])



    return (
        <div>

        <GoogleMap>
            {mall.map((all, j) => (
            <Marker
                key ={j}
                position={{
                    lat: all.location.latitude,
                    lng: all.location.longitude
                }}
                onClick={() => {
                    alert(all.name);
                }}
                onDblClick={ GoogleMap.defaultProps= {
                    center: {
                        lat: all.location.latitude,
                        lng: all.location.longitude
                    },
                    zoom: 14,
                }}
                icon={{
                        url: "https://cdn1.iconfinder.com/data/icons/supermarket-cafe-and-stores/50/10-512.png",
                    scaledSize: new window.google.maps.Size(35, 35)
                }}/>
            ))}

            {/*{selectedMall && (*/}
            {/*    <InfoWindow*/}
            {/*        onCloseClick={() => {*/}
            {/*            setSelectedMall(null);*/}
            {/*        }}*/}
            {/*        position={{*/}
            {/*            lat: selectedMall.location.latitude,*/}
            {/*            lng: selectedMall.location.longitude*/}
            {/*        }}*/}

            {/*    >*/}
            {/*        <div>*/}
            {/*            <h2>{selectedMall.name}</h2>*/}
            {/*            <p>{selectedMall.description}</p>*/}
            {/*        </div>*/}
            {/*    </InfoWindow>*/}
            {/*)}*/}
        </GoogleMap>

                <Row className="justify-content-between align-content-center">
                    <Col md={4} className="pt-2">
                        <h4 className="text-center border border-dark pink font-weight-light py-2 px-2">
                            <p> <Time /></p>
                            Mall Finder: Type somewhere you would like to visit!
                            <SearchForm searchText={setKeyword}/>
                            <p>If Markers start to build up, please reload page or click the button below.</p>
                            <button className="pb-1 my-2" onClick={refreshPage}> Clear Markers </button>

                        </h4>
                    </Col>

                <Col md={8} className="pt-2 mall-container ">
                        {mall.map(({address, name, rating, officialWebsite, location, description}, i) => (
                            <Mall
                                key={i}
                                address={address}
                                name={name}
                                rating={rating}
                                officialWebsite={officialWebsite}
                                location={location}
                                description={description}
                            />
                        ))}
                </Col>
            </Row>

        </div>
    );
}

export default Malls;
