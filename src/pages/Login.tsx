import useForm from '@/hooks/useForm';
import React, { useEffect, useState } from 'react';
import validate from '@/utils/validate';

const Login = () => {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  const { email, password } = errors;

  return (
    <div>
      <span>Login Page</span>
      <form onSubmit={handleSubmit}>
        <input type='text' value={values.email} name='email' placeholder='Email 입력' onChange={handleChange} />
        {errors ? email : null}
        <br />
        <input
          type='password'
          value={values.password}
          name='password'
          placeholder='Password 입력'
          onChange={handleChange}
        />
        {errors ? password : null}
        <br />
        <input type='submit' value='로그인' disabled={submitting} />
      </form>
    </div>
  );
};

export default Login;
