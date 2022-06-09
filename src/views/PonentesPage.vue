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
export default {
  components: { BuscadorPonentes, SpeakerCard },
  // computed: {
  //   speakers() {
  //     const SPEAKERS = speakers;
  //     return SPEAKERS;
  //   },
  // },
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
          speaker.tema.toLowerCase().includes(term.toLowerCase()) ||
          speaker.name.toLowerCase().includes(term.toLowerCase()) ||
          speaker.fecha.toLowerCase().includes(term.toLowerCase()) ||
          speaker.hora.toLowerCase().includes(term.toLowerCase())
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
