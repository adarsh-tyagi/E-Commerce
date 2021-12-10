import React from 'react'
import "./Cart.css"
import {Link} from "react-router-dom"

function CartItemCart({item, deleteCartItems}) {
    return (
        <div className="CartItemCard">
            <img src={item.image} alt={item.name} />
            <div>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                <span>{`Price: Rs.${item.price}`}</span>
                <p onClick={() => deleteCartItems(item.product)}>Remove</p>
            </div>
        </div>
    )
}

export default CartItemCart
