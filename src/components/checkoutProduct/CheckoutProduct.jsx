import React from 'react';
import { useStateValue } from '../../StateProvider';
import './checkoutProduct.css';

function CheckoutProduct({id, image, title, price, rating}) {

    // dispatch하려면 data layer가져와야함
    const [{basket},dispatch] = useStateValue();;


    const removeFromBasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            
                id,
            
            });
    }


    return (
        <div className='checkoutProduct'>

            <img src={image} alt="" />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>
                    {title}
                </p>
                <p className='checkoutProduct_price'>
                    <small>₩</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>

                <div className='checkoutProduct_rating'>
                    {
                        Array(rating).fill().map(()=>(
                            <p>★</p>
                        ))
                    }
                </div>

                <button onClick={removeFromBasket}>장바구니에서 제거하기</button>

            </div>
            
        </div>
    );
}

export default CheckoutProduct;