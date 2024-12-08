import { ref } from "vue";

export const visible = ref(false);

export function toggleVisible() {
  visible.value = !visible.value;
}
