import { defineStore } from "pinia";
import type { CompetitionFields } from "../interfaces/competition/competitionInterface";
import { getCompetitionService } from "../services/get/getCompetition";
import { addCompetitionService } from "../services/add/addCompetition";

export const useCompetitionStore = defineStore("competitionStore", {
  state: () => ({
    competition: [] as CompetitionFields[],
  }),
  getters: {
    getCompetition(state) {
      return state.competition;
    },
  },
  actions: {
    async fetchCompetitions() {
      try {
        const res = await getCompetitionService();
        this.competition = res.data;
        console.log("Competitions fetched:", this.competition);
      } catch (error) {
        console.error("Error fetching competitions:", error);
      }
    },
    async addCompetition(competition: CompetitionFields) {
      try {
        const res = await addCompetitionService(competition);
        this.competition.push(res.data); 
        console.log("Competition added:", res.data);
      } catch (error) {
        console.error("Error adding competition:", error);
      }
    },
  },
});
