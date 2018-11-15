// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import './css/index.css';
import './css/font/iconfont.css';

import apiconf from './js/apiconf.js'

import VueHighcharts from 'vue-highcharts';
import VueI18n from 'vue-i18n'

Vue.use(VueHighcharts);
Vue.use(VueI18n)


import axios from 'axios';


//引入cookie的操作方法
import {
    getCookie,
    setCookie
} from "./js/cookie.js";


// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale:getLang(),
  messages: {
    'zh': require('@/language/zh.json'),
    'en': require('@/language/en.json')
  }
})

function getLang(){
    let lang = localStorage.getItem('LANG');
    if(lang){
      return lang;
    }else{
      return 'zh'
    }
}

//  在拦截器中添加tokenid
axios.interceptors.request.use(
  config => {
      config.headers.apiToken = apiconf.apiToken;
      // 这里写死一个token，然后在这里从cookie中获取到token的值
      var token = sessionStorage.getItem('accessToken');
      if (token) {
          // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
          config.headers.accessToken = token;

      }

      return config
  },
  error => {
      return Promise.reject(error)
});

//返回拦截器
axios.interceptors.response.use((response) => {
  if (response.data.message == 'invalid apiToken') {
    console.log(response.data.message);
    alert(response.data.message);
    return;
  }

  // token 已过期，重定向到登录页面 
  if (response.data.message == 'invalid token') {
    console.log(response.data.message);
    window.location.href = apiconf.weburl+"login";
    return;
  }

  return response;
}, function (error) {
  // Do something with response error  
  return Promise.reject(error);
});

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.prototype.api = apiconf;      //请求地址的配置




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
