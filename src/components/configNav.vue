<template>
  <div class="q-pa-sm">
    <q-list
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
        :active-style="`${darkTheme ? 'text-grey-1 bg-dark-gray' : 'text-grey-10 bg-light-gray'}`"
        :active-class="`text-${storeConfig.getCorDestaque}`"
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
import { useConfigStore } from "src/stores/stConfig/stConfig";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const storeConfig = useConfigStore();

const opcoes = [
  { nome: "Geral", icone: "sym_o_settings", link: "/settings/geral" },
];
const opcao_selecionada = ref("");
const darkTheme = computed(() => storeConfig.getConfig.darkMode);
const route = useRoute();

const emit = defineEmits(["clicou"]);

onMounted(() => {
  const rota = route.fullPath;
  if (rota.split("/").length > 2) {
    opcao_selecionada.value = rota;
  }
});
</script>
<style lang="scss"></style>
