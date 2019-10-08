import React from 'react';
import { Box } from 'rebass';
import SocialLink from '../../components/SocialLink';

import './Modal.css'

const modal = props => (
    <div className="modal">
        <header className="modal__header">
            <h1>{ props.title }</h1>
            <Box mx={1} fontSize={1}>
                <SocialLink
                    fontAwesomeIcon="fab fa-github"
                    name="Github"
                    url="https://github.com/ferranmontraveta"
                    color="rgb(61, 176, 199)"
                />
            </Box>
            <section className="modal__actions">
                { props.canClose && <button className="button" onClick={props.onClose}>x</button> }
            </section>
        </header>
        <section className="modal__content">
            {props.children}
        </section>
    </div>
);

export default modal;