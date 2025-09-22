import IndexPage from 'pages/IndexPage.vue'
import newInstance from 'pages/newInstance.vue'
import newGame from 'pages/newGame.vue'
import ongoingGame from 'pages/ongoingGame.vue'
import recordsView from 'pages/recordsView.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => IndexPage,
        meta: { title: 'Home | GameKeeper' },
      },
      {
        path: 'ongoingGame',
        component: () => ongoingGame,
        meta: { title: 'Ongoing Game | GameKeeper' },
      },
      {
        path: 'newGame',
        component: () => newGame,
        meta: { title: 'New Game | GameKeeper' },
      },
      {
        path: 'newInstance',
        component: () => newInstance,
        meta: { title: 'New Instance | GameKeeper' },
      },
      {
        path: 'recordsView',
        component: () => recordsView,
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
