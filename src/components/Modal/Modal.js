import React from 'react';

import './Modal.css';

const Modal = (props) => {
    return (
        <React.Fragment>
           {
               props.isOpen &&
               <div className="modal">
                    <div className="modal-container">
                        <h4 className="modal-title">{props.title}</h4>
                        <input />
                        <button className="modal-close" onClick={props.handleClose}>x</button>
                        <button className="modal-create" onClick={props.addDatabase}>{props.createDatabase}</button>
                    </div>
               </div>
           }
        </React.Fragment>
    );
}

export default Modal;