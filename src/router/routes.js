
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'pedidos', component: () => import('pages/Pedidos.vue') },
      { path: 'pedidos', name: 'pedidos', component: () => import('pages/Pedidos.vue') },
      { path: 'clientes', component: () => import('pages/Clientes.vue') },
      { path: 'produtos', component: () => import('pages/Produtos.vue') },
      { path: 'configuracoes', component: () => import('pages/Configuracoes.vue') }
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
