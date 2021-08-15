import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "../StateProvider";
function CheckoutProduct({id, title, image, price, rating}) {
    const [{ cart }, dispatch] = useStateValue();

    //Removing items from cart  

    const removeFromCart = () =>{
        dispatch({
            type:"Remove_From_Cart",
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>🌟</p>
                            ))
                    }
                </div>
                <button className="checkoutProduct__button" onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
