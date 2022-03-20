import React from 'react';
import { useStateValue } from '../../StateProvider';
import './product.css';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = ()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };

    // console.log("장바구니 확인", basket);

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>

                <div className='product_rating'>
                    {
                        // rating크기만큼 array생성되서 mpa으로만든 것을 fill로 채워줌
                        Array(rating).fill().map(()=>(
                            <p>★</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>장바구니 담기</button>
        
        </div>
    );
}

export default Product;