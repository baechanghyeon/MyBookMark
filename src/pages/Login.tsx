import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const { email, password } = input;

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        <input type='text' value={password} name='password' placeholder='Password 입력' onChange={handleOnChange} />
        <input type='submit' value='로그인' />
      </form>
      <Link to='/signUp'>
        <span>회원가입 하셨나요?</span>
      </Link>
    </div>
  );
};

export default Login;
