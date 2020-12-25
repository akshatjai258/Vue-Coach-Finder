import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coches'
    },
    {
      path: '/coches',
      component: null
    },
    {
      path: '/coches/:id',
      component: null,
      children: [
        {
          path: 'contact',
          component: null
        }
      ]
    },
    {
      path: '/register',
      component: null
    },
    {
      path: '/requests',
      component: null
    },
    {
      path: '/:notFound(.*',
      component: null
    }
  ]
});
