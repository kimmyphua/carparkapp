import React from 'react';

function ReviewFood({text,rating,authorURL,authorName, time}) {
    return (

            <div className="light-blue">
                <p className="font-weight-light"> {text} -by
                    <a href={authorURL} target="_blank">  {authorName}</a> </p>
                <p className="font-weight-light"> Rating: {rating} / 5 posted on : {time} </p>
            </div>

    );
}

export default ReviewFood;
