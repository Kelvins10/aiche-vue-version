<template>
  <section class="banner bg-fixed h-[550px] w-full">
    <section
      class="flex h-[430px] w-auto items-center justify-center flex-col text-center text-white"
    >
      <h1 class="text-5xl font-bold pb-6">PROCESA 2022</h1>
      <h2 class="text-3xl font-extralight pb-1">
        4th AIChE Latin America Student Regional Conference
      </h2>
      <h3 class="text-xl font-bold">4 al 6 de Agosto del 2022</h3>
    </section>
    <div class="bottom-0 w-full" style="height: 150px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #fff"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.banner {
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
      to right,
      hsla(240, 100%, 20%, 0.459),
      hsla(195, 100%, 50%, 0.664)
    ),
    url(../../assets/home/UTEC_campus.jpg); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
      to right,
      hsla(240, 100%, 20%, 0.459),
      hsla(195, 100%, 50%, 0.664)
    ),
    url(../../assets/home/UTEC_campus.jpg); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
}
</style>
