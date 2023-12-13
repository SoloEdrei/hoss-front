<template>
  <div v-if="qr_code">
    <a id="" :href="qr_code" target="_blank" class="qr-green left" style="display:block;">
      <img src="https://hoss-qa.hallenconstruction.com/asset/images/qr_green.jpg" alt="">
    </a>
  </div>
  <div v-else>
    <a id="" data-reveal-id="ScanWebCode" data-feid="2738" target="_blank" class="qr-general qr_red" style="display:block;">
      <img src="https://hoss-qa.hallenconstruction.com/asset/images/qr_red.jpg" alt="" class="qr-red">
    </a>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // ...
  },
  props: {
    qr_code: {
      type: String,
      required: false,
    },
  }
}
</script>