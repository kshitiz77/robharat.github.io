import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'


function Product({ id, title, price, rating, image }) {
    const [{cart}, dispatch] = useStateValue();
    const addToCart = () =>{
        // Add item to cart
        dispatch({
            type:"Add_To_Cart",
            item:{
                id:id,
                title:title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
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
            </div>

            <img src={image} alt="" />
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    )
}

export default Product
