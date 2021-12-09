import React, { Fragment } from 'react'
import "./Cart.css"
import CartItemCart from "./CartItemCart"

function Cart() {
    return (
        <Fragment>
            <div className="cartPage">
                <div className="cartHeader">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className="cartContainer">
                    <CartItemCart item={item} />
                </div>
            </div>
        </Fragment>
    )
}

export default Cart
