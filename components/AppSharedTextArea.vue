<template>
  <div class="textarea-container">
    <FormulateInput type="textarea" v-if="data" label="Notes" v-model="value" />
  </div>
</template>

<script>
export default {
  name: "TextArea",
  data() {
    return {
      value: this.data,
    };
  },
  props: {
    data: {
      type: [Array, String],
    },
  },
};
</script>

<style lang="scss" scoped></style>
