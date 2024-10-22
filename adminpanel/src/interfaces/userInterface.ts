interface IUserData {
  token: string;
  user: IUser | null;
  error: boolean;
  successRes: boolean;
}
interface IUser {
  id: string;
}

export type { IUserData, IUser };
