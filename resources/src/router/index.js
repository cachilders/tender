import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '../views/Home.vue';
import About from '../views/About.vue';

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/about', component: About },
    { path: '*', component: Home }
  ]
});
