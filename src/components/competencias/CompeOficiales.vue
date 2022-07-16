<template class="">
  <div class="xl:px-32 lg:px-23 md:px-14 px-10 bg-white">
    <div>
      <h1
        class="md:text-3xl sm:text-2xl text-xl pb-3 bg-white font-bold text-center text-[#006] pt-5"
      >
        Competencias Oficiales de AIChE
      </h1>
    </div>
    <div class="flex flex-wrap justify-evenly pb-10 m-auto">
      <label for="my-modal-1" class="p-5 md:px-3 flex cursor-pointer">
        <div
          class="ab-pillar relative pt-10 w-full card bg-[#00BFFF] shadow-xl border text-black md:w-[300px] lg:w-[380px] xl:w-[430px] 2xl:w-72"
        >
          <div class="image">
            <img
              class="ab-bw pt-3"
              src="../../assets/competencias/experience.-bw.png"
              alt=""
            />
            <img
              class="ab-img pt-3"
              src="../../assets/competencias/experience.png"
              alt=""
            />
          </div>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold pt-6">
              ChemE Jeopardy Competition
            </h2>
            <p class="text-justify text-sm sm:text-base">
              Es un concurso oficial de AIChE de conocimientos y estrategia
              sobre ingeniería química y afines, donde nosotros te damos las
              respuestas y tú debes formular la pregunta de manera correcta. Los
              ganadores clasifican como representantes de la región de
              Latinoamérica en la
              <a
                target="_blank"
                href="https://www.aiche.org/conferences/annual-aiche-student-conference/2022"
                class="link link-accent text-[#000]"
                >Conferencia Anual de estudiantes de AIChE</a
              >, a realizarse en Phoenix, Arizona en EE.UU.
            </p>
          </div>
        </div>
      </label>
      <input type="checkbox" id="my-modal-1" class="modal-toggle" />
      <label for="my-modal-1" class="modal cursor-pointer">
        <label class="modal-box relative bg-[#006]/90" for="">
          <h3 class="text-lg font-bold text-center text-white pb-3">
            ChemE Jeopardy Competition
          </h3>
          <div class="carousel w-full md:max-h-96 max-h-60">
            <div id="1_slide1" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/jeopardy1.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#1_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#1_slide2" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <div id="1_slide2" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/jeopardy2.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#1_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#1_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <div id="1_slide3" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/jeopardy3.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#1_slide2" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#1_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <!-- <div id="1_slide4" class="carousel-item relative w-full">
              <img
                src="@/assets/home/utec/utec-lab3.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#1_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#1_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div> -->
          </div>
        </label>
      </label>

      <label for="my-modal-2" class="p-5 md:px-3 flex cursor-pointer">
        <div
          class="ab-pillar relative pt-10 card w-full bg-[#000066] shadow-xl border text-black md:w-[300px] lg:w-[380px] xl:w-[430px] 2xl:w-72"
        >
          <div class="image">
            <img
              class="ab-bw pt-3"
              src="../../assets/competencias/tech-bw.png"
              alt=""
            />
            <img
              class="ab-img pt-3"
              src="../../assets/competencias/tech.png"
              alt=""
            />
          </div>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold pt-6 text-white">
              ChemE Car Competition
            </h2>
            <p class="text-justify text-sm sm:text-base text-white">
              Es un concurso oficial de AIChE que consiste en diseñar y
              construir un automóvil a escala propulsado por una fuente de
              energía química, que recorrerá de manera segura una distancia
              específica para luego detenerse. Los ganadores clasifican como
              representantes de la región de Latinoamérica en la Conferencia
              Anual de estudiantes de AIChE en EE.UU.
            </p>
          </div>
        </div>
      </label>
      <input type="checkbox" id="my-modal-2" class="modal-toggle" />
      <label for="my-modal-2" class="modal cursor-pointer">
        <label class="modal-box relative bg-[#006]/90" for="">
          <h3 class="text-lg font-bold text-center text-white pb-3">
            ChemE Car Competition
          </h3>
          <div class="carousel w-full md:max-h-96 max-h-60">
            <div id="2_slide1" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/chemecar_1.png"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#2_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#2_slide2" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <div id="2_slide2" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/chemecar_2.png"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#2_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#2_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <div id="2_slide3" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/chemecar_3.png"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#2_slide2" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#2_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <!-- <div id="2_slide4" class="carousel-item relative w-full">
              <img
                src="@/assets/home/utec/utec-lab3.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#2_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#2_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div> -->
          </div>
        </label>
      </label>

      <label for="my-modal-3" class="p-5 md:px-3 flex cursor-pointer">
        <div
          class="ab-pillar relative pt-10 card w-full bg-[#D9F6FF] shadow-xl border text-black md:w-[300px] lg:w-[380px] xl:w-[430px] 2xl:w-72"
        >
          <div class="image">
            <img
              class="ab-bw pt-3 w-16"
              src="../../assets/competencias/paper-bw.png"
              alt=""
            />
            <img
              class="ab-img pt-3 w-16"
              src="../../assets/competencias/paper.png"
              alt=""
            />
          </div>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold pt-6">
              Paper Competition <br /><br />
            </h2>
            <p class="text-justify text-sm sm:text-base">
              Es un concurso oficial de AIChE que busca que los estudiantes
              muestren los resultados de sus proyectos, investigaciones o
              pasantías a través de una presentación técnica en idioma inglés.
              El ganador clasifica como representante de la región de
              Latinoamérica en la Conferencia Anual de estudiantes de AIChE en
              EE.UU.
            </p>
          </div>
        </div>
      </label>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <label for="my-modal-3" class="modal cursor-pointer">
        <label class="modal-box relative bg-[#006]/90" for="">
          <h3 class="text-lg font-bold text-center text-white pb-3">
            Paper Competition
          </h3>
          <div class="carousel w-full md:max-h-96 max-h-60">
            <div id="3_slide1" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/paper1.png"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#3_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#3_slide2" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <div id="3_slide2" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/paper2.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#3_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#3_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <div id="3_slide3" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/paper3.png"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#3_slide2" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#3_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <!-- <div id="3_slide4" class="carousel-item relative w-full">
              <img
                src="@/assets/home/utec/utec-lab3.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#3_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#3_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div> -->
          </div>
        </label>
      </label>

      <label for="my-modal-4" class="p-5 md:px-3 flex cursor-pointer">
        <div
          class="ab-pillar relative pt-10 card w-full bg-[#4BD1FF] shadow-xl border text-black md:w-[300px] lg:w-[380px] xl:w-[430px] 2xl:w-72"
        >
          <div class="image">
            <img
              class="ab-bw pt-3 w-16"
              src="../../assets/competencias/poster-bw.png"
              alt=""
            />
            <img
              class="ab-img pt-3 w-16"
              src="../../assets/competencias/poster.png"
              alt=""
            />
          </div>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold pt-6">
              Poster Competition<br /><br />
            </h2>
            <p class="text-justify text-sm sm:text-base">
              Es un concurso oficial de AIChE que busca que los estudiantes
              muestren los resultados de sus proyectos, investigaciones o
              pasantías a través de una presentación técnica en idioma español
              en un póster o cartel científico.
            </p>
          </div>
        </div>
      </label>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative bg-[#006]/90" for="">
          <h3 class="text-lg font-bold text-center text-white pb-3">
            Poster Competition
          </h3>
          <div class="carousel w-full md:max-h-96 max-h-60">
            <div id="4_slide1" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/poster1.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#4_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#4_slide2" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <div id="4_slide2" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/poster2.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#4_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#4_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <div id="4_slide3" class="carousel-item relative w-full">
              <img
                src="@/assets/competencias/poster3.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#4_slide2" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#4_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div>
            <!-- <div id="4_slide4" class="carousel-item relative w-full">
              <img
                src="@/assets/home/utec/utec-lab3.jpg"
                class="w-full object-cover"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#4_slide3" class="btn btn-circle bg-[#006] border-none"
                  >❮</a
                >
                <a href="#4_slide1" class="btn btn-circle bg-[#006] border-none"
                  >❯</a
                >
              </div>
            </div> -->
          </div>
        </label>
      </label>
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
