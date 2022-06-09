<template>
  <div
    class="navbar bg-white fixed z-20"
    :class="{ change_color: scrollPosition > 50 }"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-96"
          :class="{ change_color_dropdown_cell: scrollPosition > 50 }"
        >
          <li>
            <router-link
              to="/"
              class="text-black font-bold active:bg-[#006] active:text-white"
              >Inicio</router-link
            >
          </li>
          <div
            tabindex="0"
            class="collapse collapse-plus h-auto w-[366px] rounded-lg active:bg-[#006]"
          >
            <input type="checkbox" class="peer hover:bg-black/30" />
            <div
              class="h-[36px] collapse-title text-black text-sm font-bold bg-white peer-checked:bg-[#006] peer-checked:text-secondary-content py-[0.5rem]"
            >
              Eventos
            </div>
            <div
              class="collapse-content p-0 active:bg-white peer-checked:bg-white peer-checked:text-secondary-content peer-checked:border-b-[1px] border-[#006]"
            >
              <ul class="text-black font-bold bg-white">
                <li>
                  <a class="active:bg-[#006] active:text-white"
                    >Ponencias magistrales</a
                  >
                </li>
                <li>
                  <a class="active:bg-[#006] active:text-white">Workshops </a>
                </li>
                <li>
                  <a class="active:bg-[#006] active:text-white"
                    >Feria de oportunidades</a
                  >
                </li>
                <li>
                  <a class="active:bg-[#006] active:text-white"
                    >Presentaciones culturales</a
                  >
                </li>
                <li>
                  <a class="active:bg-[#006] active:text-white"
                    >Networking social</a
                  >
                </li>
                <li>
                  <a class="active:bg-[#006] active:text-white"
                    >Compartir de experiencias AIChE</a
                  >
                </li>
                <li>
                  <a class="active:bg-[#006] active:text-white"
                    >Cierre de evento y actividades culturales</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <li>
            <router-link
              to="/competencias"
              class="text-black font-bold active:bg-[#006] active:text-white"
              >Competencias</router-link
            >
          </li>
          <li>
            <router-link
              to="/ponentes"
              class="text-black font-bold active:bg-[#006] active:text-white"
              >Ponentes</router-link
            >
          </li>
          <li>
            <router-link
              to="/cronograma"
              class="text-black font-bold active:bg-[#006] active:text-white"
              >Cronograma</router-link
            >
          </li>
          <li>
            <router-link
              to="/protocolos-de-seguridad"
              class="text-black font-bold active:bg-[#006] active:text-white"
              >Protocolos de Seguridad</router-link
            >
          </li>
          <li>
            <router-link
              to="/contacto"
              class="text-black font-bold active:bg-[#006] active:text-white"
              >Contáctanos</router-link
            >
          </li>
        </ul>
      </div>
      <router-link to="/" class="btn btn-ghost"
        ><img src="../../../assets/LogoAIChE.png" alt="LogoAIChE" class="w-36"
      /></router-link>
    </div>
    <div class="navbar-center hidden xl:flex">
      <ul class="menu menu-horizontal p-0">
        <li>
          <router-link
            to="/"
            class="text-black font-bold hover:text-[#00BFFF] active:bg-[#006] active:text-white"
            >Inicio</router-link
          >
        </li>
        <li tabindex="0">
          <a
            class="text-black font-bold hover:text-[#00BFFF] active:bg-[#006] active:text-white"
          >
            Eventos
            <svg
              class="fill-current text-black hover:text-[#00BFFF] active:bg-[#006] active:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul
            class="p-2 text-black font-bold bg-white"
            :class="{ change_color_dropdown: scrollPosition > 50 }"
          >
            <li>
              <a class="hover:text-[#00BFFF] active:bg-[#006] active:text-white"
                >Ponencias magistrales</a
              >
            </li>
            <li>
              <a class="hover:text-[#00BFFF] active:bg-[#006] active:text-white"
                >Workshops
              </a>
            </li>
            <li>
              <a class="hover:text-[#00BFFF] active:bg-[#006] active:text-white"
                >Feria de oportunidades</a
              >
            </li>
            <li>
              <a class="hover:text-[#00BFFF] active:bg-[#006] active:text-white"
                >Presentaciones culturales</a
              >
            </li>
            <li>
              <a class="hover:text-[#00BFFF] active:bg-[#006] active:text-white"
                >Networking social</a
              >
            </li>
            <li>
              <a class="hover:text-[#00BFFF] active:bg-[#006] active:text-white"
                >Compartir de experiencias AIChE</a
              >
            </li>
            <li>
              <a class="hover:text-[#00BFFF] active:bg-[#006] active:text-white"
                >Cierre de evento y actividades culturales</a
              >
            </li>
          </ul>
        </li>
        <li>
          <router-link
            to="/competencias"
            class="text-black font-bold hover:text-[#00BFFF] active:bg-[#006] active:text-white"
            >Competencias</router-link
          >
        </li>
        <li>
          <router-link
            to="/ponentes"
            class="text-black font-bold active:bg-[#006] active:text-white"
            >Ponentes</router-link
          >
        </li>
        <li>
          <router-link
            to="/cronograma"
            class="text-black font-bold hover:text-[#00BFFF] active:bg-[#006] active:text-white"
            >Cronograma</router-link
          >
        </li>
        <li>
          <router-link
            to="/protocolos-de-seguridad"
            class="text-black font-bold hover:text-[#00BFFF] active:bg-[#006] active:text-white"
            >Protocolos de Seguridad</router-link
          >
        </li>
        <li>
          <router-link
            to="/contacto"
            class="text-black font-bold hover:text-[#00BFFF] active:bg-[#006] active:text-white"
            >Contáctanos</router-link
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <router-link
        to="/inscripciones"
        class="btn hover:bg-[#00BFFF] text-white normal-case border-none bg-[#006]"
        >Inscripciones</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.change_color {
  border-bottom: 1px solid #00bfff;
}
.change_color_dropdown {
  border-left: 1px solid #00bfff;
  border-right: 1px solid #00bfff;
  border-bottom: 1px solid #00bfff;
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow-color: hsla(195, 100%, 50%, 0.216);
  --tw-shadow: var(--tw-shadow-colored);
}
.change_color_dropdown_cell {
  border-top: 1px solid #00bfff;
  border-left: 1px solid #00bfff;
  border-right: 1px solid #00bfff;
  border-bottom: 1px solid #00bfff;
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow-color: hsla(195, 100%, 50%, 0.216);
  --tw-shadow: var(--tw-shadow-colored);
}
.collapse-plus .collapse-title:after {
  position: absolute;
  display: block;
  height: 0.5rem /* 8px */;
  width: 0.5rem /* 8px */;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  top: 0.25rem /* 14.4px */;
  right: 1.4rem /* 22.4px */;
  content: "+";
  pointer-events: none;
}
.collapse-title,
.collapse > input[type="checkbox"] {
  width: 100%;
  padding-left: 1rem /* 16px */;
  padding-right: 3rem /* 48px */;
  min-height: 1rem /* 60px */;
  transition: background-color 0.2s ease-in-out;
}
</style>
