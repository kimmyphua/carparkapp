import React, {useEffect, useState} from 'react';
import img1 from "./images/clock.png";

function Time() {
    const d = new Date()
    let date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    const [time, setTime] = useState("");
    function getWeekDay(d) {

        let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = d.getDay();

        return weekdays[day];
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const d = new Date()
            let time= ""
            if(d.getSeconds() < 10){
                time= d.getHours() + ":" + d.getMinutes() + ":" + "0" + d.getSeconds()
            } else if (d.getMinutes() < 10) {
                time = d.getHours() + ":" + "0" + d.getMinutes() + ":" +  d.getSeconds()
            } else {
                time= d.getHours() + ":"  + d.getMinutes() + ":" + d.getSeconds()
            }

            setTime(time)
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div> {date} , {getWeekDay(d)} <img width="40" height="40" src={img1}/> : {time}</div>
    )
}


export default Time;
