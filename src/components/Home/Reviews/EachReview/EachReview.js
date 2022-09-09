import React from 'react';
import icon from "../../../../images/user.png";
import './EachReview.css';

const dateFormat = require("dateformat");
const EachReview = (props) => {
    const {Name,Review,Date}=props.ReviewData;
    return (
        <div class="col-md-6 col-sm-12 card-design">
            <img class="mr-auto person" src={icon} alt=""></img>
            <h2>{Name}</h2>
            <p>{Review}</p>
            <small>Reviewed : {dateFormat(Date, "dd-mm-yyyy HH:MM TT")}</small>
        </div>
    );
};

export default EachReview;