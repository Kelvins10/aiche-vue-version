<template>
  <div class="pt-5 flex flex-wrap items-center justify-center bg-white">
    <template v-for="speaker in speakers" :key="speaker.id">
      <div
        class="card w-96 bg-white m-4 h-[420px] border-[1px] border-[#006] shadow-xl shadow-[#006]/40"
      >
        <!-- <div class="h-28 flex">
          <h1 class="text-center text-xl m-auto">
            {{ speaker.tema }}
          </h1>
        </div>
        <div class="w-full flex flex-col items-center justify-center">
          <div class="w-24 mask mask-squircle">
            <img
              :src="'https://api.lorem.space/image/face?hash=3379' + speaker.id"
            />
          </div>
        </div> -->

        <figure>
          <img
            class="h-52 w-full object-cover"
            :src="'https://api.lorem.space/image/face?hash=3379' + speaker.id"
            alt="Speaker"
          />
        </figure>
        <div class="card-body pt-5 md:px-8 px-5">
          <h1 class="card-title text-black">
            {{ speaker.tema }}
          </h1>
          <h2 class="text-black/80">{{ speaker.name }}</h2>
          <!-- <h3>{{ speaker.type }}</h3> -->
          <div class="flex justify-between font-bold text-[#006]/80">
            <h3>{{ speaker.fecha }}</h3>
            <div
              class="badge bg-[#00BFFF] border-2 text-xs :text-md border-[#00BFFF] h-auto py-2.5 text-[#006]"
            >
              {{ speaker.hora }}
            </div>
            <!-- Color Amarillo: FBBC04 -->
            <!-- <h3>{{ speaker.hora }}</h3> -->
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
