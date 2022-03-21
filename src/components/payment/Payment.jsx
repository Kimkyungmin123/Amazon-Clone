import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import './payment.css';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <div className='payment'>
            <div className='payment_container'>
                <Link to='/checkout' className='checkoutLink'>
                    <h1>장바구니로 돌아가기 ({basket?.length})개의 상품 목록이 존재합니다.</h1>
                </Link>
                

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>배송지</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}의 주소</p>
                        <p>서울특별시</p>
                        <p>강남구</p>
                    </div>
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>상품 목록 </h3>
                </div>
                <div className='payment_items'>
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

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>결제</h3>
                </div>
                <div className='payment_details'></div>
            </div>
        </div>
    );
}

export default Payment;

// user의 정보를 data layer에서 가져와야 함.
// payment의 정보를 use layer에 쏴줘야 함.