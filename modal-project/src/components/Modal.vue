<template>
<div class="backdrop">
  <div class="modal" :class="{ sale: theme === 'sale' }">
    <h1>{{ header }}</h1>
    <p>{{ text }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "Modal.vue",
  props: ['header', 'text', 'theme']
}
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  }
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
</style>