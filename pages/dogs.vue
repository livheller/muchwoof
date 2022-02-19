<template>
  <main class="container">
    <h1>The Doggos</h1>
    <AppDogInfo :datasource="dogdata" />
  </main>
</template>

<script>
import AppDogInfo from "@/components/AppDogInfo.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["dogdata"]),
  },

  components: {
    AppDogInfo,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  padding-top: 3rem;
}
</style>
