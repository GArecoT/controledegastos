<template>
  <q-tabs
    v-model="lclTab"
    :vertical="props.vertical"
    class="items-center content-center"
    :class="props.dark ? 'bg-dark-gray' : 'bg-light-gray'"
    :style="`color: ${props.corDestaque}; ${
      props.vertical ? 'height: calc(100vh - 50px)' : ''
    }`"
    :indicator-color="props.dark ? 'dark' : 'light'"
  >
    <q-tab
      :name="tab.name"
      v-for="tab in tabs"
      :key="tab"
        @click="router.push({ name: tab.name })"
      no-caps
      ><q-icon
        :name="tab.icon"
        size="xs"
        :class="
          props.dark
            ? lclTab == tab.name
              ? 'selected-icon-dark'
              : 'unselected-icon'
            : lclTab == tab.name
              ? 'selected-icon-light'
              : 'unselected-icon'
        "
      />
      <p class="q-pa-none q-ma-none text-weight-medium">{{ tab.label }}</p>
    </q-tab>
  </q-tabs>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  corDestaque: {
    type: String,
    default: "#1976d2",
  },
  tabs: {
    type: Array,
    required: true,
  },
  tab: {
    type: String,
    required: true,
  },
});

const lclTab = ref(props.tab);

watch(
  () => props.tab,
  () => {
    lclTab.value = props.tab;
  },
);
</script>
<style lang="scss">
.unselected-icon {
  font-size: 24px;
  background: rgba(0, 0, 0, 0);
  padding: 5px 20px;
  border-radius: 50px;
}
.selected-icon-dark {
  font-size: 24px;
  background: rgba(255, 255, 255, 0.1);
  padding: 5px 20px;
  border-radius: 50px;
}
.selected-icon-light {
  font-size: 24px;
  background: rgba(0, 0, 0, 0.1);
  padding: 5px 20px;
  border-radius: 50px;
}
</style>
