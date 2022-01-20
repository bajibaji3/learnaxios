import Vue from 'vue'
import App from './App.vue'

// import axios from "axios";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 5000
//全局使用axios
// axios({
//   url: '/post',
//   method: 'post'
// }).then(res => {
//   console.log(res);
// })
//
// axios({
//   url: '/cache',
//   method: 'get',
//   //get方法可将参数拼接到地址上，也可放在params属性里面,专门针对get方法
//   params: {
//     value: 1
//   }
// }).then(res => {
//   console.log(res);
// })
//
// axios.all([axios({
//   url: '/post',
//   method: 'post'
// }), axios({
//   url: '/cache',
//   method: 'get',
//   params: {
//     value: 1
//   }
// })]).then(results => {
//   console.log(results);
// })

//不使用全局的axios，创建对应的axios实例,每个实例可以有自己独立的配置
// const instance1 = axios.create({
//   baseURL: 'http://httpbin.org',
//   timeout: 5000,
// })
//
// instance1({
//   url: '/post',
//   method: 'post'
// }).then(res => {
//   console.log(res);
// })

//5、封装request模块
// import {request} from "@/network/request";

// request({url: '/post', method: 'post'},
//     res => {
//       console.log(res);
//     },
//     err => {
//       console.log(err);
//     })

// request({
//   baseConfig: {
//     url: '/post',
//     method: 'post'
//   },
//   success: function (res) {
//     console.log(res);
//   },
//   error: function (err) {
//     console.log(err);
//   }
// })

// request({url: '/post', method: 'post'}).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

