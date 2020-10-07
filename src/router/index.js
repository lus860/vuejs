import { createRouter, createWebHistory } from 'vue-router'


const routes = [

  {
    path: '/',
    name: 'home',
    meta:{layout:'Main'},
    component:()=>import('../views/Home.vue')
  },
  {
    path: '/cat',
    name: 'cat',
    meta:{layout:'Main'},
    component:()=>import('../views/Cat.vue')
  },
  {
    path: '/dog',
    name: 'dog',
    meta:{layout:'Main'},
    component:()=>import('../views/Dog.vue')
  },
  {
    path: '/horse',
    name: 'horse',
    meta:{layout:'Main'},
    component:()=>import('../views/Horse.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
