<template class="">
  <div class="bg-white">
    <div>
      <h1 class="text-4xl text-[#000066] font-bold text- pt-5 text-center">
        Competencias Oficiales de AIChE
      </h1>
    </div>
    <div class="flex justify-evenly pt-5 pb-5 w-full">
      <div
        class="w-80 flex-wrap bg-white border border-[#231f20] rounded-lg shadow-md shadow-[#231f20]"
      >
        <div class="ab-pillar card-body text-black cursor-default">
          <div>
            <img
              class="ab-bw w-14 m-auto"
              src="../../assets/competencias/experience.-bw.png"
              alt=""
            />
            <img
              class="ab-img w-14 m-auto"
              src="../../assets/competencias/experience.png"
              alt=""
            />
          </div>
          <h2 class="text-center font-bold text-xl text-[#000066]">
            ChemE Joepardy
          </h2>
          <p class="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            consequatur vitae alias corporis in ea error illum temporibus
            dolorum veniam repudiandae nemo, ut culpa ipsa earum laborum?
            Quidem, ipsum fugit.
          </p>
        </div>
      </div>
      <div
        class="w-80 flex-wrap bg-white border border-[#231f20] rounded-lg shadow-md shadow-[#231f20]"
      >
        <div
          class="ab-pillar card-body text-black w-full max-w-md pt-6 pb-6 pl-8 pr-8 cursor-default"
        >
          <div class="image">
            <img
              class="ab-bw w-[55px] m-auto"
              src="../../assets/competencias/tech-bw.png"
              alt=""
            />
            <img
              class="ab-img w-14 hidden"
              src="../../assets/competencias/tech.png"
              alt=""
            />
          </div>
          <h2 class="text-center font-bold text-xl text-[#000066]">
            ChemE car
          </h2>
          <p class="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            consequatur vitae alias corporis in ea error illum temporibus
            dolorum veniam repudiandae nemo, ut culpa ipsa earum laborum?
            Quidem, ipsum fugit.
          </p>
        </div>
      </div>
      <div
        class="w-80 flex-wrap bg-white border border-[#231f20] rounded-lg shadow-md shadow-[#231f20]"
      >
        <div
          class="ab-pillar card-body text-black w-full max-w-md pt-6 pb-6 pl-8 pr-8 cursor-default"
        >
          <div class="image">
            <img
              class="ab-bw w-[55px] m-auto"
              src="../../assets/competencias/responsibility-bw.png"
              alt=""
            />
            <img
              class="ab-img w-14 hidden"
              src="../../assets/competencias/responsibility.png"
              alt=""
            />
          </div>
          <h2 class="text-center font-bold text-xl text-[#000066]">
            Paper Competition
          </h2>
          <p class="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            consequatur vitae alias corporis in ea error illum temporibus
            dolorum veniam repudiandae nemo, ut culpa ipsa earum laborum?
            Quidem, ipsum fugit.
          </p>
        </div>
      </div>
      <div
        class="w-80 flex-wrap bg-white border border-[#231f20] rounded-lg shadow-md shadow-[#231f20]"
      >
        <div
          class="ab-pillar card-body text-black w-full max-w-md pt-6 pb-6 pl-8 pr-8 cursor-default"
        >
          <div class="image">
            <img
              class="ab-bw w-[55px] m-auto"
              src="../../assets/competencias/experience.-bw.png"
              alt=""
            />
            <img
              class="ab-img w-14 hidden"
              src="../../assets/competencias/experience.png"
              alt=""
            />
          </div>
          <h2 class="text-center font-bold text-xl text-[#000066]">
            Poster Competition
          </h2>
          <p class="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            consequatur vitae alias corporis in ea error illum temporibus
            dolorum veniam repudiandae nemo, ut culpa ipsa earum laborum?
            Quidem, ipsum fugit. lor
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ab-pillar img {
  transition: opacity ease 0.3s;
}
.ab-pillar .ab-img {
  opacity: 0;
}
.ab-pillar:hover .ab-img {
  opacity: 1;
}
.ab-pillar:hover .ab-bw {
  opacity: 0;
}
</style>
