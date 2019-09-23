import React, {Component, Fragment} from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat: 1.3,
    bacon:0.6
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (updatedIngredients) =>{
        const ingredients = {
            ...updatedIngredients
        };
        const sum = Object.keys(ingredients)
                          .map(igKey => ingredients[igKey])
                          .reduce((sum, elementValue) => sum + elementValue, 0);
        this.setState({purchasable: sum > 0})

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancleHandler=() =>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler=() =>{
        alert('You continued!');
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const price = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + price;
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount>0){
            const updatedCount = oldCount-1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;

            const price = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const updatedPrice = oldPrice - price;
            this.setState({
                totalPrice: updatedPrice,
                ingredients: updatedIngredients
            });
            this.updatePurchaseState(updatedIngredients);
        }
        
    }

    render () {
        let enabledInfo = {...this.state.ingredients};
        for(let igKey in enabledInfo)
        {
            enabledInfo[igKey]= enabledInfo[igKey] > 0;
        }
        return (
            <Fragment>
                <Modal show={this.state.purchasing}
                        modalClosed={this.purchaseCancleHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                   price={this.state.totalPrice}
                                   purchaseCanceled={this.purchaseCancleHandler}
                                   purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}/>
                <BuildControls ingredientAdded = {(type) => this.addIngredientHandler(type)}
                                ingredientRemoved = {(type) => this.removeIngredientHandler(type)}
                                enabledInfo = {enabledInfo}
                                price={this.state.totalPrice}
                                purchasable={!this.state.purchasable}
                                orderClicked={this.purchaseHandler}>
                </BuildControls>
            </Fragment>
        );
    }
}

export default BurgerBuilder;