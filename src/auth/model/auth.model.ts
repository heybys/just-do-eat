export interface LoginInfo {
  username: string;
  password: string;
}

export const LoginInfoDefault: LoginInfo = {
  username: '',
  password: '',
};

export interface RegisterInfo {
  username: string;
  password: string;
  confirmPassword: string;
  address: string;
  phoneNumber: string;
  email?: string;
}

export const RegisterInfoDefault: RegisterInfo = {
  username: '',
  password: '',
  confirmPassword: '',
  address: '',
  phoneNumber: '',
  email: '',
};
