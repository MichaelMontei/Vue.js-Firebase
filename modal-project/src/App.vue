<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name"><br><br>
  <button @click="handleClick">Click me</button>
  <Modal :header="header" :text="text" theme="sale"/>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {Modal},
  data(){
    return {
      title: 'My first Vue App :)',
      header: 'Sign up for the Giveaway',
      text: 'Grab your ninja swag for half price!'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)  // We can acces this by calling the refs inside the template with the name.
      this.$refs.name.classList.add('active') // With this method we can add a class active to this ref.
      this.$refs.name.focus() // focus goes to that input field.
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
