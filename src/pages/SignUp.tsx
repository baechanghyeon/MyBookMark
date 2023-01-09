import { signUp } from '@/utils/auth';
import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

interface FormValue {
  email: string;
  password: string;
  passwordConfirm?: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('password');

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<FormValue> = async (data) => {
    try {
      await signUp(data.email, data.password);
      navigate('/login');
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <label>email : </label>
        <input
          type='text'
          {...register('email', {
            required: true, // 필수 입력 값
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors.email && errors.email.type === 'required' && <div>이메일이 입력되지 않았습니다.</div>}
        {errors.email && errors.email.type === 'pattern' && <div>입력된 이메일이 유효하지 않습니다.</div>}
        <br />
      </div>
      <div>
        <label>password : </label>
        <input
          type='password'
          {...register('password', {
            required: true,
            minLength: 6,
          })}
        />
        {errors.password && errors.password.type === 'required' && <div>비밀번호가 입력되지 않았습니다. </div>}
        {errors.password && errors.password.type === 'minLength' && <div>6자 이상의 비밀번호를 입력해주세요. </div>}
        <br />
      </div>
      <div>
        <label>passwordConfirm : </label>
        <input
          type='password'
          {...register('passwordConfirm', {
            required: true,
            validate: (value) => value === passwordRef.current,
          })}
        />
        {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' && (
          <div>입력하신 비밀번호와 일치하지 않습니다.</div>
        )}
        <br />
      </div>
      <input type='submit' value='회원가입' />
    </form>
  );
};

export default SignUp;
