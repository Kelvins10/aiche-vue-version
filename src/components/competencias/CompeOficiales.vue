<template class="">
  <div class="xl:px-32 lg:px-23 md:px-14 px-10 bg-white">
    <div>
      <h1 class="text-3xl bg-white font-bold text-center text-[#006] pt-5">
        Competencias Oficiales de AIChE
      </h1>
    </div>
    <div class="flex flex-wrap justify-evenly pb-10 m-auto">
      <div class="p-5 md:px-1 flex">
        <div
          class="ab-pillar relative pt-10 card w-full bg-white shadow-xl border text-black 2xl:w-80"
        >
          <div class="image">
            <img
              class="ab-bw"
              src="../../assets/competencias/experience.-bw.png"
              alt=""
            />
            <img
              class="ab-img"
              src="../../assets/competencias/experience.png"
              alt=""
            />
          </div>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold pt-3">ChemE Joepardy</h2>
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              voluptate eveniet voluptatibus optio rem eos neque quisquam
              laboriosam, explicabo eaque commodi quaerat facilis. Numquam vitae
              suscipit eius mollitia provident modi!
            </p>
          </div>
        </div>
      </div>

      <div class="p-5 md:px-1 flex">
        <div
          class="ab-pillar relative pt-10 card w-full bg-white shadow-xl border text-black 2xl:w-80"
        >
          <div class="image">
            <img
              class="ab-bw"
              src="../../assets/competencias/tech-bw.png"
              alt=""
            />
            <img
              class="ab-img"
              src="../../assets/competencias/tech.png"
              alt=""
            />
          </div>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold pt-3">ChemE car</h2>
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              voluptate eveniet voluptatibus optio rem eos neque quisquam
              laboriosam, explicabo eaque commodi quaerat facilis. Numquam vitae
              suscipit eius mollitia provident modi!
            </p>
          </div>
        </div>
      </div>

      <div class="p-5 md:px-1 flex">
        <div
          class="ab-pillar relative pt-10 card w-full bg-white shadow-xl border text-black 2xl:w-80"
        >
          <div class="image">
            <img
              class="ab-bw"
              src="../../assets/competencias/responsibility-bw.png"
              alt=""
            />
            <img
              class="ab-img"
              src="../../assets/competencias/responsibility.png"
              alt=""
            />
          </div>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold pt-3">
              Paper Competition
            </h2>
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              voluptate eveniet voluptatibus optio rem eos neque quisquam
              laboriosam, explicabo eaque commodi quaerat facilis. Numquam vitae
              suscipit eius mollitia provident modi!
            </p>
          </div>
        </div>
      </div>

      <div class="p-5 md:px-1 flex">
        <div
          class="ab-pillar relative pt-10 card w-full bg-white shadow-xl border text-black 2xl:w-80"
        >
          <div class="image">
            <img
              class="ab-bw"
              src="../../assets/competencias/experience.-bw.png"
              alt=""
            />
            <img
              class="ab-img"
              src="../../assets/competencias/experience.png"
              alt=""
            />
          </div>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold pt-3">
              Poster Competition
            </h2>
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              voluptate eveniet voluptatibus optio rem eos neque quisquam
              laboriosam, explicabo eaque commodi quaerat facilis. Numquam vitae
              suscipit eius mollitia provident modi! lore
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ab-pillar img {
  transition: opacity ease 0.3s;
}
.ab-pillar .ab-bw {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
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
