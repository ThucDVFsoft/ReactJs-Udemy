import React from 'react';
import  './Person.css';
import Radium from 'radium';
const person = (props) => {
    const style= {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}> My name is {props.name} and I {props.age}</p>
            <input type='text' 
                    value={props.name}
                    onChange={props.changed}
                    >
            </input>
        </div>);
};

export default Radium(person);