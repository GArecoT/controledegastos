<template>
  <q-tabs
    v-model="lclTab"
    :vertical="props.vertical"
    class="items-center content-center"
    :class="`${storeConfig.getConfig.darkMode ? 'bg-dark-gray' : 'bg-light-gray'} text-${storeConfig.getCorDestaque}`"
    :style="`${
      props.vertical
        ? 'height: calc(100vh - 50px); border-radius: 0px 5px 5px 0px'
        : ' border-radius: 5px 0px 0px 5px'
    }`"
    :indicator-color="storeConfig.getConfig.darkMode ? 'dark' : 'light'"
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
          storeConfig.getConfig.darkMode
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
import { useConfigStore } from "src/stores/stConfig/stConfig";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const storeConfig = useConfigStore();

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false,
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
