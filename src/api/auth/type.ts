export interface PostSignUpProps {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface PostSignInProps {
  email: string;
  password: string;
}

export interface JwtResponse {
  grantType: string;
  accessToken: string;
  refreshToken: string;
}
