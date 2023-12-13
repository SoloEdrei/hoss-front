<template>
  <a :href="page" class="has-tooltip text-left mx-1 header-icon">
    <font-awesome-icon class="text-white" :icon="icon" />
  </a>
</template>

<script>

export default {
  name: 'HeaderIcon',
  props: {
    page: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      // ...
    }
  },
  methods: {
    // ...
  },
  computed: {
    // ...
  },
  watch: {
    // ...
  },
  mounted() {
    // ...
  }
}

</script>