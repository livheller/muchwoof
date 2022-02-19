<template>
  <nav>
    <ul>
      <li><nuxt-link exact to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/dogs">Dogs</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li>
        <nuxt-link to="/dogs">
          <AppPawPrint />
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
svg {
  position: relative;
  left: 54rem;
  width: 4rem;
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
