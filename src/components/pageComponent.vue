<template>
  <q-page class="flex justify-center q-pa-sm">
    <div class="full-width">
      <p
        v-if="props.titulo"
        class="q-pa-none q-ma-none text-weight-medium"
        style="font-size: 2rem"
      >
        {{ props.titulo }}
      </p>
    </div>
    <slot />
  </q-page>
</template>
<script setup>
const props = defineProps({
  titulo: {
    type: String,
  },
});
</script>
