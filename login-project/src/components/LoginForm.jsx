import React, { useState } from 'react'
import { auth } from '../database/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import Button1 from '../features/Button1';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const onEmailLogin = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // 회원가입에 성공했을 때
            const user = userCredential.user;
            console.log(user);
            setUser(
                {
                    uid:user.uid,
                    email : user.email,
                    displayName : user.displayName,
                }
            )
        })
        .catch((error) => {
            // 회원가입에 실패했을 때
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if(errorCode == "auth/email-already-in-use"){
                alert("동일한 이메일이 있습니다.");
            } 
            else if(errorCode == "auth/weak-password"){
                alert("비밀번호를 6자리 이상 적어주세요");
            }
  });
    }
    // 이메일 로그인 메소드
    const onClickLogin = () => {
        async function getLogin(){
            // 오류가 날 가능성이 있는 모든 코드를 작성
            try{
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log(user);
                setUser(
                    {
                        uid:user.uid,
                        email : user.email,
                        displayName : user.displayName,
                    }
                )
                navigate('/main');
            }
            // 오류가 났을 때 실행할 코드 작성 
            catch (error) {
                // 에러가 났을 때
                console.log(error.code, error.message);
                if(error.code == "auth/user-not-found" || 
                    error.code == "auth/wrong-password"){
                        alert("없는 이메일이거나 비밀번호가 잘못되었습니다.")
                        navigate('/'); 
                    }
                    
            }
        }
        getLogin();
        console.log("로그인");
    }
  return (
    <div>
        <h3>로그인 또는 회원가입 페이지입니다.</h3>
        <form onSubmit={onEmailLogin}>
            <label htmlFor="이메일">이메일</label>
            <input type="email" required
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
            />
            <br />
            <label htmlFor="비밀번호">비밀번호</label>
            <input type="password" required
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
            />
            <br />
            <Button1 bgcolor="green" type="submit">회원가입</Button1>
        </form>
        <Button1 bgcolor="blue" onClick={onClickLogin}>로그인</Button1>
    </div>
  )
}
