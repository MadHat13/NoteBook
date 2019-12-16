import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Index from "../views/Index.vue";
import Regist from "../views/Regist.vue";
import test from "../views/test.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },{
    path: '/regist',
    name: 'regist',
    component: Regist,
  },{
    path: '/index',
    name: 'index',
    component: Index,
  },{
    path: '/test',
    name: 'test',
    component: test,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
