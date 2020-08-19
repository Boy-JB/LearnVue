<template>
  <div>
    <div>{{categorys}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "HelloWorld",
  data() {
    return {
      categorys: ''
    }
  },
  created() {
    axios({
      url: "http://123.207.32.32:8000/api/x6/category",
    }).then((res) => {
      this.categorys = res;
    });
  },
}
</script>