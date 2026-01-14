<template>
  <pageComponent titulo="Home">
    <div class="full-width row justify-center content-start items-start">
      <div
        class="full-width q-pr-sm q-mb-xs row justify-between"
        style="max-width: 1200px"
      >
        <div class="row">
          <q-select
            label="Month"
            :options="meses"
            option-label="nome"
            option-value="numero"
            style="width: 130px"
            outlined
            :dark="darkTheme"
            v-model="mes"
            map-options
            emit-value
            @update:model-value="handleMudancaMes"
          />
          <div class="row">
            <!-- TODO: FAZER OS BOTÕES FUNCIONAIS -->
            <q-btn dense icon="arrow_left" flat color="primary" />
            <q-input
              label="Year"
              style="width: 70px"
              outlined
              :dark="darkTheme"
              v-model="ano"
              map-options
              emit-value
              @update:model-value="handleMudancaMes"
            />
            <q-btn dense icon="arrow_right" flat color="primary" />
          </div>
        </div>

        <div class="row q-gutter-x-xs">
          <div
            class="rounded-borders q-pa-sm"
            :class="darkTheme ? 'bg-dark-gray' : 'bg-light-gray'"
            style="height: fit-content"
          >
            <p style="font-size: 0.8rem" class="q-mb-xs text-primary">
              <q-icon name="sym_o_currency_exchange" class="q-mr-sm" />Dívidas
              Recorrentes
            </p>
            <div class="full-width row justify-end items-center">R$ 12,00</div>
          </div>
          <div
            class="rounded-borders q-pa-sm"
            :class="darkTheme ? 'bg-dark-gray' : 'bg-light-gray'"
            style="height: fit-content"
          >
            <p
              style="font-size: 0.8rem"
              class="q-mb-xs text-primary text-right"
            >
              Total
            </p>
            <div class="full-width row justify-end items-center q-gutter-x-md">
              <div v-for="pagamento in tipos_pagamento" :key="pagamento.id">
                <q-icon :name="pagamento.icone" class="q-mr-sm" />R$ 12,00
                <q-tooltip>{{ pagamento.nome }}</q-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <q-table
        class="full-width"
        style="max-width: 1200px"
        title="Lançamentos"
        :rows="listaLancamentos"
        :dark="darkTheme"
        :pagination="{ rowsPerPage: 0 }"
        hide-bottom
        flat
        bordered
        @row-click="handleClickRow"
      />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          fab
          icon="sym_o_add"
          :color="corDestaque"
          :class="darkTheme ? 'text-dark' : 'text-white'"
          @click="dialogAdicionar = true"
        />
      </q-page-sticky>
    </div>
  </pageComponent>
</template>
<script setup>
import pageComponent from "src/components/pageComponent.vue";
import tipos_pagamento from "src/composables/database/constantes/tipos_pagamento.json";
import meses from "src/composables/database/constantes/meses.json";
import { computed, onMounted, ref } from "vue";
import { useConfigStore } from "src/stores/stConfig/stConfig";

const storeConfig = useConfigStore();

const darkTheme = computed(() => storeConfig.getConfig.darkMode);
const corDestaque = computed(() => storeConfig.getCorDestaque);

const listaLancamentos = ref([
  { name: "Nubank", type: "Cartão", limit: "100,00" },
]);

function pegaDataAtual() {}

const mes = ref(1);
const ano = ref("2026");

function handleClickRow(_, row) {
  console.log(row);
}

function handleMudancaMes() {
  //TODO: filtrar mes atual
}

onMounted(() => {
  //TODO: Pegar mês atual
  pegaDataAtual();
});
</script>
