import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';

import './Modal.css'

const modal = props => (
    <div className="modal">
        <header className="modal__header">
            <h1>{ props.title }</h1>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" name="fab fa-github" />
            </a>
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