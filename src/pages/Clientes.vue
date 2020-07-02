<template>
  <q-page>
    <q-list separator>
      <q-item clickable v-ripple v-for="contato in contatos" :key="contato.idcontato">
        <q-item-section side>
          <q-avatar color="primary" text-color="white">
            {{ contato.nome.split(' ').map(x => x[0].toUpperCase()).join('').substring(0, 2) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ contato.nome }}</q-item-label>
          <q-item-label caption>{{ contato.telefone }}</q-item-label>
          <q-item-label caption>{{ contato.cidade }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn  flat
                  round
                  dense
                  icon="more_vert"
                  @click.stop="">
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      contatos: [
        {
          idcontato: 1,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        },
        {
          idcontato: 2,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        },
        {
          idcontato: 3,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        },
        {
          idcontato: 4,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        },
        {
          idcontato: 5,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        },
        {
          idcontato: 6,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        },
        {
          idcontato: 7,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        },
        {
          idcontato: 8,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        },
        {
          idcontato: 9,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        },
        {
          idcontato: 10,
          nome: 'André Peil Müller',
          telefone: '41995538267',
          cidade: 'PR - Curitiba'
        }
      ]
    }
  }
}
</script>
