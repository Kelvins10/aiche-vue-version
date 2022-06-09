<template>
  <div class="BannerCronograma">
    <banner-cronograma />
  </div>
  <div class="CronogramaAiche">
    <CronogramaAiche />
  </div>
</template>

<script>
import BannerCronograma from "@/components/cronograma/BannerCronograma.vue";
import CronogramaAiche from "../components/cronograma/CronogramaAiche.vue";
export default {
  components: { BannerCronograma, CronogramaAiche },
};
</script>

<style></style>
