import { App } from "vue"

export default {
    install: (app: App) => { // Здесь мы устанавливаем плагин (Сервис)
        const _userService = new UserService();
        app.provide("userService", _userService)
    }
}

class UserService {

    getCurrentUser() {
        console.log("Тут мы получаем пользователя")
    }
}