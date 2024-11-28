// src/composables/useAuth.js
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";
import { User } from "../interfaces/userInterfaces";

export function useAuth() {
  const userStore = useUserStore();
  const router = useRouter();
  const passwordVisible = ref(false);

  const formValue: User = reactive({
    username: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      await userStore.login({ ...formValue });
      if (localStorage.getItem("token")) {
        router.push("/account");
      }
    } catch (err) {
      console.error("Ошибка входа", err);
    }
  };
  function logOut() {
    localStorage.removeItem("token");
    router.push("/auth");
  }

  return {
    passwordVisible,
    formValue,
    loginUser,
    logOut,
  };
}
