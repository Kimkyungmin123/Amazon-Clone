import React from 'react';
import SubTotal from '../subTotal/SubTotal';
import './checkout.css';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_adImg'src="https://m.media-amazon.com/images/I/51DNXJGrnrL._SX1500_.jpg" alt="" />

                <div className='checkout_item'>
                    <h2>장바구니 입니다.</h2>
                </div>
            </div>
            <div className='checkout_right'>
                <SubTotal/>
            </div>
            
        </div>
    );
}

export default Checkout;