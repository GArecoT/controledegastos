<template>
  <pageComponent
    :voltar="q.screen.lt.md"
    :titulo="q.screen.gt.sm ? 'Geral' : null"
    ><div style="height: 100vh" class="full-width">
      <q-toggle
        v-model="settings.tema"
        label="Modo escuro"
        @update:model-value="
          (val) => {
            setTema(val);
            router.go();
          }
        "
      /></div
  ></pageComponent>
</template>
<script setup>
import { useQuasar } from "quasar";
import pageComponent from "src/components/pageComponent.vue";
import { pegaTema, setTema } from "src/composables/theme/theme";
import { ref } from "vue";
import { useRouter } from "vue-router";

const q = useQuasar();
const router = useRouter();

const settings = ref({ tema: pegaTema()[0] });
</script>
