<template>
  <pageComponent titulo="Categorias"
    ><q-table
      class="full-width"
      style="max-width: 1200px"
      title="Payment Methods"
      :rows="listaPagamentos"
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
        :style="`background-color: ${corDestaque}`"
        :class="darkTheme ? 'text-dark' : 'text-white'"
        @click="dialogAdicionar = true"
      />
    </q-page-sticky>
  </pageComponent>
  <q-dialog v-model="dialogAdicionar"
    ><paymentAddComponent @fechar="dialogAdicionar = false"
  /></q-dialog>
</template>
<script setup>
import pageComponent from "src/components/pageComponent.vue";
import { setTemaPadraoeRetorna } from "src/composables/theme/theme";
import paymentAddComponent from "src/components/paymentAddComponent.vue";
import { ref } from "vue";

const darkTheme = ref("");
const corDestaque = ref("");
[darkTheme.value, corDestaque.value] = setTemaPadraoeRetorna();
const dialogAdicionar = ref(false);

const idSelecionado = ref("");

const listaPagamentos = ref([
  { name: "Nubank", type: "Cartão", limit: "100,00" },
]);

function handleClickRow(_, row) {
  idSelecionado.value = row.id;
  dialogAdicionar.value = true;
}
</script>
