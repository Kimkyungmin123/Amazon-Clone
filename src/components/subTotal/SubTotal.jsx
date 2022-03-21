import React from 'react';
import './subTotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import {useNavigate} from "react-router-dom"


function SubTotal() {

    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <div className='subTotal'>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        총액 ( {basket.length} items) : <strong> {value} 원</strong>
                    </p>
                        <small className='subTotal_gift'>
                            <input type="checkbox" /> 체크박스 입니다.   
                        </small>
                    </>
                )}

                // 소수점 2번째 자리 까지
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'₩'} 
            />

            <button onClick={e => navigate('/payment')}>결제하기</button>

            
        </div>
    );
}

export default SubTotal;