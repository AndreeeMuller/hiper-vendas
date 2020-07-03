<template>
  <q-list separator>
    <q-item clickable v-ripple v-for="contato in contatos" :key="contato.idcontato" @click="teste()">
      <q-item-section side>
        <q-avatar :color="colors[Math.floor(Math.random() * colors.length)]" text-color="white">
          {{ contato.nome.split(' ').map(x => x[0].toUpperCase()).join('').substring(0, 2) }}
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-weight-medium">{{ contato.nome }}</q-item-label>
        <q-item-label caption>{{ contato.telefone }}</q-item-label>
        <q-item-label caption>{{ contato.cidade }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn-dropdown flat
                        round
                        dense
                        dropdown-icon="more_vert"
                        @click.stop="">
          <q-list>
            <q-item v-if="contato.telefone" clickable v-ripple @click="openUrl('tel:' + contato.telefone)">
              <q-item-section side>
                <q-icon name="phone" color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label >Telefonar</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-if="contato.email" clickable v-ripple @click="openUrl('mailto:' + contato.email)">
              <q-item-section side>
                <q-icon name="email" color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Enviar e-mail</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-if="contato.enderecocompleto" clickable v-ripple @click="openUrl('https://www.google.com/maps/search/?api=1&query=' + contato.enderecocompleto)">
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
  </q-list>
</template>

<script>
export default {
  name: 'ListaClientes',
  props: {
    contatos: {
      type: Array,
      defualt: []
    }
  },
  data () {
    return {
      colors: [ 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'orange', 'deep-orange', 'brown', 'blue-grey' ],
    }
  },
  methods: {
    openUrl (url) {
      window.open(url)
    }
  }
}
</script>
