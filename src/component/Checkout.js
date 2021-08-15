import React from 'react'
import './Checkout.css'
import { useStateValue } from "../StateProvider";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    const [{ cart }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkoutLeft">
                <img className="checkout__ad" src="/img/ad.jpg" alt="" />
                {cart?.length === 0 ? (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Cart is empty </h2>
                        <p> You have no items in your basket. To buy one or more items, click "Add to cart" next to the item</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Cart </h2>
                        {/* List out all of the checkout productsWC. */}
                        {cart?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {cart?.length > 0 && (
                <div className="checkoutRight">
                    <Subtotal />
                </div>
            )
            }
        </div>
    )
}

export default Checkout
