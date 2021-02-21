import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Customers from '../views/Customers.vue'
import Suppliers from '../views/Suppliers.vue'
import Warehouse from '../views/Warehouse.vue'
import Store from '../views/Store.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/',
    name: 'Suppliers',
    component: Suppliers
  },
  {
    path: '/',
    name: 'Warehouse',
    component: Warehouse
  },
  {
    path: '/',
    name: 'Store',
    component: Store
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
