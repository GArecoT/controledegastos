<template>
  <q-card :dark="darkTheme" class="shadow-1" style="width: 400px">
    <q-card-section class="row items-center content-center">
      <span class="">Payment method</span>
    </q-card-section>

    <q-form @submit="salvar">
      <q-card-section class="row q-gutter-y-xs">
        <q-input
          class="col-12 input-field"
          label="Name"
          :dark="darkTheme"
          outlined
          v-model="pagamento.nome"
          lazy-rules="ondemand"
          :rules="verificadores.campo"
        />
        <q-select
          class="col-md-6 col-xs-12 input-field"
          :options="tipos_pagamento"
          label="Type"
          :dark="darkTheme"
          option-label="nome"
          option-value="id"
          outlined
          map-options
          emit-value
          v-model="pagamento.tipo"
          :rules="verificadores.campo"
          lazy-rules="ondemand"
        />
        <q-input
          class="col-md-6 col-xs-12 q-pl-xs input-field"
          label="Limit"
          :dark="darkTheme"
          outlined
          type="tel"
          reverse-fill-mask
          mask="#.###.###.###,##"
          v-model="pagamento.limite"
          :rules="verificadores.campo"
          lazy-rules="ondemand"
        />
      </q-card-section>
      <q-card-section class="row justify-between q-gutter-x-sm">
        <q-btn
          label="Apagar"
          icon="sym_o_delete"
          flat
          color="red-5"
          dense
          v-close-popup
          :disable="!(pagamento.id > 0)"
          no-caps
        />
        <div class="row q-gutter-x-sm">
          <q-btn label="Cancelar" flat color="red-5" dense no-caps v-close-popup />
          <q-btn label="Salvar" unelevated :color="storeConfig.getCorDestaque" no-caps type="submit" />
        </div>
      </q-card-section>
    </q-form>
  </q-card>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import tipos_pagamento from "src/composables/database/constantes/tipos_pagamento.json";
import verificadores from "src/composables/verificadores";
import { useConfigStore } from "src/stores/stConfig/stConfig";

const props = defineProps({
  id: { type: String, required: false },
});
const emit = defineEmits(["fechar"]);
const storeConfig = useConfigStore();

const darkTheme = computed(() => storeConfig.getConfig.darkMode);
const pagamento = ref({
  nome: "",
  tipo: "0",
  limite: "0,00",
  id: "",
});

async function salvar() {
  //formata valor
  //enviar para bd
  //fehcar se sucesso
  emit("fechar");
}

onMounted(() => {
  //pegar dados do props.id
  pagamento.value.id = props.id;
});
</script>
