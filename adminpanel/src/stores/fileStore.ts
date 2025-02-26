import { defineStore } from 'pinia';
import axiosR from '../core/api/http';

interface File {
  id: string;
  name: string;
  type: string;
  url: string;
  userId: string;
}

export const useFileStore = defineStore('fileStore', {
  state: (): { files: File[] } => ({
    files: [] as File[],
  }),

  getters: {
    getAllFiles(state) {
      return state.files;
    },
    getUserFiles: (state) => (userId: string) => {
      if (!Array.isArray(state.files)) {
        console.error('state.files не является массивом!');
        return [];
      }
      return state.files;
    },
  },

  actions: {
    async fetchUserFiles(userId: string): Promise<File[]> {
      try {
        const response = await axiosR.get(`/user/get_user_files/${userId}`);
        const responseData = response.data;

        if (responseData && Array.isArray(responseData.files)) {
          this.files = responseData.files;
        } else {
          console.error('Некорректный формат данных:', responseData);
          this.files = [];
        }
        return this.files;
      } catch (error) {
        console.error(`Ошибка загрузки файлов: ${error}`);
        this.files = [];
        throw error;
      }
    },

    async uploadUserFile(formData: FormData): Promise<void> {
      try {
        const res = await axiosR.post('/user/load_user_file', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(res.data);
      } catch (error) {
        console.error('Ошибка загрузки файла:', error);
        alert('Произошла ошибка при загрузке файла.');
        throw error;
      }
    },

    async deleteUserFile(fileId: string, userId: string): Promise<void> {
      try {
        await axiosR.delete(`/user/delete_user_file`, { data: { fileId } });
        await this.fetchUserFiles(userId);
      } catch (error) {
        console.error(`Error deleting file with ID ${fileId}:`, error);
        throw error;
      }
    },
    async downloadUserFile(fileId: string, fileName: string): Promise<void> {
      try {
        const response = await axiosR.get(
          `/user/download_user_file/${fileName}`,
          {
            responseType: 'blob',
          },
        );

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Ошибка при скачивании файла:', error);
        throw error;
      }
    },
  },
});
