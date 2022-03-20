import React, { useState } from 'react';
import './login.css';
import {Link, useNavigate} from "react-router-dom";
import { auth } from '../../firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = e=>{
        // 새로고침 방지
        e.preventDefault();
        auth
            // firebase에 이메일, 비번 있나 확인시켜줌
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                navigate("/quiz");
            }).catch(error => alert(error.message))

        
    };

    const register = e =>{
        e.preventDefault();
        
        // firebase에 이메일 비번 생성 
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{

            // 성공적으로 생성됬으면 페이지 옮기기.
            if(auth){
                navigate("/quiz");
            }   
        }).catch(error => alert(error.message))

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

// useNavigate :  useNavigate를 통해서 다른페이지로 (행동을 한 이후로 ) 페이지 이동