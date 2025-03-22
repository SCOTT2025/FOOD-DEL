import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react'; 

const PlaceOrder = () => {

const {totalCartAmount} = useContext(StoreContext); // get total cart amount from context
 

  return (
    <form className="place-order">
       <div className="place-order-left">
         <p className="title">Delivery infomation</p>
         <div className="multi-fields">
          <input type="text" placeholder='Firt Name' />
          <input type="text" placeholder='Last Name' />
         </div>
         <input type="text" placeholder='Email address' />
         <input type="text" placeholder='Street' />
         <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
         </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
         </div>
          <input type="text" placeholder='Phone' />
       </div>

       <div className="place-order-right">
       <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalCartAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${totalCartAmount === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${totalCartAmount === 0 ? 0 : totalCartAmount + 2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
       </div>
    </form>
  )
}

export default PlaceOrder
