<template>
  <nav>
    <ul>
      <li><nuxt-link exact to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/dogs">Dogs</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
    <section class="pawContainer">
        <nuxt-link to="/dogs">
          <AppPawPrint />
        </nuxt-link>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
section {
float: right;
}
svg {
  width: 4rem;
  margin-top: -3rem;
  margin-bottom: 2rem;
  margin-right: 1.5rem;
}
</style>

<script>
import AppPawPrint from "./AppPawPrint.vue";

export default {
  components: {
    AppPawPrint,
  },
};
</script>
