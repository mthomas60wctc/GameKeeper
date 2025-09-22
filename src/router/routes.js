const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: { title: 'Home | GameKeeper' },
      },
      {
        path: 'ongoingGame',
        component: () => import('pages/ongoingGame.vue'),
        meta: { title: 'Ongoing Game | GameKeeper' },
      },
      {
        path: 'newGame',
        component: () => import('pages/newGame.vue'),
        meta: { title: 'New Game | GameKeeper' },
      },
      {
        path: 'newInstance',
        component: () => import('pages/newInstance.vue'),
        meta: { title: 'New Instance | GameKeeper' },
      },
      {
        path: 'recordsView',
        component: () => import('pages/recordsView.vue'),
        meta: { title: 'Records | GameKeeper' },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: { title: 'Not Found | GameKeeper' },
  },
]

export default routes
