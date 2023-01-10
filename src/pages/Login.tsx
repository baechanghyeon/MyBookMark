import { signIn } from '@/utils/auth';
import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = input;

  const navigate = useNavigate();
  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // await signIn(email, password);
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FB_API_KEY}`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const data = await res.json();
      console.log('data', data);
      if (data.error && data.error.message) {
        alert('이메일과 비밀번호를 확인해주세요 ! ');
      }
      //TODO: Private Route 설정해서 이동
      navigate('/');
    } catch (err) {
      //TODO: 상태 값에 따른 경고창 분류
      // alert('아이디와 비밀번호를 다시 한번 확인해주세요.');
      console.warn(err);
    }
  };

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div>
      <span>Login Page</span>
      <form onSubmit={handleOnSubmit}>
        <input type='email' value={email} name='email' placeholder='Email 입력' onChange={handleOnChange} />
        <input type='password' value={password} name='password' placeholder='Password 입력' onChange={handleOnChange} />
        <input type='submit' value='로그인' />
      </form>
      <Link to='/signUp'>
        <span>회원가입 하셨나요?</span>
      </Link>
    </div>
  );
};

export default Login;
