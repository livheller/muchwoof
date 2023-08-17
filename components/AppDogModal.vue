<template>
  <div class="modal-bg">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"></slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body">Whoops! Who let the dogs out?</slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer"></slot>
        <button type="button" class="btn-brown" @click="close">Back</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  padding: 20px;
  width: 100%;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  color: rgb(55, 46, 41);
  position: absolute;
  top: -1rem;
  right: 0;
  border: none;
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

.btn-brown {
  color: white;
  background: lighten(rgb(55, 46, 41), 10%);
  border: 1px solid black;
  border-radius: 15px;
}
</style>
