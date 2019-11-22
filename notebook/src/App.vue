<template>
  <div id="app">
    <router-view></router-view>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/"></router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Head from './components/Head.vue';

@Component({
  components: {
    Head,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
