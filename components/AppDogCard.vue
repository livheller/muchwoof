<template>
  <section class="card" v-if="data">
    <h1>{{ data.name }}</h1>
    <hr />
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
        <fa icon="edit" class="icon edit" />
        <h2>{{ detail.ownerName }}</h2>
        <p><fa icon="envelope" class="icon" /> {{ detail.email }}</p>
        <p><fa icon="phone" class="icon" /> {{ detail.phone }}</p>
        <p><fa icon="house-user" class="icon" /> {{ detail.address }}</p>
        <nuxt-link :to="`/dog/${data.id}`">
          <button class="editBtn" type="button">Edit</button>
        </nuxt-link>
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
  },
};
</script>

<style lang="scss" scoped>
hr {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  color: black;
}
.card {
  width: 55rem;
  height: 28rem;
  background-color: rgb(55, 46, 41, 0.1);
  padding: 1rem;
}
.edit {
  float: right;
  position: relative;
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
  margin-left: 2rem;
}
.card-dog-owner {
  border: 1px solid lighten(rgb(55, 46, 41), 60%);
  padding: 1rem;
}
h1 {
  font-size: 3rem;
  padding: 0rem 1rem;
  text-align: center;
}
h2 {
  font-weight: 500;
  margin-bottom: 1rem;
}
img {
  height: 15rem;
  width: 17rem;
  border: 2px solid rgb(55, 46, 41, 0.5);
  box-shadow: 6px 12px 5px 1px rgb(55, 46, 41, 0.2);
}
.editBtn {
  width: 7rem;
  background: lighten(rgb(240, 199, 94), 2%);
  color: darken(rgb(55, 46, 41), 10%);
  border: solid 1px black;
  position: absolute;
  bottom: 2.7rem;
  right: 4rem;
}
p {
  font-weight: 500;
  margin: 0.5rem 0;
}
</style>
