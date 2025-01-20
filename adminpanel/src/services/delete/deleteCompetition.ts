import axiosR from "../../core/api/http";

export async function deleteCompetitionService(competition_id: string) {
  const res = axiosR.delete(
    `/competition/delete_competition/${competition_id}`,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res;
}
