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
    files: [],
  }),

  getters: {
    getAllFiles(state) {
      return state.files;
    },
    getUserFiles: (state) => (userId: string) => {
      return state.files.filter((file) => file.userId === userId);
    },
  },

  actions: {
    async fetchUserFiles(userId: string): Promise<void> {
      try {
        const response = await axiosR.get<File[]>(
          `/user/get_user_files/${userId}`,
        );
        this.files = response.data;
      } catch (error) {
        console.error(`Error fetching files for user ${userId}:`, error);
      }
    },

    async uploadUserFile(formData: FormData): Promise<void> {
      try {
        const res = await axiosR.post('/user/load_user_file', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        if (res.status === 200 || res.status === 201) {
          console.log('Файл успешно загружен', res.data);
          await this.fetchUserFiles(formData.get('user_id') as string);
        }
      } catch (error) {
        console.error('Ошибка загрузки файла:', error);
        alert('Произошла ошибка при загрузке файла.');
      }
    },

    async deleteUserFile(fileId: string, userId: string): Promise<void> {
      try {
        await axiosR.delete(`/user/delete_user_file`, { data: { fileId } });
        await this.fetchUserFiles(userId);
      } catch (error) {
        console.error(`Error deleting file with ID ${fileId}:`, error);
      }
    },
  },
});
