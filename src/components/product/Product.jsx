import React from 'react';
import './product.css';

function Product({id, title, image, price, rating}) {
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
            <button>장바구니 담기</button>
        
        </div>
    );
}

export default Product;