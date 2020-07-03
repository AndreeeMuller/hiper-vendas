<template>
  <q-page>
    <ListaClientes :contatos="contatos"></ListaClientes>
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
      contatos: []
    }
  },
  mounted () {
    for (let i = 1; i <= 100; i++) {     
      this.contatos.push({
        idcontato: i,
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
