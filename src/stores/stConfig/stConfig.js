import { defineStore } from "pinia";
import { LocalStorage } from "quasar";

const configPadrao = {
  darkMode: false,
  corDestaque: 'indigo'
}

function pegaConfig() {
  if (LocalStorage.hasItem('config')) return LocalStorage.getItem('config'); else return configPadrao
}

export const useConfigStore = defineStore("contexto", {
  state: () => ({
    config: { ...pegaConfig() }
  }),

  getters: {
    getConfig: (state) => state.config,
    getCorDestaque: (state) => {
      if (state.config.darkMode) {
        return `${state.config.corDestaque}-4`
      } else {
        return `${state.config.corDestaque}-5`
      }
    }
  },
  actions: {
    actSetConfig(payload) {
      this.config = payload;
      LocalStorage.setItem('config', payload)
    },
    actResetConfig() {
      LocalStorage.removeItem('config')
      this.actSetConfig({ ...configPadrao })
    },
  },
});
