import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js';
import * as CONFIG from '@/config.js'
import Login from '@/components/Login'
import Layout from '@/components/Layout'
import App from '@/router/app.js'

Vue.use(Router);



var router = new Router({
  routes: [

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/app',
      name: 'app',
      component : Layout,
      children: App
    }
  ]
});

/* Mediante lo siguiente, marco el menú actual en función de cual sea la vista */
router.beforeEach((to, from, next) => {
    if (to.path != '/login'){
      let division = (to.path).split('/');
      let menu = (division[1] == 'app' && typeof division[2] != 'undefined') ? division[2] : 'dashboard';
      store.commit('setMenu', { menu: division[2] });
    }

    next();
});

export default router;
