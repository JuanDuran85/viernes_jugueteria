import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/store';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/edicion',
    name: 'Edicion',
    component: () => import('../views/Edicion.vue')
  },
  {
    path: '/eliminar/:id',
    name: 'Eliminar',
    component: () => import('../views/Eliminar.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let loginRequerido = to.matched.some(ruta => ruta.meta.requireAuth);

  if(loginRequerido && !store.state.uidUser){
    next('/login')
  }else{
    next()
  }
})

export default router
