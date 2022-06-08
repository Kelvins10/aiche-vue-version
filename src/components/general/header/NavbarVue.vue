<template>
  <div class="navbar bg-white">
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
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
        >
          <li>
            <router-link
              to="/"
              class="text-black font-bold active:bg-[#006] active:text-white"
              >Inicio</router-link
            >
          </li>
          <li tabindex="0">
            <a
              class="justify-between text-black font-bold active:bg-[#006] active:text-white"
            >
              Eventos
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 text-black font-bold bg-white -mx-48 mt-10 z-10">
              <li>
                <a class="active:bg-[#006] active:text-white"
                  >Competencias oficiales de AIChE</a
                >
              </li>
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
          </li>
          <li>
            <router-link
              to="/competencias"
              class="text-black font-bold active:bg-[#006] active:text-white"
              >Competencias</router-link
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
          <ul class="p-2 text-black font-bold bg-white">
            <li>
              <a class="hover:text-[#00BFFF] active:bg-[#006] active:text-white"
                >Competencias oficiales de AIChE</a
              >
            </li>
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
        class="btn bg-[#00BFFF] text-white normal-case border-none"
        >Inscripciones</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
