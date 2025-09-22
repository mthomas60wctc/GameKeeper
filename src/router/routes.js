const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'ongoingGame', component: () => import('pages/ongoingGame.vue') },
      { path: 'newGame', component: () => import('pages/newGame.vue') },
      { path: 'newInstance', component: () => import('pages/newInstance.vue') },
      { path: 'recordsView', component: () => import('pages/recordsView.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
