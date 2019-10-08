import React from "react"

import './Card.css'

const Card = props => (
    <div class="project">
        <div class="project-header">
            <h7 className="title"> {props.name} </h7>
        </div>
        <div class="project-techs">
            {props.keyword1.map((p) =>
                <h8 className="techs"> {p} </h8>
            )}
        </div>
        <div class="project-body">
            <h6 className="description" align="justify"> {props.description} </h6>
        </div>
    </div>
);

export default Card;
