import React from 'react';
import style from './Person.module.css';
const person = (props) => {
    return (
        <div className="Person" className={style.Person}>
            <p onClick={props.click}> My name is {props.name} and I {props.age}</p>
            <input type='text' 
                    value={props.name}
                    onChange={props.changed}
                    >
            </input>
        </div>);
};

export default person;