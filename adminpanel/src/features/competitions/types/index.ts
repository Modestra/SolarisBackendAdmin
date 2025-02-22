import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

export interface Roles {
  value: string;
  label: string;
}

export interface CompetitionFields {
  title: string;
  description: string;
  task_competitions: string;
  [key: string]: string;
}

export interface CreateFormField {
  label: string;
  id: string;
  model: string;
  component: typeof InputText | typeof Textarea;
  placeholder?: string;
  rows?: number;
  cols?: number;
  style?: string;
}
