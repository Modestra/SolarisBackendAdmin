<template>
  <div>
    <input type="file" @change="handleFileUpload" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useFileStore } from '../../stores/fileStore';

const fileStore = useFileStore();
const props = defineProps<{ userId: string }>();

const handleFileUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];

  if (!file) return;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('user_id', String(props.userId));

  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  await fileStore.uploadUserFile(formData);
};
</script>
