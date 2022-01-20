import axios from "axios";

// export function request(config, success, error) {
//   //1、创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://httpbin.org',
//     timeout: 5000,
//   })
//
//   //发送真正的网络请求
//   instance(config).then(res => {
//     // console.log(res);
//     success(res);
//   }).catch(err => {
//     // console.log(err);
//     error(err);
//   })
// }

// export function request(config) {
//   //1、创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://httpbin.org',
//     timeout: 5000,
//   })
//
//   //发送真正的网络请求
//   instance(config.baseConfig).then(res => {
//     // console.log(res);
//     config.success(res);
//   }).catch(err => {
//     // console.log(err);
//     config.error(err);
//   })
// }

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //1、创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://httpbin.org',
//       timeout: 5000,
//     })
//
//     //发送真正的网络请求
//     instance(config).then(res => {
//       // console.log(res);
//       resolve(res);
//     }).catch(err => {
//       // console.log(err);
//       reject(err);
//     })
//   })
// }

export function request(config) {
  //1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000,
  })

  //2、axios拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    //1、比如config里的一些信息不符合服务器要求
    //2、比如每次发送网络请求时希望在界面显示一个网络请求的图标
    //3、某些网络请求必须携带一些特殊的信息（token）
    return config;
  }, err => {
    console.log(err);
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res;
  }, err => {
    console.log(err);
  })

  //3、发送真正的网络请求
  return instance(config)
}