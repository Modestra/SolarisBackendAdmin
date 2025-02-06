import { ref } from 'vue';
import { CreatedUser } from '../interfaces/create/createUser';

export function useDialog<T extends CreatedUser>() {
  const selectedItem = ref<T | null>(null);
  const changeDialogVisible = ref<boolean>(false);
  const deleteDialogVisible = ref<boolean>(false);

  function openChangeDialog(item: T): void {
    selectedItem.value = { ...item };
    changeDialogVisible.value = true;
  }

  function openDeleteDialog(item: T): void {
    selectedItem.value = { ...item };
    deleteDialogVisible.value = true;
  }

  function closeDialogs(): void {
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
