<template>
  <div id="app">
    <div>{{result}}</div>
    <div>-------------------------------</div>
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      result: "",
    };
  },
  created() {
    axios({
      url: "http://123.207.32.32:8000/api/x6/home/multidata",
    }).then((res) => {
      this.result = res;
    });
  },
};
</script>

<style>
</style>
