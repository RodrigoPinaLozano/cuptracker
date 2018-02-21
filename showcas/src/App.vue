<template>
  <div id="app">
    <div v-if="cupInCupboard">
      <h1>
        There's a cup in the cupboard.
      </h1>
      <img src="./assets/cup.png">
    </div>
    <div v-else>
          <h1 >
            Cupboard's empty :-(
          </h1>
          <img src="./assets/frowney.png">
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';
export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data: function() {
    return {
      cupInCupboard: false,
    };
  },
  created: function() {
    const myApp = this;
    this.interval = setInterval(
      function() {
        axios.get('http://100.104.3.6:8070/', {}).then(function(response) {
          let data = response.data;
          myApp.cupInCupboard = data[0].areCupsInCupboard;
        });
      }.bind(this),
      1000
    );
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
