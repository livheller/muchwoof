<template>
  <section class="card">
    <slot name="card-dog">hi {{ data.name }}</slot>
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

<style lang="scss" scoped></style>
