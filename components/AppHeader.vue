<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1>Much Woof!</h1>
    <!-- <h3>A Doggo Daycare Database</h3> -->
  </section>
</template>

<style lang="scss" scoped>
.masthead {
  position: relative;
  top: -2.5rem;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 44%,
      rgba(68, 68, 68, 0.65) 100%
    ),
    url(~assets/bannerImg.jpg) no-repeat center center scroll;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 18vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
  padding: 1rem 0 1rem 1rem;
  position: absolute;
}

h3 {
  color: #eee;
  font-size: 7vmin;
  float: right;
  padding: 5rem 1rem;
  position: relative;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
}
</style>
