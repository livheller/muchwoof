<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1>Much Woof!</h1>
    <h3>A Doggo Daycare Database</h3>
  </section>
</template>

<style lang="scss" scoped>
.masthead {
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
  padding: 2rem 0 1rem 1rem;
  position: absolute;
  // margin-bottom: 1rem;
}

h3 {
  color: #eee;
  font-size: 7vmin;
  float: right;
  padding: 3rem 2rem;
  position: relative;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
}
</style>
