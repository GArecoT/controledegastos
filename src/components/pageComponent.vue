<template>
  <q-page class="flex justify-center q-pa-sm">
    <div class="full-width" v-if="props.voltar">
      <div class="row items-center content-center">
        <q-btn
          icon="sym_o_arrow_back"
          flat
          @click="router.go(-1)"
          v-close-popup
        />
        <p
          v-if="props.titulo"
          class="q-pa-none q-ma-none text-weight-medium"
          style="font-size: 2rem"
        >
          {{ props.titulo }}
        </p>
      </div>
    </div>
    <slot />
  </q-page>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  titulo: {
    type: String,
  },
  voltar: {
    type: Boolean,
    default: false,
  },
});
</script>
