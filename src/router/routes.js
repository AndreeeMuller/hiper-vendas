
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'pedidos', component: () => import('pages/Pedidos.vue') },
      {
        path: 'pedidos',
        component: () => import('pages/Pedidos.vue'),
        meta: {
          returnTo: '/',
          showMenu: true
        }
      },
      {
        path: 'clientes',
        component: () => import('pages/Clientes.vue'),
        meta: {
          returnTo: '/',
          showMenu: true
        }
      },
      {
        path: 'clientes/adicionar',
        component: () => import('pages/ClientesAdicionar.vue'),
        meta: {
          returnTo: '/clientes',
          showMenu: false
        }
      },
      {
        path: 'produtos',
        component: () => import('pages/Produtos.vue'),
        meta: {
          returnTo: '/',
          showMenu: true
        }
      },
      {
        path: 'configuracoes',
        component: () => import('pages/Configuracoes.vue'),
        meta: {
          returnTo: '/',
          showMenu: true
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
