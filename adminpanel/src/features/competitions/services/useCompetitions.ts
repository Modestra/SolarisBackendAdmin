import { ref } from 'vue';
import type { CompetitionFields } from '../types';
import { useCompetitionStore } from '../../../stores/competitionStore';

export const competitionFields = ref<CompetitionFields>({
  title: '',
  description: '',
  task_competitions: '',
});

const competitionStore = useCompetitionStore();

export async function createCompetition(competition: CompetitionFields) {
  try {
    await competitionStore.addCompetition(competition);
  } catch (error) {
    console.error('Error creating competition:', error);
  }
}
