<template>
  <banner-component />
  <about-component />
  <address-component />
</template>

<script>
import BannerComponent from "@/components/home/BannerComponent.vue";
import AboutComponent from "@/components/home/AboutComponent.vue";
import AddressComponent from "@/components/home/AddressComponent.vue";
export default {
  components: { BannerComponent, AboutComponent, AddressComponent },
};
</script>

<style></style>
