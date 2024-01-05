<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-6 gap-4">
    <CrudInput name="First Name"/>
    <CrudInput name="Last Name"/>
    <CrudSelect name="Role" v-model="role"  :model-value="role" :data="roles"/>
    <CrudSelect name="Valid Driver" v-model="valid_driver"  :model-value="valid_driver" :data="valid_drivers"/>
    <CrudSelect name="Employee Type" v-model="test"  :model-value="test" :data="tests"/>
    <CrudSelect name="Active" v-model="test"  :model-value="test" :data="tests"/>
    <CrudSelect name="Employee" v-model="employee"  :model-value="employee" :data="employees"/>
    <CrudSelect name="Void Operation" v-model="test"  :model-value="test" :data="tests"/>
    <CrudSelect name="Fuse Qualification" v-model="test"  :model-value="test" :data="tests"/>
    <CrudSwitch name="Peer Inspectors" field_type="boolean"/>
    <CrudSwitch name="Active Drug Testing" field_type="boolean"/>
  </div>
  <div class="py-5">
    <a type="button" @click="submitFilters()" class="mx-1 rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go</a>
    <a type="button" class="mx-1 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset</a>
    <NuxtLink to="/add" type="button" class="mx-1 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Employee</NuxtLink>
  </div>
</template>

<style scoped>

</style>

<script>
import { useFiltersStore } from '~/stores/filtersStore'
export default {
  name: 'App',
  components: {
    // ...
  },
  data() {
    return {
      employees: [],
      employee: {
        id: null,
        name: 'All',
      },
      union: null,
      role: {
        id: null,
        name: 'All'
      },
      roles: [],
      valid_driver: {
        id: null,
        name: 'All'
      },
      valid_drivers: [
        { id: null, name: 'All' },
        { id: 1, name: 'Yes' },
        { id: 0, name: 'No' },
      ],
      test: {
        id: null,
        name: '- Select One -'
      },
      tests: [
        { id: null, name: '- Select One -' },
      ],
    }
  },
  methods: {
    async getEmployeesForFilter() {
      const response = await $fetch(`${this.$config.public.apiUrl}employees`);
      response.map((employee) => {
        this.employees.push({ id: employee.id, name: employee.first_name + ' ' + employee.last_name })
        this.roles.push({ id: employee.role, name: employee.role })
      })
    },
    submitFilters() {
      const store = useFiltersStore()
      store.updateFormData(true)
      store.updateFilters(`employee=${this.employee.id}&union=${this.union}&role=${this.role.id}&valid_driver=${this.valid_driver.id}`)
    },
  },
  created() {
    this.employees = [
      { id: null, name: 'All' },
    ];
    this.roles = [
      { id: null, name: 'All' },
    ];

    this.getEmployeesForFilter()
  }
}

</script>