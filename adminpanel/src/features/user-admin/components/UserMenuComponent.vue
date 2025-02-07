<template>
  <div class="flex flex-row justify-between">
    <SelectButton v-model="value" :options="options" optionLabel="label" />
    <InputGroup class="max-w-xs">
      <InputGroupAddon>
        <i class="pi pi-user"></i>
      </InputGroupAddon>
      <InputText placeholder="Найти пользователя..." />
    </InputGroup>
  </div>
</template>

<script setup lang="ts">
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import { ref } from 'vue';

enum DataTableType {
  Users,
  Teachers,
  Students,
}
const value = ref<string | number>(DataTableType.Users);

const options = ref<{ label: string; value: string | number }[]>([
  { label: 'Пользователи', value: DataTableType.Users },
  { label: 'Учителя', value: DataTableType.Teachers },
  { label: 'Ученики', value: DataTableType.Students },
]);
</script>
