<template>
  <q-page>
    <ManterClientes></ManterClientes>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="secondary" icon="arrow_back" :to="$route.meta.returnTo" />
    </q-page-sticky>
  </q-page>
</template>

<script>

import ManterClientes from 'components/ManterClientes'

export default {
  components: {
    ManterClientes
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
