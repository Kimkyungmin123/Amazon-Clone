import React, { useState } from 'react';
import './login.css';
import {Link} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e=>{
        // 새로고침 방지
        e.preventDefault();

        
    };

    const register = e =>{
        e.preventDefault();
    };

    return (
        <div className='login'>
            <Link to='/'> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
            </Link>


            <div className='login_container'>
                <h1>로그인</h1>
                <form>
                    <h5>이메일</h5>
                    <input 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        type="text" 
                    />
                    <h5>비밀번호</h5>
                    <input 
                        type="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />

                    <button className='login_signInBtn' onClick={signIn}>로그인 하기</button>
                </form>

                <p>이용 약관 동의하십니까?</p>
                <button className='login_registerBtn' onClick={register}>회원가입</button>
            </div>
        </div>
    );
}

export default Login;