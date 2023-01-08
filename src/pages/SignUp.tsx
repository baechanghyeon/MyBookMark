import { signUp } from '@/utils/auth';
import { REGEX } from '@/utils/validation';
import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = input;

  const navigate = useNavigate();

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate('/login');
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

    if (name === 'email') {
      console.log(REGEX.ID.test(value));
    } else {
      console.log(REGEX.PASSWORD.test(value));
    }
  };

  return (
    <div>
      <span>SignUp Page</span>
      <form onSubmit={handleOnSubmit}>
        <input type='text' value={email} name='email' placeholder='Email 입력' onChange={handleOnChange} />
        <input type='password' value={password} name='password' placeholder='Password 입력' onChange={handleOnChange} />
        <input type='submit' value='회원가입' />
      </form>
      <Link to='/login'>
        <span>로그인 페이지 이동</span>
      </Link>
    </div>
  );
};

export default SignUp;
