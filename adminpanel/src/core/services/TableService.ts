import { App } from "vue";
import { TableConfig, TableField } from "../interfaces/tableTypes";


export default {
    install: (app: App) => {
        const _tableService = new TableService();
        app.provide("TableService", _tableService)
    }
}

export class TableService {

    config!: TableConfig;
    fields!: TableField[];

    public getConfig(): TableConfig {
        return this.config;
    }

    public setConfig(config: TableConfig) {
        this.config = config;
    }
}