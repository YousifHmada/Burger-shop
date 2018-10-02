import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';


class BUrgerBuilder extends Component {

    state = {
        ingredients: {
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Cockpit</div>
            </Aux>
        )
    }

}

export default BUrgerBuilder