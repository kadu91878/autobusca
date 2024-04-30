import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarView from '../views/CarView.vue'
import FinanciamentoView from '../views/FinanciamentoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/teste',
      name: 'teste',
      component: () => import('../views/TesteView.vue')

    },
    {
      path: '/carro/:id',
      name: 'Carro',
      component: CarView,
      props: true
    },
    {
      path: '/financiamento',
      name: 'Financiamento',
      component: FinanciamentoView
    }
  ]
})

export default router
