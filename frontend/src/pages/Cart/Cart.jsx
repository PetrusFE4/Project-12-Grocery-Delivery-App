import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalcartAmount } = useContext(StoreContext);

    const calculateSubtotal = () => {
        return food_list.reduce((acc, item) => {
            if (cartItems[item._id] > 0) {
                return acc + item.price * cartItems[item._id];
            }
            return acc;
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const deliveryFee = 2;
    const total = subtotal + deliveryFee;

    const navigate = useNavigate

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Image</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                                </div>
                                <hr />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${subtotal}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${deliveryFee}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${total}</b>
                        </div>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promo code'/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
