<template>
  <div class="Banner">
    <banner-vue />
  </div>
  <div class="Competencias">
    <CompeOficiales />
  </div>
</template>

<script>
import BannerVue from "@/components/competencias/BannerVue.vue";
import CompeOficiales from "../components/competencias/CompeOficiales.vue";
export default {
  components: { BannerVue, CompeOficiales },
};
</script>

<style></style>
