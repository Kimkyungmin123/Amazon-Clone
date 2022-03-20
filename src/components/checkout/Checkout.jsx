import React from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import SubTotal from '../subTotal/SubTotal';
import './checkout.css';

function Checkout() {

    const [{basket}, dispatch] = useStateValue(); // 장바구니 정보 가지고 오기 위해

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_adImg'src="https://m.media-amazon.com/images/I/51DNXJGrnrL._SX1500_.jpg" alt="" />

                <div className='checkout_item'>
                    <h2>장바구니 입니다.</h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}


                </div>
            </div>
            <div className='checkout_right'>
                <SubTotal/>
            </div>
            
        </div>
    );
}

export default Checkout;