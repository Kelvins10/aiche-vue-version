<template>
  <div
    class="xl:px-32 lg:px-20 md:px-14 px-10 bg-white pt-24 flex flex-col items-center"
  >
    <label for="search">
      <div class="form-control md:w-[500px]">
        <input
          type="text"
          id="search"
          v-model="term"
          placeholder="Buscar..."
          class="w-full bg-white border-[#006] mb-2 input input-primary input-bordered"
          @input="search(term)"
        />
      </div>
    </label>
    <div class="flex pb-5 md:flex-row flex-col items-center">
      <button
        class="btn btn-outline btn-info w-40 mr-2.5 rounded-full text-xs normal-case md:mb-0 mb-2"
        @click="() => filterSpeakers('Todos')"
      >
        Todos
      </button>
      <div class="flex">
        <button
          class="btn btn-outline btn-info w-40 mr-2.5 rounded-full text-xs normal-case"
          @click="() => filterSpeakers('Keynote')"
        >
          Keynote Speakers
        </button>
        <button
          class="btn btn-outline btn-info w-40 rounded-full text-xs normal-case"
          @click="() => filterSpeakers('Workshop')"
        >
          Workshops
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const filters = ["Todos", "Keynote", "Workshops"];
export default {
  props: ["filterSpeakers", "search", "filteredSpeakers"],
  data() {
    return {
      filters,
      term: "",
    };
  },
};
</script>

<style></style>
