// TODO: create a component that displays a single bakery item

import React from "react";

class BakeryItem extends React.Component {


    render() {
        const addToCart = this.props.addFunction;
        const addToCartPrice = this.props.addFunctionPrice;
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
                <p>{this.props.price}</p>
                <img src={this.props.image} height={100}/>
                <button onClick={() => {
                    addToCart(this.props.name)
                    addToCartPrice(this.props.price)
                }}>
                    Add To Cart
                </button>
            </div>
        );
    }
}

export default BakeryItem
