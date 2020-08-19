import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

// 1.基本使用
// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: "get"
// }).then(res => {
//   console.log(res);
// });

// 2.axios发送并发请求
// axios.defaults.baseURL = "http://123.207.32.32:8000/api/x6";
// axios.defaults.timeout = "5000";

// axios
//   .all([
//     axios({
//       url: "/home/multidata"
//     }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 5
//       }
//     })
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1);
//       console.log(res2);
//     })
//   );

// axios({
//   url: "/category"
// });

// 3.使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = "http://123.207.32.32:8000/api/x6";
// axios.defaults.timeout = "5000";

// axios
//   .all([
//     axios({
//       url: "/home/multidata"
//     }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 5
//       }
//     })
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1);
//       console.log(res2);
//     })
//   );

// axios({
//   url: "/category"
// });


// 4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000/api/x6',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 5.封装request模块
import {request} from './network/request'

// request({
//   url: 'home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request({
//   baseConfig: {

//   },
//   success: function(res) {

//   },
//   failture: function(err) {

//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  // console.log(err);
})