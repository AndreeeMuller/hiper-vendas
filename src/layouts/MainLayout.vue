<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-tabs align="center" indicator-color="transparent" active-color="primary" class="bg-grey-3 text-blue-grey" no-caps v-if="$route.meta.showMenu">
        <q-route-tab exact to="/pedidos" icon="list_alt" label="Pedidos" />
        <q-route-tab exact to="/clientes" icon="perm_contact_calendar" label="Clientes" />
        <q-route-tab exact to="/produtos" icon="local_grocery_store" label="Produtos" />
        <q-route-tab exact to="/configuracoes" icon="miscellaneous_services" label="Configurações" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
