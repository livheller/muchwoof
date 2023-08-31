<template>
  <div class="textarea-container">
    <FormulateInput
      type="textarea"
      v-if="data"
      label="Notes"
      v-model="value"
      class="label"
    />
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

<style lang="scss" scoped>
.label {
  font-weight: 600;
  width: 3rem;
  height: 10px;
}
.textarea-container {
  grid-column: 1/4;
  width: 14rem;
}

.formulate-input {
  width: 15rem;
  .formulate-input-element {
    width: 14rem;
    margin-top: 0.5rem;
    max-width: 200rem;
    .formulate-input-element--textarea {
      width: 14rem;
      margin-top: 0.5rem;
    }
  }

  .formulate-input-wrapper {
    width: 14rem;
  }
}
</style>
