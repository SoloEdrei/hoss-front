<template>
  <div class="w-100 h-100 bg-white p-[20px]">
    <form @submit.prevent="submitEmail">
      <div class="grid grid-cols-3 gap-6 px-5 py-4">
          <CrudInput name="First Name" field_type="text" v-model="employees.first_name"/>
          <CrudInput name="Photo (Only URL)" field_type="text" v-model="employees.photo"/>
          <CrudInput name="Middle Name" field_type="text" v-model="employees.middle_name"/>
          <CrudInput name="Last Name" field_type="text" v-model="employees.last_name"/>
          <CrudInput name="Role" field_type="text" v-model="employees.role"/>
          <div class="grid grid-cols-2 gap-2">
            <CrudSwitch name="Valid Driver" field_type="boolean" v-model="employees.valid_driver"/>
            <CrudSwitch name="Union" field_type="boolean" v-model="employees.union"/>
          </div>
        <input type="submit" class="mx-1 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" value="Submit"/>
      </div>
    </form>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
    // ...
  },
  data() {
    return {
      employees: {
        first_name: '',
        photo: '',
        middle_name: '',
        last_name: '',
        role: '',
        valid_driver: true,
        union: true,
      },
    }
  },
  methods: {
    async submitEmail() {
      const response = await $fetch('http://localhost:8000/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.employees),
      }).then((res) => {
        this.$router.push('/')
      }).catch((err) => {
        console.log(err)
        alert('Something went wrong!')
      })
    },
  },
}
</script>