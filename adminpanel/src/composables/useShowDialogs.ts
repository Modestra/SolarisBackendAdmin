import { ref } from "vue";

export function useDialog<T>() {
  const selectedItem = ref<T | null>(null);
  const changeDialogVisible = ref(false);
  const deleteDialogVisible = ref(false);

  function openChangeDialog(item: T) {
    selectedItem.value = { ...item };
    changeDialogVisible.value = true;
  }

  function openDeleteDialog(item: T) {
    selectedItem.value = { ...item };
    deleteDialogVisible.value = true;
  }

  function closeDialogs() {
    selectedItem.value = null;
    changeDialogVisible.value = false;
    deleteDialogVisible.value = false;
  }

  return {
    selectedItem,
    changeDialogVisible,
    deleteDialogVisible,
    openChangeDialog,
    openDeleteDialog,
    closeDialogs,
  };
}
