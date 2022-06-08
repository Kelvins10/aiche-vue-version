<template>
  <div class="root-app m-0 p-0">
    <navbar-vue :rutas="rutas" />
    <router-view />
    <footer-vue />
  </div>
</template>
<script>
import NavbarVue from "./components/general/header/NavbarVue.vue";
import FooterVue from "./components/general/footer/FooterVue.vue";
export default {
  components: { NavbarVue, FooterVue },
  computed: {
    rutas() {
      const RUTAS = [
        { "/": "Inicio" },
        { to: "/nosotros", section: "Competen" },
        { to: "/cursos", section: "Cursos" },
        { to: "/componentes", section: "Componentes" },
      ];
      return RUTAS;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Open+Sans&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: "Inter", sans-serif;
}
</style>
