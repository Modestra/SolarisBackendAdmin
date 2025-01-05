import axiosR from "../../api/http";

export async function getCompetitionService() {
  const res = await axiosR.get("/competition", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
