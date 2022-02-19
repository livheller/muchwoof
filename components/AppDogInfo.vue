<template>
  <section class="doginfo container">
    <div v-for="dog in datasource" :key="dog.id">
      <div class="cardinfo">
        <img :src="dog.picture" :alt="`Picture of a dog named ${dog.name}`" />
        <h2>{{ dog.name }}</h2>
        <h3>{{ dog.breed }}</h3>
        <p>Owner: {{ dog.owner[0].name }}</p>

        <fa
          icon="angle-right"
          type="button"
          class="icon arrow"
          @click="showModal(dog)"
        />

        <p v-if="dog.isBoarding" class="label">
          <fa icon="bone" class="icon" />
          <span>Boarding</span>
        </p>
      </div>
    </div>
    <AppDogModal v-show="isModalOpen" @close="closeModal">
      <template v-slot:body>
        <AppDogCard :data="dogData"> </AppDogCard>
      </template>
    </AppDogModal>
  </section>
</template>

<script>
import AppDogModal from "./AppDogModal.vue";
import AppDogCard from "./AppDogCard.vue";

export default {
  components: {
    AppDogModal,
    AppDogCard,
  },
  data() {
    return { isModalOpen: false, dogData: null };
  },
  methods: {
    showModal(dog) {
      this.dogData = dog;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  props: {
    datasource: {
      type: [Array, Object],
    },
  },
};
</script>

<style lang="scss" scoped>
section.doginfo {
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 2rem;
  column-gap: 2rem;
}
.label {
  position: relative;
  top: 1rem;
  .icon {
    display: inline-block;
    position: absolute;
    font-size: 5.7rem;
    font-weight: bold;
    color: #a96800;
    stroke: black;
    stroke-width: 5px;
    top: -0.9rem;
  }

  span {
    font-size: 1rem;
    position: absolute;
    text-align: center;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    z-index: 20;
    top: 0.65rem;
    left: 0.4rem;
  }
}
.cardinfo {
  height: 30rem;
  width: fit-content;
  padding: 1rem;
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
  position: relative;
  .arrow {
    position: absolute;
    color: black;
    font-size: 4rem;
    left: 15rem;
    top: 25rem;
  }
}
img {
  height: 15rem;
  width: 17rem;
  border: 2px solid rgb(55, 46, 41, 0.5);
}
h2 {
  text-align: center;
  padding: 1rem;
}
h3 {
  font-style: italic;
  padding-bottom: 0.5rem;
}
</style>
