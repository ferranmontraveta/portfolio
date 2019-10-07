import React from 'react';

import './ModalBody.css'

const body = props => (
    <div className="container" id="style-1">
        <div className="overflow">
            <div className="container-column1">
                <div class="project-tags">
                    <h1 className="tags"> {props.tags} </h1>
                </div>
                <div class="project-technologies">
                    <h1 className="tags"> {props.technologies} </h1>
                </div>
                <div class="project-people">
                    <h1 className="tags"> {props.people} </h1>
                </div>
                <div class="project-body" dangerouslySetInnerHTML={{__html: props.text}} />
            </div>

            <div className="container-column2">
                {props.images.map((p) =>
                    <div className="images">
                        <img src={p.fluid.src} alt="image1"></img>
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default body;