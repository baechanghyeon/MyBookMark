// export const REGEX = {
//   ID: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
//   PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,19}$/,
//   NICKNAME: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,19}$/,
// };

const validate = ({ email, password }: any) => {
  const errors = {
    email: '',
    password: '',
  };

  if (!email) {
    errors.email = '이메일이 입력되지 않앗습니다.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = '입력된 이메일이 유효하지 않습니다.';
  }

  if (!password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  } else if (password.length < 8) {
    errors.password = '8자 이상의 패스워드를 사용해야 합니다.';
  }

  return errors;
};

export default validate;
