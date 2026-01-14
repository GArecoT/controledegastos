<template>
  <pageComponent
    :voltar="q.screen.lt.md"
    :titulo="q.screen.gt.sm ? 'Geral' : null"
    ><div style="height: 100vh" class="full-width">
      <q-toggle
        v-model="settings.darkMode"
        :color="storeConfig.getCorDestaque"
        label="Modo escuro"
        @update:model-value="
          () => {
            storeConfig.actSetConfig(settings);
          }
        "
      />
      <div class="q-my-xs">
        <p>Cor de Destaque</p>
        <div class="row q-gutter-xs">
          <div
            style="width: 50px; height: 50px"
            class="cursor-pointer rounded-borders"
            :class="`bg-${cor}${storeConfig.getConfig.darkMode ? '-4' : '-5'}`"
            v-for="cor in cores"
            :key="cor"
            @click="storeConfig.actSetConfig({ ...settings, corDestaque: cor })"
          />
        </div>
      </div>
    </div>
    <!-- <div -->
    <!--   class="row full-width justify-end q-py-xs q-px-md" -->
    <!--   style="position: fixed; bottom: 10px" -->
    <!-- > -->
    <!--   <q-btn label="Salvar" color="primary" no-caps unelevated /> -->
    <!-- </div> -->
  </pageComponent>
</template>
<script setup>
import { useQuasar } from "quasar";
import pageComponent from "src/components/pageComponent.vue";
import { useConfigStore } from "src/stores/stConfig/stConfig";
import { ref } from "vue";

const q = useQuasar();
const storeConfig = useConfigStore();

const settings = ref(storeConfig.getConfig);

const cores = [
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange",
  "brown",
  "grey",
  "blue-grey",
];
</script>
