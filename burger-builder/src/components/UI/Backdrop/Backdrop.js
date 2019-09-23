import React from 'react';

import classed from './Backdrop.module.css';

const backdrop =(props) => {
    return(
            props.show ? 
                <div className={classed.Backdrop}
                     onClick={props.clicked}>
                </div> 
                : null);
};

export default backdrop;