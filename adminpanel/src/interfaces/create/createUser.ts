export interface CreatedUser {
  email: string;
  password: string;
  username: string;
  category: string;
  teacherId?: string;
  user_id?: string | number;
}
