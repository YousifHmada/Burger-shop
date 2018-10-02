import React from 'react'

import classes from './Burger.module.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    var ingredients = Object.keys(props.ingredients).map(
        key => [...Array(props.ingredients[key])]
            .map((e, i) => <BurgerIngredient key={key + i} type={key} />)
    ).reduce((arr, cur) => arr.concat(cur), [])
    if (ingredients.length === 0) {
        ingredients = <p>Please add some ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;