<template>
  <div class="banner">
    <div
      class="flex h-[350px] w-full items-center justify-center flex-col text-center"
    >
      <h1 class="text-6xl text-white font-bold">COMPETENCIAS</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 400px;
  background: #00b4db;
  background: -webkit-linear-gradient(
      to right,
      hsla(240, 100%, 20%, 0.459),
      hsla(195, 100%, 50%, 0.664)
    ),
    url(../../assets/competencias/Portada.jpg);
  background: linear-gradient(
      to right,
      hsla(240, 100%, 20%, 0.459),
      hsla(195, 100%, 50%, 0.664)
    ),
    url(../../assets/competencias/Portada.jpg);
  background-size: cover;
  background-attachment: fixed;
}
</style>
