<template>
  <main class="container">
    <AppHeader />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppLanding from "@/components/AppLanding.vue";

export default {
  components: {
    AppLanding,
    AppHeader,
  },
};
</script>

<style lang="scss"></style>
