<template>
  <div>
    <pre> {{ currentDog }}</pre>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["dogdata"]),
    currentDog() {
      let result;
      for (let i = 0; i < this.dogdata.length; i++) {
        if (this.dogdata[i].id === this.id) {
          result = this.dogdata[i];
          break;
        }
      }

      return result;
    },
  },
};
</script>

<style lang="scss" scoped></style>
