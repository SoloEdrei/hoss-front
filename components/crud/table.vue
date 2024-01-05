<template>
  <div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300" name="">
            <thead>
              <tr>
                <th v-for="header in tableHeaders" :key="header.key" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  {{ header.label }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200" v-if="employees.length > 0">
              <tr v-for="employee in employees" :key="employee.email">
                <td v-for="column in tableColumns" :key="column.key" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <template v-if="column.type === 'image'">
                    <img class="w-[100px]" :src="employee[column.key]" alt="">
                  </template>
                  <template v-else-if="column.type === 'qr_code'">
                    <CrudQrcode :qr_code="employee[column.key]" />
                  </template>
                  <template v-else-if="column.type === 'boolean'">
                    {{ employee[column.key] ? 'Yes' : 'No' }}
                  </template>
                  <template v-else>
                    {{ employee[column.key] }}
                  </template>
                </td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">    <FontAwesomeIcon icon="fa-pen-to-square" class="text-lg" /><span class="sr-only "> {{ employee.name }}</span></a>
                </td>
              </tr>
            </tbody>
            <tbody class="divide-y divide-gray-200" v-else>
              <tr>
                <td colspan="10" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                  No employees found. Try another filter combination or <NuxtLink to="/add" class="text-indigo-600 hover:text-indigo-900">add a new employee</NuxtLink>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CrudQrcode from '@/components/crud/qrcode.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useFiltersStore } from '~/stores/filtersStore'
const runtimeConfig = useRuntimeConfig();


const updatable = ref(useFiltersStore().updatable);
const filters = ref(useFiltersStore().filters);

watch(() => useFiltersStore().updatable, (newStatus) => {
  if (newStatus) {

    getEmployees('?'+useFiltersStore().filters);

    useFiltersStore().updateFormData(false);
  }
});

const tableHeaders = [
  { key: 'id', label: 'Employee ID' },
  { key: 'photo', label: 'Employee Photo' },
  { key: 'qr_code', label: 'QR Code' },
  { key: 'first_name', label: 'First Name' },
  { key: 'middle_name', label: 'Middle Name' },
  { key: 'last_name', label: 'Last Name' },
  { key: 'role', label: 'Role' },
  { key: 'union', label: 'Union' },
  { key: 'valid_driver', label: 'Valid Driver' },
  { key: 'actions', label: 'Actions' },
];

const tableColumns = [
  { key: 'id', type: 'text' },
  { key: 'photo', type: 'image' },
  { key: 'qr_code', type: 'qr_code' },
  { key: 'first_name', type: 'text' },
  { key: 'middle_name', type: 'text' },
  { key: 'last_name', type: 'text' },
  { key: 'role', type: 'text' },
  { key: 'union', type: 'boolean' },
  { key: 'valid_driver', type: 'boolean' },
];

const employees = ref([]);

const getEmployees = async (filters) => {
  const apiUrl = runtimeConfig.public.apiUrl;

  employees.value = await $fetch(`${apiUrl}employees${filters}`);
};

onMounted(() => {
  getEmployees('');
  useFiltersStore().updateFormData(false);

});
</script>
