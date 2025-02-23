import { defineStore } from "pinia";
import { UserInfo } from "../../interfaces/user/userInterfaces";

export const userInfoStore = defineStore("userInfoStore", {
    state: () => ({ userlist: [] as UserInfo[] }),
    getters: {
        getUsersList: (state) => state.userlist
    },
    actions: {
        setUserList(users: UserInfo[]) {
            return [...this.userlist, users]
        },
        clearList() {
            return this.userlist = []
        }
    }
})