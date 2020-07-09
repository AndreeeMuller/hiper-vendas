<template>
  <q-list separator>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <q-item clickable v-ripple v-for="cliente in clientesList" :key="cliente.idcliente" @click="">
        <q-item-section side>
          <q-avatar :color="colors[Math.floor(Math.random() * colors.length)]" text-color="white">
            {{ cliente.nome.split(' ').map(x => x[0].toUpperCase()).join('').substring(0, 2) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-weight-medium">{{ cliente.nome }}</q-item-label>
          <q-item-label caption>{{ cliente.telefone }}</q-item-label>
          <q-item-label caption>{{ cliente.cidade }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn-dropdown flat
                          round
                          dense
                          dropdown-icon="more_vert">
            <q-list>
              <q-item v-if="cliente.telefone" clickable v-ripple @click="openUrl('tel:' + cliente.telefone)">
                <q-item-section side>
                  <q-icon name="phone" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label >Telefonar</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-if="cliente.email" clickable v-ripple @click="openUrl('mailto:' + cliente.email)">
                <q-item-section side>
                  <q-icon name="email" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Enviar e-mail</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-if="cliente.enderecocompleto" clickable v-ripple @click="openUrl('https://www.google.com/maps/search/?api=1&query=' + cliente.enderecocompleto)">
                <q-item-section side>
                  <q-icon name="place" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Ver rota</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown >
        </q-item-section>
      </q-item>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-list>
</template>

<script>
export default {
  name: 'ListaClientes',
  props: {
    clientes: {
      type: Array,
      defualt: []
    }
  },
  data () {
    return {
      colors: [ 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'orange', 'deep-orange', 'brown', 'blue-grey' ],
      clientesList: [],
    }
  },
  methods: {
    openUrl (url) {
      window.open(url)
    },
    onLoad (index, done) {
      setTimeout(() => {
        console.log(this.clientesList.length,this.clientes.length)
        if (this.clientesList && this.clientesList.length != this.clientes.length) {
          let length = this.clientesList.length
          let i = length
          for (i; i <= (length + 20) && i < this.clientes.length; i++) {
            this.clientesList.push(this.clientes[i])
          }
          done()
        }
      }, 200)
    }
  }
}
</script>
