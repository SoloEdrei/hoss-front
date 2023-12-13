<template>
  <div class="bg-red-500 text-center times text-white text-[1.4em] font-light" v-if="mode == 'QA'">
    QA Environment
  </div>
  <div class="times" v-if="mode == 'PROD'">
    TEST DEV
  </div>

  <div class="bg-green-600 text-center times text-white text-[1.4em] font-medium py-2 grid grid-cols-3 gap-4 ">
    <div class="text-left px-5">test1</div>
    <div>HOSS</div>
    <div class="text-right px-5">{{ currentDate() }}</div>
  </div>

  <div>
    <div class="bg-white text-[#2375b1] Lato text-center text-[1.4em] font-medium py-3 grid grid-cols-2 gap-4 ">
      <div class="text-left ml-5">
        <HeaderIcon page="#" icon="fa-regular fa-clock" />
        <HeaderIcon page="#" icon="fa-regular fa-rectangle-list" />
        <HeaderIcon page="#" icon="fa-regular fa-folder" />
        <HeaderIcon page="#" icon="fa-regular fa-pen-to-square" />
        Employee
      </div>
      <div class="text-black font-light">
        Welcome {{ user }}
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: 'AppHeader',
  components: {FontAwesomeIcon},
  data() {
    return {
      mode: 'QA',
      user: 'Test',
    }
  },
  methods: {
    currentDate() {
      const current = new Date();

      return current.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
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
