<template>
  <q-page>
    <ListaClientes :clientes="clientes"></ListaClientes>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="secondary" icon="add" to="/clientes/adicionar" />
    </q-page-sticky>
  </q-page>
</template>

<script>

import ListaClientes from 'components/ListaClientes'

export default {
  components: {
    ListaClientes
  },
  data () {
    return {
      clientes: []
    }
  },
  mounted () {
    for (let i = 1; i <= 100; i++) {     
      this.clientes.push({
        idcliente: i,
        nome: 'André Peil Müller',
        telefone: '41995538267',
        cidade: 'PR - Curitiba',
        email: 'andre@iandev.com.br',
        enderecocompleto: 'Rua Djalma Ferreira Maciel, 632, Lindóia, Curitiba, Paraná'
      })
    }
  }
}
</script>
