<template>
  <section class="card" v-if="data">
    <h1>{{ data.name }}</h1>
    <div name="card-dog" class="card-body">
      <div class="card-image">
        <img :src="data.picture" :alt="`Picture of a dog named ${data.name}`" />
        <p v-if="data.boardingStatus.includes('Boarding')" class="label">
          <fa icon="bone" class="icon" />
          <span>Boarding</span>
        </p>
      </div>

      <div class="card-dog-info">
        <p>Breed: {{ data.breed }}</p>
        <p>Sex: {{ data.gender }}</p>
        <p>Age: {{ data.age }}</p>
      </div>
      <div class="card-dog-owner" :key="detail.id" v-for="detail in data.owner">
        <p>{{ detail.name }}</p>
        <p>{{ detail.email }}</p>
        <p>{{ detail.phone }}</p>
        <p>{{ detail.address }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: {
      type: [Array, Object],
    },
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 55rem;
  height: 28rem;
  background-color: rgb(55, 46, 41, 0.1);
  padding: 1rem;
}
.card-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.card-image {
  grid-column: 1;
}
.label {
  position: relative;

  .icon {
    display: inline-block;
    position: absolute;
    font-size: 5.7rem;
    font-weight: bold;
    color: #a96800;
    stroke: black;
    stroke-width: 5px;
    top: 1rem;
    left: 4rem;
  }

  span {
    font-size: 1rem;
    position: absolute;
    color: white;
    font-weight: bold;
    z-index: 20;
    top: 3.1rem;
    left: 5.3rem;
  }
}

.card-dog-info {
  grid-column: 2;
}
h1 {
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
}
img {
  height: 15rem;
  width: 17rem;
  border: 2px solid rgb(55, 46, 41, 0.5);
}
</style>
