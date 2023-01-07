import { signUp } from '@/utils/auth';
import React, { FormEvent, useState } from 'react';

const SignUp = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = input;

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signUp(email, password);
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
      <span>SignUp Page</span>
      <form onSubmit={handleOnSubmit}>
        <input type='text' value={email} name='email' placeholder='Email 입력' onChange={handleOnChange} />
        <input type='text' value={password} name='password' placeholder='Password 입력' onChange={handleOnChange} />
        <input type='submit' value='회원가입' />
      </form>
    </div>
  );
};

export default SignUp;
