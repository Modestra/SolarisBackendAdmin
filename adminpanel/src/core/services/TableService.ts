import { App } from "vue";
import axiosR from "../api/http";
import { AuthModel } from "../types/auth";


export default {
    install: (app: App) => {
        const _tableService = new TableService();
        app.provide("TableService", _tableService)
    }
}

class TableService {

}