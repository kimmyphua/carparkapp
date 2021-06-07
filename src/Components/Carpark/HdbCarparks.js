import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {Container,
    Row,
    Col,
} from "react-bootstrap";
import HdbCarparkItem from "./HdbCarparkItem";
import SearchForm from "../SearchForm";
import {
    GoogleMap,
    Marker,
} from "react-google-maps";
import Pagination from "../../Pagination";
import Time from "../../Time";


function HdbCarparks(props) {


    function refreshPage() {
        window.location.reload(false);
    }

        const [text, setText] = useState("null")
        const [address, setAddress] = useState([])
        const [latLong, setLatLong] = useState([])
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerPage] = useState(10);


        //show Spotify Music



        //API calls
        function getAddress() {

            Axios.get(`https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q=${text}`)
                .then(res => {
                    setAddress(res.data.result.records)
                    res.data.result.records.forEach((add) => {
                        Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?countrycode=sg&address=${add.address}&key=AIzaSyAKPMPbh_3SfeWejrnsrnbNaOdfEZboS4I`)
                            .then( res1 =>  {
                                if(res1.data.results[0]) {
                                    setLatLong(prevState => [...prevState, res1.data.results[0].geometry.location])

                                }
                            })
                    })
                })

        }

    // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            getAddress()
        }, [text])




        //Paginatiom
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = address.slice(indexOfFirstPost, indexOfLastPost);
        const paginate = pageNumber => setCurrentPage(pageNumber);


        //Modal stuff for Google Maps it sucks but meh
        function showAddress(){
            alert("Showing all carparks for" + " " + text)
        }



        return (
        <div>

            <GoogleMap>
                {latLong.map(({lat, lng}, i) => (
                    <Marker
                        key={i}
                        position={{
                            lat: lat,
                            lng: lng
                        }}

                        icon={{
                            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png",
                            scaledSize: new window.google.maps.Size(25, 25)
                        }}
                        onClick={ GoogleMap.defaultProps= {
                            center: {
                                lat: lat,
                                lng: lng
                            },
                            zoom: 12,
                        }}
                        onDblClick={() => showAddress()}
                    />

                ))}


            </GoogleMap>
                <Row>
                    <Col md={4} lg={4} className=" ">
                        <h5 className="text-center border border-dark pink font-weight-light px-2">
                            <Time />
                            Find your nearest carpark locations!
                            Key in your location to check if there are any available lots currently:
                            <SearchForm text={text}
                                        searchText={setText}
                                        address={address.length}

                            />

                            <button className="pb-1 my-2" onClick={refreshPage}> Clear Markers </button>

                        </h5>


                    </Col>
                    <Col md={6} lg={6} className="" >
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={address.length}
                            paginate={paginate}
                        />
                        {currentPosts.map(({address, free_parking, car_park_type, car_park_no}, i) => (
                            <HdbCarparkItem
                                key={i}
                                address={address}
                                free_parking={free_parking}
                                car_park_type={car_park_type}
                                car_park_no={car_park_no}
                            />
                        ))}
                    </Col>

                </Row>

        </div>
    );
}

export default HdbCarparks;
