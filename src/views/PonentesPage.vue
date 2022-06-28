<template>
  <buscador-ponentes
    :filterSpeakers="filterSpeakers"
    :search="search"
    :filteredSpeakers="filteredSpeakers"
  />
  <speaker-card :speakers="speakers" />
</template>

<script>
import BuscadorPonentes from "@/components/ponentes/BuscadorPonentes.vue";
import speakersData from "../content/speakers.json";
import SpeakerCard from "@/components/ponentes/SpeakerCard.vue";
import { stringContain } from "@/utils/functions";
export default {
  components: { BuscadorPonentes, SpeakerCard },
  data() {
    return {
      speakers: speakersData,
      str: "",
      type: "",
    };
  },
  methods: {
    filterSpeakers(catName) {
      this.resetSpeakers();
      if (catName !== "Todos") {
        this.speakers = this.speakers.filter((speaker) => {
          return speaker.type === catName;
        });
      }
    },
    search(term) {
      this.resetSpeakers();
      this.speakers = this.speakers.filter((speaker) => {
        return (
          stringContain(speaker.tema, term) ||
          stringContain(speaker.name, term) ||
          stringContain(speaker.fecha, term) ||
          stringContain(speaker.hora, term)
        );
      });
    },
    resetSpeakers() {
      this.speakers = speakersData;
    },
  },
};
</script>

<style></style>
