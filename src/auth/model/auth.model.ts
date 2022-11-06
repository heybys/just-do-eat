export interface LoginInfo {
  username: string;
  password: string;
}

export const LoginInfoDefault: LoginInfo = {
  username: '',
  password: ''
}

export interface RegisterInfo {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: string;
  company?: string;
}

export const RegisterInfoDefault: RegisterInfo = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  phoneNumber: ''
}
