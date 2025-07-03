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
      <q-toolbar class="row">
        <q-btn
          dense
          round
          flat
          icon="sym_o_arrow_back"
          :style="`color: ${corDestaque}`"
          @click="router.go(-1)"
        >
          <q-tooltip>Settings</q-tooltip>
        </q-btn>
        <q-toolbar-title class="font-lexend" :style="`color: ${corDestaque}`">
          Configurações
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row">
        <configNav class="col-xs-12 col-md-3" />
        <q-scroll-area
          :style="
            q.screen.lt.md
              ? 'height: calc(100vh - 107px)'
              : 'height: calc(100vh - 50px)'
          "
          class="col-xs-12 col-md"
        >
          <transition
            appear
            :enter-active-class="
              q.screen.lt.md
                ? 'animated fadeInUp faster'
                : 'animated fadeIn faster'
            "
          >
            <router-view class="full-width" />
          </transition>
        </q-scroll-area>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { LocalStorage, useQuasar } from "quasar";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import configNav from "src/components/configNav.vue";
import { setTemaPadraoeRetorna } from "src/composables/theme/theme";

const q = useQuasar();
const route = useRoute();
const router = useRouter();
const darkTheme = ref("");
const corDestaque = ref("");

[darkTheme.value, corDestaque.value] = setTemaPadraoeRetorna();

const tab = computed(() => route.name);
const configs = [
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
  {
    name: "payment",
    icon: "sym_o_money",
    label: "Payment",
  },
];
</script>
