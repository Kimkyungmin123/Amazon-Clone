import React from 'react';
import './subTotal.css';
import CurrencyFormat from "react-currency-format";

function SubTotal() {
    return (
        <div className='subTotal'>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        총액 ( 0 items) : <strong>0원</strong>
                    </p>
                        <small className='subTotal_gift'>
                            <input type="checkbox" /> 체크박스 입니다.   
                        </small>
                    </>
                )}

                // 소수점 2번째 자리 까지
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button>결제하기</button>

            
        </div>
    );
}

export default SubTotal;