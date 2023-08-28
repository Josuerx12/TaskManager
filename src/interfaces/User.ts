export interface login {
  email: string;
  password: string;
}

export interface register {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface user {
  name: string;
  user?: string;
  email: string;
  token: string;
}
