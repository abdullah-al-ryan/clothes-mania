import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3></h3>
        </div>
    }
    else {
        message = <p>Thanks for buying!</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Order summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'grey' : 'red'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button></p>)
            }

            {
                message
            }
            {
                cart.length === 3 ? <p>Do you want to gift 3 persons?</p> : <p>Buy more</p>
            }
            <p>And operator</p>
            {cart.length === 2 && <h2>Double items</h2>}
            <p>Or operator</p>
            {cart.length === 4 || <p>There are not 4 items here.</p>}
        </div>
    );
};

export default Cart;

