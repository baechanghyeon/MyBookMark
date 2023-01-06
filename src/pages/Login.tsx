import React, { FormEvent, useState } from 'react';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const { email, password } = input;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div>
      <span>Login Page</span>
      <form onSubmit={onSubmit}>
        <input type='text' value={email} name='email' placeholder='Email 입력' onChange={onChange} />
        <input type='text' value={password} name='password' placeholder='Password 입력' onChange={onChange} />
        <input type='submit' value='로그인' />
      </form>
    </div>
  );
};

export default Login;
