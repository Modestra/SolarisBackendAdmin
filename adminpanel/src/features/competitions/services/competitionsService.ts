import axiosR from '../../../core/api/http';
import { CompetitionFields } from '../types';

export async function addCompetitionService(competition: CompetitionFields) {
  const res = await axiosR.post(
    '/competition/competition_create',
    competition,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res;
}

export async function changeCompetitionService(
  competition_id: string,
  competition: CompetitionFields,
) {
  const res = await axiosR.put(
    `/competition/update_competition_info/${competition_id}`,
    competition,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res;
}

export async function deleteCompetitionService(competition_id: string) {
  const res = axiosR.delete(
    `/competition/delete_competition/${competition_id}`,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res;
}

export async function getCompetitionService() {
  const res = await axiosR.get('/competition', {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}
