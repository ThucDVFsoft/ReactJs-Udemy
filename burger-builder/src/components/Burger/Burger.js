import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = [];
    for(const igKey in props.ingredients){
        for(let i =0; i< props.ingredients[igKey]; i++){
            transformedIngredients.push(
                <BurgerIngredient key={igKey+i} type={igKey}/>
            );
        }
    }

    if(transformedIngredients.length === 0) {
        transformedIngredients=<p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;