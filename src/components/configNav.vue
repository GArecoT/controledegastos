<template>
  <div class="q-pa-sm">
    <q-list
      bordered
      padding
      class="rounded-borders"
      :class="darkTheme ? 'text-grey-1' : 'text-grey-10'"
    >
      <q-item
        v-for="opcao in opcoes"
        :key="opcao.nome"
        clickable
        v-ripple
        :active="opcao_selecionada === opcao.nome"
        @click="opcao_selecionada = opcao.nome"
        active-class="bg-dark-gray"
        :active-style="`color: ${corDestaque}`"
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
import { LocalStorage } from "quasar";
import { ref } from "vue";

const opcoes = [{ nome: "Geral", icone: "sym_o_settings" }];
const opcao_selecionada = ref("");

const darkTheme = ref(
  LocalStorage.hasItem("configuracoes") &&
    LocalStorage.getItem("configuracoes")?.dark
    ? true
    : false,
);
const corDestaque = ref(
  LocalStorage.hasItem("configuracoes") &&
    LocalStorage.getItem("configuracoes")?.corDestaque,
);
</script>
<style lang="scss"></style>
