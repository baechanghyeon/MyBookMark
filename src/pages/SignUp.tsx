import { signUp } from '@/utils/auth';
import { REGEX } from '@/utils/validate';
import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  // 입력 상태 값
  const [input, setInput] = useState({
    nickName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { nickName, email, password, passwordConfirm } = input;

  const [valid, setValid] = useState({
    isNickName: false,
    isEmail: false,
    isPassword: false,
    isPasswordConfirm: false,
  });

  const { isNickName, isEmail, isPassword } = valid;

  const [validErrMsg, setValidErrMsg] = useState({
    nickNameMsg: '',
    emailMsg: '',
    passwordMsg: '',
    passwordConfirmMsg: '',
  });

  const { nickNameMsg, emailMsg, passwordMsg, passwordConfirmMsg } = validErrMsg;

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
  };

  useEffect(() => {
    if (password === passwordConfirm) {
      console.log('버튼 상태 변화');
    }
  }, [setInput]);

  return (
    <div>
      <span>SignUp Page</span>
      <form onSubmit={handleOnSubmit}>
        <input type='text' value={nickName} name='nickName' placeholder='닉네임 입력' onChange={handleOnChange} />
        <input type='text' value={email} name='email' placeholder='Email 입력' onChange={handleOnChange} />
        <input type='password' value={password} name='password' placeholder='Password 입력' onChange={handleOnChange} />
        <input
          type='password'
          value={passwordConfirm}
          name='checkPassword'
          placeholder='Password 재입력'
          onChange={handleOnChange}
        />
        <input type='submit' value='회원가입' disabled={true} />
      </form>
      <Link to='/login'>
        <span>로그인 페이지 이동</span>
      </Link>
    </div>
  );
};

export default SignUp;
