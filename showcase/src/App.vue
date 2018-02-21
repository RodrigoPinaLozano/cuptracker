<template>
  <div id="app">
    <div v-if="cupInCupboard">
      <h1>
        There's at least one cup in the cupboard.
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
  methods: {
    loadData: function() {
      const myApp = this;
      axios.get('http://100.104.3.6:8070/', {}).then(function(response) {
        let data = response.data;
        myApp.cupInCupboard = data[0].areCupsInCupboard;
      });
    },
  },
  created: function() {
    const myApp = this;
    myApp.loadData();
    this.interval = setInterval(
      function() {
        myApp.loadData();
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
