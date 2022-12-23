export interface Profile {
  username: string;
  address: string;
  phoneNumber: string;
  email?: string;
}

export interface RegisterInfo {
  confirmPassword: string;
  address: string;
  phoneNumber: string;
  email?: string;
}
