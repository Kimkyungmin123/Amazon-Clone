import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className='header'>
            <Link to="/">
                <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>
            
            <div className='header_search'>
                <input className='header_searchInput' type="text" />
                <SearchIcon className="header_searchIcon"/>

            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>안녕하세요!</span>
                    <span className='header_optionLineTwo'>로그인하기</span>

                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>돌아가기</span>
                    <span className='header_optionLineTwo'>주문내역</span>
                    
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>반가워요</span>
                    <span className='header_optionLineTwo'>ㅋㅋ</span>
                    
                </div>
                <Link to="checkout">
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon/>
                        <span className='header_basketCount'>
                            0
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;