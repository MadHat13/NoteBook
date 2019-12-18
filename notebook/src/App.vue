<template>
  <div class="main">
    <router-view></router-view>
    <router-link to="/"></router-link>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class App extends Vue {
};

</script>

<style lang="scss">
body {
    background-color: #FFFFFF;
    color: #666666;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    padding: 0;
    
}
.main{
  
}
</style>
