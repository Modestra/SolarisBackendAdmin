import axiosR from "../../core/api/http";
import { CompetitionFields } from "../../interfaces/competition/competitionInterface";

export async function changeCompetitionService(
  competition_id: string,
  competition: CompetitionFields
) {
  const res = await axiosR.put(
    `/competition/update_competition_info/${competition_id}`,
    competition,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res;
}
