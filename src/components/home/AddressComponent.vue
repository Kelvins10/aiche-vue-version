<template>
  <div
    class="xl:px-32 lg:px-20 md:px-14 p-8 md:py-10 py-8 bg-white flex flex-col md:content-between items-center justify-center"
  >
    <h2
      class="mb-3 md:text-3xl sm:text-2xl text-xl font-bold text-[#000066] text-center"
    >
      ¿Dónde se va a realizar?
    </h2>
    <p
      class="font-normal text-justify mb-3 text-black md:text-lg sm:text-base text-sm"
    >
      En esta edición del PROCESA, la universidad anfitriona es la Universidad
      de Ingeniería y Tecnología - UTEC que se encuentra ubicada en el distrito
      de Barranco en Lima, Perú. ¡El evento será 100% presencial!
    </p>
    <div class="carousel w-full md:max-h-96 max-h-60">
      <div id="slide1" class="carousel-item relative w-full">
        <img src="@/assets/home/UTEC_campus.jpg" class="w-full object-cover" />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide4" class="btn btn-circle bg-[#006] border-none">❮</a>
          <a href="#slide2" class="btn btn-circle bg-[#006] border-none">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src="@/assets/home/utec/utec-garage.jpg"
          class="w-full object-cover"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide1" class="btn btn-circle bg-[#006] border-none">❮</a>
          <a href="#slide3" class="btn btn-circle bg-[#006] border-none">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          src="@/assets/home/utec/utec-lab2.jpg"
          class="w-full object-cover"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide2" class="btn btn-circle bg-[#006] border-none">❮</a>
          <a href="#slide4" class="btn btn-circle bg-[#006] border-none">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img
          src="@/assets/home/utec/utec-lab3.jpg"
          class="w-full object-cover"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide3" class="btn btn-circle bg-[#006] border-none">❮</a>
          <a href="#slide1" class="btn btn-circle bg-[#006] border-none">❯</a>
        </div>
      </div>
    </div>
    <div class="w-full mt-3">
      <iframe
        class="w-full lg:h-[450px] md:h-96 h-80"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.662845836132!2d-77.02432978518651!3d-12.13520539140849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7fcaea4a133%3A0xb86fbddb0dc89e2e!2sUniversidad%20de%20Ingenier%C3%ADa%20y%20Tecnolog%C3%ADa%20-%20UTEC!5e0!3m2!1ses!2spe!4v1652216378588!5m2!1ses!2spe"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <!-- <div class="carousel w-full h-96">
      <div id="item1" class="carousel-item w-full">
        <img src="@/assets/home/UTEC_campus.jpg" class="w-full" />
      </div>
      <div id="item2" class="carousel-item w-full">
        <img src="@/assets/home/utec/utec-garage.jpg" class="w-full" />
      </div>
      <div id="item3" class="carousel-item w-full">
        <img src="@/assets/home/utec/utec-lab2.jpg" class="w-full" />
      </div>
      <div id="item4" class="carousel-item w-full">
        <img src="@/assets/home/utec/utec-lab3.jpg" class="w-full" />
      </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
      <a href="#item3" class="btn btn-xs">3</a>
      <a href="#item4" class="btn btn-xs">4</a>
    </div> -->
  </div>
  <!-- <div
    class="xl:px-32 lg:px-20 md:px-14 p-8 md:py-10 py-8 bg-white flex md:flex-row md:content-between items-center flex-col justify-center"
  >
    <div class="md:w-1/2 text-center px-10 w-full">
      <h2 class="mb-3 text-3xl font-bold text-[#000066]">
        ¿Dónde se va a realizar?
      </h2>
      <p class="font-normal text-justify mb-3 text-black">
        Este 2022, la Universidad anfitriona será la Universidad de Ingeniería y
        Tecnologia (UTEC).
      </p>
      <img
        class="w-full"
        src="../../assets/home/UTEC_referencial.jpg"
        alt="UTEC"
      />
    </div>
    <div class="md:w-1/2 w-full px-10 mt-3 md:mt-0">
      <iframe
        class="w-full lg:h-[450px] md:h-96 h-80"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.662845836132!2d-77.02432978518651!3d-12.13520539140849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7fcaea4a133%3A0xb86fbddb0dc89e2e!2sUniversidad%20de%20Ingenier%C3%ADa%20y%20Tecnolog%C3%ADa%20-%20UTEC!5e0!3m2!1ses!2spe!4v1652216378588!5m2!1ses!2spe"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div> -->
</template>

<script>
export default {};
</script>

<style></style>
