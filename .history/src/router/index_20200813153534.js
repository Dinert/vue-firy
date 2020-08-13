import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 一级路由
const Home = () => import(/* webpackChunkName: Home */ "@/views/Home");
const Item = () => import(/* webpackChunkName: Item */ "@/views/Item");
const Score = () => import(/* webpackChunkName: Score */ "@/views/Score");

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item',
    name: 'Item',
    component: Item
  },
  {
    path: '/score',
    name: 'Score',
    component: Score
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
