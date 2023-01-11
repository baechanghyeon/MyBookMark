import { auth } from '@/apis/firebase';
import { getIdToken, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const navigate = useNavigate();

  const onSocialClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }
    if (provider !== undefined) {
      const data = await signInWithPopup(auth, provider);
      const ACCESS_TOKEN = await getIdToken(data.user);
      localStorage.setItem('accessToken', ACCESS_TOKEN);
      navigate('/');
      //TODO: 파이어베이스 깃헙 연동 ( 배포 시 사용 )
    }
  };

  return (
    <div>
      <button name='google' onClick={onSocialClick}>
        Continue with Google
      </button>
      {/* <button name='github' onClick={onSocialClick}>
        Continue with Github
      </button> */}
    </div>
  );
};

export default SocialLogin;
