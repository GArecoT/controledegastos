<template>
  <q-layout
    view="lHh Lpr lFf"
    :class="darkTheme ? 'bg-dark text-white' : 'bg-light text-grey-10'"
  >
    <q-header
      flat
      v-if="
        !(
          q.screen.lt.md &&
          route.fullPath.split('/').length > 2 &&
          route.fullPath.split('/')[2]?.length > 0
        )
      "
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
          :color="corDestaque"
          @click="router.push('/')"
        >
          <q-tooltip>Settings</q-tooltip>
        </q-btn>
        <q-toolbar-title class="font-lexend" :class="`text-${corDestaque}`">
          Configurações
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row" v-if="q.screen.gt.sm">
        <configNav class="col-xs-12 col-md-3" @clicou="openDialog = true" />
        <q-scroll-area
          v-if="q.screen.gt.sm"
          :style="
            q.screen.lt.md
              ? 'height: calc(100vh - 107px)'
              : 'height: calc(100vh - 50px)'
          "
          class="col-xs-12 col-md"
        >
          <router-view
            v-slot="{ Component }"
            class="full-width"
            :class="
              darkTheme
                ? 'bg-dark-gray text-grey-1'
                : 'bg-light-gray text-grey-10'
            "
          >
            <transition
              appear
              :enter-active-class="
                q.screen.lt.md
                  ? 'animated fadeInUp faster'
                  : 'animated fadeIn faster'
              "
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </q-scroll-area>
      </div>
      <div v-else>
        <configNav
          class="full-width"
          v-if="
            route.fullPath.split('/').length < 3 ||
            !(route.fullPath.split('/')[2]?.length > 0)
          "
          @clicou="openDialog = true"
        />
        <q-card v-else>
          <router-view
            v-slot="{ Component }"
            class="full-width"
            :class="
              darkTheme
                ? 'bg-dark-gray text-grey-1'
                : 'bg-light-gray text-grey-10'
            "
          >
            <transition
              appear
              :enter-active-class="
                q.screen.lt.md
                  ? 'animated slideInRight'
                  : 'animated slideOutLeft'
              "
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import configNav from "src/components/configNav.vue";
import { useConfigStore } from "src/stores/stConfig/stConfig";

const q = useQuasar();
const router = useRouter();
const route = useRoute();

const storeConfig = useConfigStore();

const openDialog = ref(false);
const darkTheme = computed(() => storeConfig.getConfig.darkMode);
const corDestaque = computed(() => storeConfig.getCorDestaque);
</script>
