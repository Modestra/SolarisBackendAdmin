import { App } from "vue";

export default {
    install: (app: App) => {
        const _competitionService = new CompetitionService();
        app.provide("CompetitionService", _competitionService)
    }
}

class CompetitionService {

}