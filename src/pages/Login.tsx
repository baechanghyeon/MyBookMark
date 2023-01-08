import { signIn } from '@/utils/auth';
import React, { FormEvent, useEffect, useState } from 'react';
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
      await signIn(email, password);
      setInput({
        email: '',
        password: '',
      });
      navigate('/');
    } catch (err) {
      console.log(err);
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
        <input type='text' value={email} name='email' placeholder='Email 입력' onChange={handleOnChange} />
        <input type='password' value={password} name='password' placeholder='Password 입력' onChange={handleOnChange} />
        <input type='submit' value='로그인' />
      </form>
      <div>
        <Link to='/signUp'>
          <span>회원가입 하셨나요?</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
