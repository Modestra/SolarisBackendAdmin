export interface User {
  id: number;
  username: string;
  password: string;
}

export interface UserInfo {
  user_id: number,
  login: string,
  password: string,
  catogory: string
}

export interface ErrorType {
  message: string;
  statusCode?: number;
}

export interface State {
  user: User | null;
  token: string | null;
  error: ErrorType | null;
  successRes: boolean;
  isAuthenticated: boolean;
}

export interface AuthorisedUser {
  user_id: string,
  email: string,
  username: string,
  password: string,
  category: string,
  is_admin: boolean
}
