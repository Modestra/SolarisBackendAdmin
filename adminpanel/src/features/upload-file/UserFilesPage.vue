<template>
  <div class="max-w-[1200px] mx-auto flex flex-col gap-6 pt-4">
    <button
      @click="$router.push('/users')"
      class="px-4 py-2 w-fit bg-[#1f2a3e] text-white rounded-lg transition-all duration-200 hover:bg-[#142032] hover:shadow-md"
    >
      ⬅ Назад
    </button>
    <div class="flex items-center gap-4">
      <h2 class="text-2xl font-bold text-[#1f2a3e]">Файлы пользователя</h2>
      <UploadFileComponent :userId="userId" />
    </div>
    <div v-if="isLoading">
      <LoaderComponent :isLoading="isLoading" />
    </div>

    <div
      v-if="!isLoading && files.length > 0"
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center"
    >
      <div
        @click="downloadFile(file)"
        v-for="file in files"
        :key="file.id"
        class="relative flex flex-col items-center gap-3 p-4 bg-white border border-gray-300 rounded-lg shadow-md transition-all hover:shadow-lg w-48"
      >
        <button
          @click="deleteFile(file.id)"
          class="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl font-bold"
        >
          ✖
        </button>
        <img
          class="w-20 h-20 object-cover"
          src="/img/file/file-img.png"
          alt="File"
        />
        <p
          class="text-base font-medium text-center text-gray-700 truncate w-40"
        >
          {{ file.name }}
        </p>
      </div>
    </div>

    <p
      v-if="!isLoading && files.length === 0"
      class="text-gray-500 text-lg text-center"
    >
      Файлы отсутствуют.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFileStore } from '../../stores/fileStore';
import type { File } from '../../stores/fileStore';
import UploadFileComponent from './UploadFileComponent.vue';
import LoaderComponent from '../../core/components/LoaderComponent.vue';

const route = useRoute();
const fileStore = useFileStore();

const userId = route.params.id as string;
const files = ref<File[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  fileStore.fetchCurrent
  try {
    await fileStore.fetchUserFiles(userId);
    files.value = fileStore.getUserFiles(userId);
  } catch (error) {
    console.error('Ошибка при загрузке файлов:', error);
  } finally {
    isLoading.value = false;
  }
});

async function deleteFile(fileId: string) {
  await fileStore.deleteUserFile(fileId, userId);
  await fileStore.fetchUserFiles(userId);
  files.value = fileStore.getUserFiles(userId);
}

async function downloadFile(file: File) {
  try {
    await fileStore.downloadUserFile(file.id, file.name);
  } catch (error) {
    console.error('Ошибка при скачивании файла:', error);
  }
}
</script>
