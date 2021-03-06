import './App.css';
import React, {useState,useEffect} from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
} from "react-google-maps";
import mapStyles from "./Styles/mapStyles";
import Malls from "./Components/Malls/Malls";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Components/Nav";
import Food from "./Components/Restaurants/Food"
import Trails from "./Components/Trails/Trails";
import Bars from "./Components/Bars/Bars";
import Carpark from "./Components/Carpark/Carpark";
import Traffic from "./Traffic";
import {Col,Container,Row} from "react-bootstrap";
import HdbCarparks from "./Components/Carpark/HdbCarparks";

function App() {


    function Map() {

        return (
            <div>
                <Container fluid>
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{lat: 1.3789, lng: 103.8536}}
                    defaultOptions={{styles: mapStyles}}>

                    <BrowserRouter>

                        <Navigation/>

                        <Container fluid>



                        <Switch>

                            <Route path="/" exact>
                                <Carpark />
                            </Route>
                            <Route path="/traffic">
                                <Traffic />
                            </Route>
                            <Route path="/hdb">
                                <HdbCarparks />
                            </Route>
                            <Route path="/mall">
                                <Malls/>
                            </Route>
                            <Route path="/food">
                                <Food />
                            </Route>
                            <Route path="/trails">
                                <Trails />
                            </Route>
                            <Route path="/bars">
                                <Bars />
                            </Route>
                        </Switch>
                        </Container>
                    </BrowserRouter>

                </GoogleMap>

                </Container>
            </div>
        );
    }

    const MapWrapped = withScriptjs(withGoogleMap(Map));
    return (
        <div style={{width: "auto", height: "300px"}}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `100%`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        </div>
    );
}

export default App;
