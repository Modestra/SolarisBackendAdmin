import { ref } from "vue";
import { userData } from "./useValidate";

export const showTeacherForm = ref(false);
export const showStudentForm = ref(false);

export function toggleShowForm() {
  if (userData.category === "Учитель") {
    showTeacherForm.value = true;
    showStudentForm.value = false;
  } else if (userData.category === "Ученик") {
    showStudentForm.value = true;
    showTeacherForm.value = false;
  } else {
    showTeacherForm.value = false;
    showStudentForm.value = false;
  }
}
