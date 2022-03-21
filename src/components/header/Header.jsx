import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header(){
    // data layer 주고받기 (basket)
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = ()=>{
        if(user){
            auth.signOut(); // signOut() : firebase 메소드, 로그아웃.
        }
    }
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
                    <Link to={!user && '/login'} className='homeLogin'>
                        <spanc onClick={handleAuthentication} className='header_optionLineTwo'>{user ? '로그아웃' : '로그인'}</spanc>
                    </Link>
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

                            {/* optional chaining : 값이 오류가 있을때 모든 프로그램이 망가지는 것이 아니라, 애매한값은 undefined로 반환해서 에러 안나게.*/}
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;