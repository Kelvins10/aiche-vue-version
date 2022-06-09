<template>
  <section class="banner bg-fixed h-[400px] w-full">
    <section
      class="flex h-[420px] w-auto items-center justify-center flex-col text-center text-white"
    >
      <h1 class="text-[40px] font-bold pb-6">CONTÁCTANOS</h1>
    </section>
    <div class="bottom-0 w-full" style="height: 150px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      ></svg>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
      to right,
      hsla(240, 100%, 20%, 0.459),
      hsla(195, 100%, 50%, 0.664)
    ),
    url(../../assets/contactanos/portada.jpg); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
      to right,
      hsla(240, 100%, 20%, 0.459),
      hsla(195, 100%, 50%, 0.664)
    ),
    url(../../assets/contactanos/portada.jpg); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
}
</style>
