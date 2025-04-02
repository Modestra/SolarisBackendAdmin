<script setup lang="ts">
import { ref, onMounted } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import type { Product } from '../interfaces/types';
import { useShopStore } from '../../../stores/shopStore';

const formConfig = ref([
  {
    id: 'name',
    label: 'Название',
    placeholder: 'Введите название',
    type: 'text',
    required: true,
  },
  {
    id: 'category',
    label: 'Категория',
    placeholder: 'Введите категорию',
    type: 'text',
    required: true,
  },
  {
    id: 'description',
    label: 'Описание',
    placeholder: 'Введите описание',
    type: 'text',
    required: false,
  },
  {
    id: 'price',
    label: 'Цена',
    placeholder: 'Введите цену',
    type: 'number',
    required: true,
  },
  {
    id: 'purchased',
    label: 'Количество',
    placeholder: 'Введите количество',
    type: 'number',
    required: true,
  },
]);

const product = ref<Product>({
  name: '',
  description: '',
  category: '',
  price: '',
  purchased: '',
});

const shopStore = useShopStore();

function addProduct() {
  if (validateProduct()) {
    shopStore.addNewProduct(product.value);
    resetProductForm();
  }
}

function validateProduct(): boolean {
  return formConfig.value.every(
    (field) =>
      !field.required || product.value[field.id as keyof Product] !== '',
  );
}

function resetProductForm() {
  product.value = {
    name: '',
    description: '',
    category: '',
    price: '',
    purchased: '',
  };
}
</script>

<template>
  <form @submit.prevent="addProduct">
    <div
      class="flex flex-col gap-6 mx-auto bg-white shadow-md rounded-lg p-6 w-full max-w-2xl"
    >
      <h3 class="text-lg text-center font-semibold">Добавить товар</h3>

      <div class="flex flex-col gap-3">
        <div
          v-for="field in formConfig"
          :key="field.id"
          class="flex flex-col gap-1"
        >
          <label :for="field.id" class="text-sm font-medium">
            {{ field.label }}
            <span v-if="field.required" class="text-red-500">*</span>
          </label>
          <InputText
            :id="field.id"
            v-model="product[field.id]"
            :placeholder="field.placeholder"
            :type="field.type"
            :required="field.required"
          />
        </div>

        <Button
          label="Добавить товар"
          type="submit"
          :disabled="!validateProduct()"
        />
      </div>
    </div>
  </form>
</template>
