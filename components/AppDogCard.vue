<template>
  <section class="card" v-if="data">
    <nuxt-link :to="`/dog/${data.id}`">
      <fa icon="edit" class="icon edit" />
    </nuxt-link>
    <h1>{{ data.name }}</h1>
    <hr />
    <div name="card-dog" class="card-body">
      <div class="card-image">
        <img :src="data.picture" :alt="`Picture of a dog named ${data.name}`" />
        <!-- @TODO hook up check in/out button and make text dynamic -->
        <h5 class="timestamp">Checked-in since: 13:34 08/08/23</h5>
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
      <div class="card-owner-container">
        <div
          class="card-dog-owner"
          :key="detail.id"
          v-for="detail in data.owner"
        >
          <h2>{{ detail.ownerName }}</h2>
          <!-- @TODO link email to pull up native email -->
          <p><fa icon="envelope" class="icon" /> {{ detail.email }}</p>
          <p><fa icon="phone" class="icon" /> {{ detail.phone }}</p>
          <p><fa icon="house-user" class="icon" /> {{ detail.address }}</p>
        </div>
        <!-- @TODO make text dynamic based on whether they're checked in or not -->
        <button class="check-in-btn" type="button">Check-Out</button>
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
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
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
  margin: 1rem 0 0;
  color: black;
}
.timestamp {
  margin-left: 1rem;
  margin-top: 0.5rem;
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
    top: -1.4rem;
    left: 4rem;
  }

  span {
    font-size: 1rem;
    position: absolute;
    color: white;
    font-weight: bold;
    z-index: 20;
    top: 0.6rem;
    left: 5.4rem;
  }
}

.card-dog-info {
  grid-column: 2;
  margin-left: 2rem;
  p {
    font-weight: 700;
  }
}
.card-owner-container {
  text-align: center;
}
.card-dog-owner {
  border: 1px solid (rgb(55, 46, 41, 0.2));
  padding: 1rem;
  height: 96%;
  margin-bottom: 0.7rem;
  p {
    display: grid;
    grid-template-columns: 0.5fr 6fr;
    column-gap: 1rem;
    float: left;
    text-align: left;
    margin-top: 0.3rem;
  }
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
.check-in-btn {
  width: 10rem;
  background: lighten(rgb(240, 199, 94), 2%);
  color: darken(rgb(55, 46, 41), 10%);
  border: solid 1px black;
  font-weight: 600;
}
p {
  font-weight: 500;
  margin: 0.5rem 0;
}
</style>
