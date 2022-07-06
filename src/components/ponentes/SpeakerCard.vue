<template>
  <div class="pt-5 flex flex-wrap items-center justify-center bg-white">
    <template v-for="speaker in speakers" :key="speaker.id">
      <div
        class="card w-96 bg-white m-4 h-[420px] border-[1px] border-[#006] shadow-xl shadow-[#006]/40"
      >
        <figure class="relative">
          <img
            class="h-52 w-full object-cover"
            :src="'/images/ponentes/' + speaker.img"
            :alt="speaker.name"
          />
          <!-- <div
            class="absolute z-10 w-full h-full opacity-0 hover:opacity-100 duration-300 bg-white/70"
          >
            <h4
              class="text-center justify-center relative text-md text-[#006] font-semibold top-1/3 translate-y-1/3"
            >
              {{ speaker.description }}
            </h4>
          </div> -->

          <!-- <div class="w-64 h-64 bg-red-100 relative">
      <div
        class="absolute inset-0 bg-cover bg-center z-0"
        style="
          background-image: url('https://upload.wikimedia.org/wikipedia/en/3/3c/JumanjiTheNextLevelTeaserPoster.jpg');
        "
      ></div>
      <div
        class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
      >
        Dwayne
      </div> -->
          <!-- </div> -->
        </figure>
        <div class="card-body pt-5 md:px-8 px-5">
          <h1 class="card-title text-black">
            {{ speaker.name }}
          </h1>
          <h2 class="text-black/80">{{ speaker.especialidad }}</h2>
          <div class="flex justify-between font-bold text-[#006]/80">
            <h3>{{ speaker.fecha }}</h3>
            <div
              v-if="speaker.hora !== ''"
              class="badge bg-[#00BFFF] border-2 text-xs :text-md border-[#00BFFF] h-auto py-2.5 text-[#006]"
            >
              {{ speaker.hora }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["speakers"],
};
</script>

<style></style>
