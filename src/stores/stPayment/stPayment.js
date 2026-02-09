import { defineStore } from "pinia";
import { LocalStorage } from "quasar";
import request from "src/composables/server/request";

const storeConfig = useConfigStore()

const configPadrao = {
}

async function handleRequest(servico, payload) {
  let ret = {}
  if (storeConfig.getConfig.salvarDiretoServidor && storeConfig.getConfig.modoServidor) {
    ret = await request(servico, payload)
  } else {

  }

  return ret
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
