import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

let controls = [
    { label: 'Salad', type:'salad' },
    { label: 'Bacon', type:'bacon' },
    { label: 'Cheese', type:'cheese' },
    { label: 'Meat', type:'meat' }
];

const buildControls = (props) => {
    return (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {   
            controls.map(ctrl => (
                <BuildControl key={ctrl.label} Label={ctrl.type}
                            moreClicked={() => props.ingredientAdded(ctrl.type)}
                            lessClicked={() => props.ingredientRemoved(ctrl.type)}
                            enabled={props.enabledInfo[ctrl.type]}/>
                ))
        }
        <button className={classes.OrderButton}
                disabled={props.purchasable}
                onClick={props.orderClicked}>ORDER NOW</button>
    </div>
)};

export default buildControls;