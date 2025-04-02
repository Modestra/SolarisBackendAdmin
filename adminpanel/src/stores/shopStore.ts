import { defineStore } from 'pinia';
import { Product } from '../features/shop/interfaces/types';
import { getAllProducts } from '../features/shop/service/addProductService';
import axiosR from '../core/api/http';

export const useShopStore = defineStore('useShopStore', {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    getAllProducts(state) {
      return state.products;
    },
  },
  actions: {
    async fetchAllProducts() {
      const res = await getAllProducts();
      console.log(res.data);
      return res;
    },
    async addNewProduct(product: Product) {
      const res = await axiosR.post('/catalog', product);
      console.log(res.data);
    },
  },
});
