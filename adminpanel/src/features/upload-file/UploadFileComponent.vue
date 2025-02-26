<template>
  <div class="flex items-center gap-3">
    <label
      for="file-upload"
      class="flex items-center gap-2 px-4 py-2 bg-[#1f2a3e] text-white rounded-lg cursor-pointer transition-all hover:bg-[#142032] hover:shadow-md"
    >
      <i class="pi pi-upload text-lg"></i>
      <span>Загрузить </span>
    </label>
    <input
      id="file-upload"
      type="file"
      class="hidden"
      @change="handleFileUpload"
    />
  </div>
</template>

<script setup lang="ts">
import { useFileStore } from '../../stores/fileStore';

const fileStore = useFileStore();
const props = defineProps<{ userId: string }>();

// const handleFileUpload = async (event: Event) => {
//   const file = (event.target as HTMLInputElement).files?.[0];

//   if (!file) return;
//   const formData = new FormData();
//   formData.append('file', file);
//   formData.append('user_id', String(props.userId));

//   for (let [key, value] of formData.entries()) {
//     console.log(`${key}:`, value);
//   }

//   await fileStore.uploadUserFile(formData);
// };

const handleFileUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  console.log('Загрузка файла для пользователя:', props.userId);
  console.log('Выбран user_id:', props.userId);

  const formData = new FormData();
  formData.append('file', file);
  formData.append('user_id', String(props.userId));

  await fileStore.uploadUserFile(formData);
};
</script>
