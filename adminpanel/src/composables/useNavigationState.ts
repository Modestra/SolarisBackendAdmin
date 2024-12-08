import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "../stores/userStore";

export function useNavigationState() {
  const visible = ref(false);
  const exitVisible = ref(false);
  const route = useRoute();
  const useUser = useUserStore();

  function checkPath() {
    if (route.path !== "/auth" && useUser.token?.length) {
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
    checkPath, // Позволяет вручную вызвать checkPath
  };
}
