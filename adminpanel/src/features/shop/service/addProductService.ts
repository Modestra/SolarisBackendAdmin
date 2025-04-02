import axiosR from '../../../core/api/http';
import type { Product } from '../interfaces/types';

export async function addProductService(product: Product) {
  const res = await axiosR.post('/catalog', product);
  return res.data;
}

export async function getAllProducts() {
  const res = await axiosR.get('/catalog');
  return res;
}
