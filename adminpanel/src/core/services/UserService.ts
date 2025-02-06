import { App } from 'vue';
import { AuthModel } from '../types/auth';
import axiosR from '../api/http';

export default {
  install: (app: App) => {
    const _userService = new UserService();
    app.provide('UserService', _userService);
  },
};

class UserService {
    private _axiosR = axiosR;

    public loginAdmin(data: AuthModel) {
        return this._axiosR.post("/auth/login", data)
    }

    public getListUsers(){
        return this._axiosR.get("/user")
    }
}
