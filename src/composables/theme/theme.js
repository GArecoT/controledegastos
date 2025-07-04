import { LocalStorage } from "quasar";

export function setTemaPadrao() {
  if (!LocalStorage.getItem("configuracoes")) {
    LocalStorage.setItem("configuracoes", {
      dark: true,
      corDestaque: "#1976d2",
      diaFechamento: "30",
    });
  }
}

export function setTema(dark, corDestaque) {
  console.log(dark, corDestaque);
  if (dark != undefined) {
    LocalStorage.setItem("configuracoes", {
      ...LocalStorage.getItem("configuracoes"),
      dark: dark,
    });
  }
  if (corDestaque) {
    LocalStorage.setItem("configuracoes", {
      ...LocalStorage.getItem("configuracoes"),
      corDestaque: corDestaque,
    });
  }
}

export function pegaTema() {
  const darkTheme = LocalStorage.hasItem("configuracoes") &&
    LocalStorage.getItem("configuracoes")?.dark
    ? true
    : false;
  const corDestaque = LocalStorage.hasItem("configuracoes") &&
    LocalStorage.getItem("configuracoes")?.corDestaque;
  return [darkTheme, corDestaque];
}

export function setTemaPadraoeRetorna() {
  setTemaPadrao();
  return pegaTema();
}
