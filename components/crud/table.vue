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
            <tbody class="divide-y divide-gray-200">
              <tr v-for="employee in employees" :key="employee.email">
                <td v-for="column in tableColumns" :key="column.key" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <template v-if="column.type === 'image'">
                    <img class="w-[100px]" :src="employee[column.key]" alt="">
                  </template>
                  <template v-else-if="column.type === 'qr_code'">
                    <CrudQrcode :qr_code="employee[column.key]" />
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
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CrudQrcode from '@/components/crud/qrcode.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
  { key: 'union', type: 'text' },
  { key: 'valid_driver', type: 'text' },
];
</script>

<script>
export default {
  name: 'App',
  data() {
    return {
      employees: [],
    };
  },
  components: {
    CrudQrcode,
  },
  methods: {
    async getEmployees() {
      this.employees = await $fetch(`${this.$config.public.apiUrl}employees`);
    },
  },
  mounted() {
    this.getEmployees();
  },
};
</script>
