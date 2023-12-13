<template>
  <div class="mx-1">
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{{ name }}</label>
    <div class="mt-2">
      <input :type="field_type"
             :name="property"
             :id="property"
             @input="emit('update:modelValue', $event.target.value)"
             class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             :placeholder="name"/>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
</script>

<script>
export default {
  name: 'App',
  props: {
    name: {
      type: String,
      required: true,
    },
    property: {
      type: String,
      required: false,
    },
    field_type: {
      type: String,
      required: false,
    }
  },
  components: {
    // ...
  },
  setup() {
    // ...
  },
}
</script>