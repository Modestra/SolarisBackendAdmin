export interface UserData {
  email: string;
  password: string;
  username: string;
  category: string;
}

export interface SelectionData {
  user_id: string;
  email: string;
  username: string;
  category: string;
  is_admin: boolean;
}
