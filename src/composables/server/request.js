import { LocalStorage } from "quasar"

export default async function request(payload){
  const url = LocalStorage.getItem('config').enderecoServidor
// const ret = await
  // TODO: CHAMAR SERVIDOR
  console.log(url, payload)
}
