// import './App.css';
// import Map from "./Components/App"
// import React, {useState, useEffect} from "react";
// import {Container, Col, Row} from "react-bootstrap";
// import {BrowserRouter, Route, Switch} from "react-router-dom";
// import Navigation from "./Components/Nav";
// import img1 from "./images/clock.png";
// import Food from "./Components/Restaurants/Food"
// import Malls from "./Components/Mall";
//
//
//
//
// function Time() {
//   const d = new Date()
//   let date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
//   const [time, setTime] = useState("");
//   function getWeekDay(d) {
//
//     let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//
//     let day = d.getDay();
//
//     return weekdays[day];
//   }
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const d = new Date()
//       let time= ""
//       if(d.getSeconds() < 10){
//         time= d.getHours() + ":" + d.getMinutes() + ":" + "0" + d.getSeconds()
//       } else if (d.getMinutes() < 10) {
//         time = d.getHours() + ":" + "0" + d.getMinutes() + ":" +  d.getSeconds()
//       } else {
//         time= d.getHours() + ":"  + d.getMinutes() + ":" + d.getSeconds()
//       }
//
//       setTime(time)
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//
//   return(
//       <div> {date} , {getWeekDay(d)} <img width="40" height="40" src={img1}/> : {time}</div>
//   )
// }
//
//
// function Appold() {
//
//
//   return (
//
//       <div>
//         <BrowserRouter>
//
//           <Navigation/>
//           <Switch>
//             <Route path="/home" exact>
//
//               <Container>
//                 <Row>
//                   <Col md={4} lg={4}>
//                     <h4 className="border border-dark border-bottom-0 text-center pink mt-5 pt-3 px-2"> <Time /> </h4>
//                   </Col>
//                   <Map/>
//                 </Row>
//               </Container>
//
//             </Route>
//             <Route path="/food" exact>
//
//             </Route>
//             {/*<Route path="/malls">*/}
//             {/*  <Malls />*/}
//             {/*</Route>*/}
//             <Route path="*">
//               Page is not found 404
//             </Route>
//           </Switch>
//         </BrowserRouter>
//
//       </div>
//   );
// }
//
// export default Appold;
