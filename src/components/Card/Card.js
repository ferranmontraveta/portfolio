import React from "react"

import './Card.css'

const Card = props => (
    <div class="project">
        <div class="project-header">
            <h7 className="title"> {props.name} </h7>
        </div>
        <div class="project-techs">
            <h8 className="techs"> {props.keyword1} </h8>
            <h8 className="techs"> {props.keyword2} </h8>
            <h8 className="techs"> {props.keyword3} </h8>
        </div>
        <div class="project-body">
            <h6 className="description" align="justify"> {props.description} </h6>
        </div>
    </div>
);

export default Card;
