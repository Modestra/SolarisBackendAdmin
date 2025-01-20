import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export function useNavigationState() {
  const visible = ref(false);
  const exitVisible = ref(false);
  const route = useRoute();

  function checkPath() {
    if (localStorage.getItem("token")) {
      exitVisible.value = true;
    } else {
      exitVisible.value = false;
    }
  }

  watch(() => route.path, checkPath);

  function handleLinkClick() {
    visible.value = !visible.value;
  }

  return {
    visible,
    exitVisible,
    handleLinkClick,
    checkPath,
  };
}
