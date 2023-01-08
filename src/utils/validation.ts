export const REGEX = {
  ID: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,19}$/,
  NICKNAME: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,19}$/,
};
