import axiosR from "../../api/http";
import { CompetitionFields } from "../../interfaces/competition/competitionInterface";

export async function addCompetitionService(competition: CompetitionFields) {
  const res = await axiosR.post("/competition/competition_create", competition, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
