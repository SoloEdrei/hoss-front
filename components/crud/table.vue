<template>
<div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300" name="">
          <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Employee ID</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Employee Photo</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">QR Code</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">First Name</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Middle Name</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Last Name</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Union</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Valid Driver</th>

            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
          <tr v-for="employee in employees" :key="employee.email">
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ employee.id }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><img class="w-[100px]" :src="employee.photo" alt=""></td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><CrudQrcode :qr_code="employee.qr_code"/></td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ employee.first_name }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ employee.middle_name }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ employee.last_name }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ employee.role }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ humanValue(employee.union) }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ humanValue(employee.valid_driver) }}</td>
            <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" class="text-indigo-600 hover:text-indigo-900"
              >Edit<span class="sr-only">, {{ employee.name }}</span></a
              >
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

</script>

<script>
export default {
  name: 'App',
  data() {
    return {
      employees: {},
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  components: {
    // ...
  },
  methods: {
    async getEmployees() {
      this.employees = await $fetch(`${this.$config.public.apiUrl}employees`);
    },
    humanValue(value) {
      if (value === '1') {
        return 'Yes';
      } else {
        return 'No';
      }
    },
  },
  mounted() {
    this.getEmployees();
  },
  async setup() {

  },
}
</script>