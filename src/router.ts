import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Custom from './views/Custom.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/custom',
      name: 'custom',
      component: Custom,
    },
  ],
});
