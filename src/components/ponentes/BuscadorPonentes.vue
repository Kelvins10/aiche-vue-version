<template>
  <div
    class="xl:px-32 lg:px-20 md:px-14 px-10 bg-white pt-24 flex flex-col items-center"
  >
    <label for="search">
      <div class="form-control w-[500px]">
        <div class="input-group">
          <input
            type="text"
            id="search"
            v-model="term"
            placeholder="Buscar..."
            class="input input-bordered bg-white border-[#006] mb-2 w-full"
          />
          <button class="btn btn-square bg-[#006]" @click="search(term)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </label>
    <div class="flex pb-5">
      <button
        class="btn btn-outline btn-info w-40 mr-2.5 rounded-full text-xs normal-case"
        @click="() => filterSpeakers('Todos')"
      >
        Todos
      </button>
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
