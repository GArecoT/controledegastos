<template>
  <q-layout
    view="lHh Lpr lFf"
    :class="darkTheme ? 'bg-dark text-white' : 'bg-light text-grey-10'"
  >
    <q-header
      flat
      :class="
        q.screen.gt.md
          ? darkTheme
            ? 'bg-dark-gray text-grey-1'
            : 'bg-light-gray text-grey-10'
          : darkTheme
            ? 'bg-dark text-grey-1'
            : 'bg-light text-grey-10'
      "
    >
      <q-toolbar class="row justify-between">
        <q-toolbar-title class="font-lexend" :style="`color: ${corDestaque}`">
          Money Ctrl
        </q-toolbar-title>
        <q-btn
          dense
          round
          flat
          icon="sym_o_settings"
          :style="`color: ${corDestaque}`"
        >
          <q-tooltip>Settings</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row">
        <tabsComponent
          v-if="q.screen.gt.sm"
          :vertical="true"
          :tabs="tabs"
          :dark="true"
          :tab="tab"
        />
        <q-scroll-area
          :style="
            q.screen.lt.md
              ? 'height: calc(100vh - 107px)'
              : 'height: calc(100vh - 50px)'
          "
          class="col-xs-12 col-md"
        >
          <router-view class="full-width" />
        </q-scroll-area>
        <tabsComponent
          class="col-12"
          v-if="q.screen.lt.md"
          :tabs="tabs"
          :dark="true"
          :tab="tab"
        />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { LocalStorage, useQuasar } from "quasar";
import { computed, ref } from "vue";
import tabsComponent from "src/components/tabsComponent.vue";
import { useRoute } from "vue-router";

const q = useQuasar();

if (!LocalStorage.getItem("configuracoes"))
  LocalStorage.setItem("configuracoes", { dark: true, corDestaque: "#1976d2" });

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

const route = useRoute();
const tab = computed(() => route.name);
const tabs = [
  {
    name: "home",
    icon: "sym_o_home",
    label: "Home",
  },
  {
    name: "categories",
    icon: "sym_o_category",
    label: "Categories",
  },
  // {
  //   name: "home",
  //   icon: "sym_o_home",
  //   label: "Home",
  // },
];
</script>
