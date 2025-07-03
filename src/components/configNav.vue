<template>
  <div class="q-pa-sm">
    <q-list
      bordered
      padding
      class="rounded-borders"
      :class="
        darkTheme ? 'text-grey-1 bg-dark-gray' : 'text-grey-10 bg-light-gray'
      "
    >
      <q-item
        :to="opcao.link"
        v-for="opcao in opcoes"
        :key="opcao.nome"
        clickable
        v-ripple
        :active="opcao_selecionada === opcao.link"
        @click="
          () => {
            opcao_selecionada = opcao.link;
            emit('clicou');
          }
        "
        :active-style="`color: ${corDestaque}; ${darkTheme ? 'text-grey-1 bg-dark-gray' : 'text-grey-10 bg-light-gray'}`"
      >
        <q-item-section avatar>
          <q-icon :name="opcao.icone" />
        </q-item-section>

        <q-item-section>{{ opcao.nome }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script setup>
import { pegaTema } from "src/composables/theme/theme";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const opcoes = [
  { nome: "Geral", icone: "sym_o_settings", link: "/settings/geral" },
];
const opcao_selecionada = ref("");
const darkTheme = ref("");
const corDestaque = ref("");
const route = useRoute();

const emit = defineEmits(["clicou"]);

[darkTheme.value, corDestaque.value] = pegaTema();

onMounted(() => {
  const rota = route.fullPath;
  if (rota.split("/").length > 2) {
    opcao_selecionada.value = rota;
  }
});
</script>
<style lang="scss"></style>
