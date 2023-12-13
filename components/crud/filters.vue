<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-6 gap-4">
      <CrudInput name="First Name"/>
      <CrudInput name="Last Name"/>
      <CrudSelect name="Role"/>
      <CrudSelect name="Valid Driver"/>
      <CrudSelect name="Employee Type"/>
      <CrudSelect name="Active"/>
      <CrudSelect name="Employee Id"/>
      <CrudSelect name="Void Operation"/>
      <CrudSelect name="Fuse Type Qualification"/>
      <CrudSwitch name="Peer Inspectors"/>
      <CrudSwitch name="Active Drug Testing"/>
  </div>
  <div class="py-5">
    <a type="button" class="mx-1 rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go</a>
    <a type="button" class="mx-1 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset</a>
    <NuxtLink to="/add" type="button" class="mx-1 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Employee</NuxtLink>
  </div>
</template>

<style scoped>

</style>