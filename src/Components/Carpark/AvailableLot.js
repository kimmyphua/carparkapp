import React from 'react';


function AvailableLot({carparkInfo}) {

    return (

        <div className="font-weight-light my-2 py-2 text-center pink">

            <p>Total lots: {carparkInfo[0].total_lots}</p>
            <p className="pink">Current lots available: {carparkInfo[0].lots_available}</p>
            <p>Lot Type: {carparkInfo[0].lot_type}</p>

        </div>
    );
}

export default AvailableLot;

