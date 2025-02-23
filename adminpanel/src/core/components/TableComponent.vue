<template>
  <ConfirmPopup></ConfirmPopup>
  <DataTable
    paginator
    :rows="10"
    showGridlines
    :value="data"
    tableStyle="width: 80vw;"
  >
    <Column
      v-for="col in config.columns"
      :key="col.field"
      :field="col.field"
      :header="col.column"
    ></Column>
    <Column v-if="config.isEdit" style="width: 80px">
      <template #body="{ data }">
        <div class="flex flex-row justify-center gap-2">
          <Button
            icon="pi pi-pencil"
            @click="onEditable(data)"
            severity="warn"
          ></Button>
          <Button
            icon="pi pi-times"
            @click="onDelete($event)"
            severity="danger"
          ></Button>
        </div>
      </template>
    </Column>
  </DataTable>
  <Dialog
    v-model:visible="visibleEdit"
    modal
    header="Edit Profile"
    :style="{ width: '25rem' }"
  >
    <FormComponent :title="'Изменение'" :form-group="[]" @onSubmit="onEditable">
      <div class="flex justify-end gap-2">
        <Button label="Отменить" severity="danger"></Button>
        <Button label="Изменить" severity="warn"></Button>
      </div>
    </FormComponent>
  </Dialog>
</template>

<script setup lang="ts">
import ConfirmPopup from 'primevue/confirmpopup';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import { TableConfig, TableField } from '../interfaces/tableTypes';
import { useConfirm } from 'primevue/useconfirm';
import Button from 'primevue/button';
import { ModelRef, ref } from 'vue';

const visibleEdit = ref(false);
const confirm = useConfirm();

const onEditable = (data: any) => {
  visibleEdit.value = true;
};
const onDelete = (event: any) => {
  confirm.require({
    target: event.currentTarget,
    message: 'Вы действительно хотите удалить пользователя?',
    rejectProps: {
      label: 'Отменить',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Удалить',
    },
  });
};
const config: ModelRef<TableConfig> = defineModel<TableConfig>('config', {
  default: {} as TableConfig,
});

const data: ModelRef<TableField[]> = defineModel<TableField[]>('data', {
  default: [] as TableField[],
});
</script>

<style lang="scss"></style>
