export interface UserToken {
  id: number;
  username: string;
  password: string;
  confirmPassword: string;
  token?: string;
}
