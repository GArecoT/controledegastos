<template>
  <pageComponent
    :voltar="q.screen.lt.md"
    :titulo="q.screen.gt.sm ? 'Geral' : null"
    ><div style="height: 100vh" class="full-width">
      <q-toggle
        v-model="settings.modoServidor"
        :color="storeConfig.getCorDestaque"
        label="Modo Servidor"
        @update:model-value="
          (val) => {
            storeConfig.actSetConfig(settings);
            if (!val) settings.salvarDiretoServidor = false;
          }
        "
      />
      <q-toggle
        v-model="settings.salvarDiretoServidor"
        :color="storeConfig.getCorDestaque"
        label="Salvar Diretamente no Servidor"
        :disable="!settings.modoServidor"
        @update:model-value="
          () => {
            storeConfig.actSetConfig(settings);
          }
        "
      />
      <div style="max-width: 1000px" class="q-mt-md">
        <q-input
          :disable="!settings.modoServidor"
          label="Endereço do Servidor"
          :color="storeConfig.getCorDestaque"
          :dark="storeConfig.getConfig.darkMode"
          outlined
          v-model="settings.enderecoServidor"
        />
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
</script>
