<template>
  <q-form @submit="submit"
          @reset="reset"
          class="q-gutter-md">
    <div class="row q-px-md shadow-15">
      <div class="col-6">
        <q-select borderless
                  v-model="form.tipo"
                  :options="tiposCliente"
                  map-options
                  emit-value>
        </q-select>
      </div>
    </div>
    <div class="row q-px-md">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <q-checkbox v-model="form.exclusivo"
                    label="É meu cliente exclusivo"
                    color="secondary">
        </q-checkbox>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <q-input  v-model="form.nome"
                  label="Nome"
                  color="secondary"
                  lazy-rules
                  :rules="[ val => val || 'Campo vazio.']">
          <template v-slot:before>
            <q-icon name="account_box" size="md" />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <q-input  v-model="form.nomefantasia"
                  label="Nome Fantasia"
                  color="secondary"
                  lazy-rules
                  :rules="[ val => val || 'Campo vazio.']">
          <template v-slot:before>
            <q-icon name="account_box" size="md" />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <q-input  v-model="form.inscricaoestadual"
                  label="Inscrição Estadual"
                  color="secondary"
                  lazy-rules
                  :rules="[ val => val || 'Campo vazio.']">
          <template v-slot:before>
            <q-icon name="account_box" size="md" />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'ManterClientes',
  props: {
    contatos: {
      type: Array,
      defualt: []
    }
  },
  data () {
    return {
      tiposCliente: [
        { value: 'S', label: 'Pessoa Simplificada' },
        { value: 'F', label: 'Pessoa Física' },
        { value: 'J', label: 'Pessoa Jurídica' }
      ],
      defaultForm: {
        idcliente: null,
        nome: null,
        exclusivo: false,
        tipo: 'S',
        telefone: null,
        telefonesecundario: null,
        email: null,
        cep: null,
        cidade: null,
        bairro: null,
        logradouro: null,
        numero: null,
        complemento: null,
        cpf: null,
        cnpj: null,
        nomefantasia: null,
        inscricaoestadual: null,
      },
      form: {},
      messageAction: 'Adicionar cliente'
    }
  },
  methods: {
    reset() {
      const vm = this;

      vm.form = Object.assign({}, vm.defaultForm);
      vm.messageAction = 'Adicionar cliente';
    },
    copy() {
      const vm = this;
      
      vm.form.idcliente = null;
      vm.messageAction = 'Copiando - ' + vm.form.nome;
    },
    edit(currentRow) {
      const vm = this;
      
      vm.form = Object.assign({}, currentRow);
      vm.messageAction = 'Editando - ' + vm.form.nome;
    },
    remove(currentRow) {
      const vm = this;

      let payload = Object.assign({}, currentRow);

      vm.$q.dialog({
          title: 'Confirmar',
          message: 'Você tem certeza que deseja excluir a Categoria "' + payload.idcategoria + ' - ' + payload.descricao + '"?',
          ok: 'Sim, com toda certeza.',
          cancel: 'Não, definitivamente não!'
        })
        .then(() => {
          vm.$q.loading.show();
          vm.$service.deleteCategoria(payload)
            .then((response) => {
              vm.$q.loading.hide();
              vm.$q.notify({
                message: response.data.message,
                type: response.data.type
              });
              vm.atualizaTable();
            });
        }).catch(() => {
          vm.$q.notify({
            message: 'Ufa, essa foi por pouco, excelente escolha!',
            type: 'info'
          });
        });
      
    },
    submit () {
      const vm = this;
      
      vm.$v.form.$touch();

      if (vm.$v.form.$error) {
        vm.$q.notify('Por favor, revise os campos.');
        return false;
      }

      let payload = Object.assign({}, vm.form);
      
      payload.action = payload.idcategoria ? 'update' : 'create';

      vm.$q.loading.show();
      vm.$service.createOrUpdateCategoria(payload)
        .then((response) => {
          vm.$q.loading.hide();
          vm.$q.notify({
            message: response.data.message,
            type: response.data.type
          });
          vm.atualizaTable();
        });
    },
  },
  mounted () {
    const vm = this;
  },
  created () {
    const vm = this;

    vm.form = Object.assign({}, vm.defaultForm);
  }
}
</script>
