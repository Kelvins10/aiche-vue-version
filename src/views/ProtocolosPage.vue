<template>
  <div class="Banner">
    <BannerProtocolos />
  </div>
  <div class="MedidasPrevencion">
    <MedidasPrevencion />
  </div>
</template>

<script>
import BannerProtocolos from "@/components/protocolos/BannerProtocolos.vue";
import MedidasPrevencion from "../components/protocolos/MedidasPrevencion.vue";
export default { components: { BannerProtocolos, MedidasPrevencion } };
</script>

<style></style>
