import tipos_database from "./constantes/tipos_database";

export default function verificaObjeto(tabela, payload) {
  if (!tipos_database[tabela]) {
    console.log('não existe tabela com esse nome')
    return false
  }
  try {
    const chaves_payload = Object.keys(payload)
    const passou = chaves_payload.every((chave) => {
      if (!tipos_database[tabela][chave]) {

        return true
      } else {
        if (typeof payload[chave] == tipos_database[tabela][chave].type) {
          console.log('aa')
          if (tipos_database[tabela][chave].maxLength) {
            if (payload[chave].length <= tipos_database[tabela][chave].maxLength)
              return true
            else { console.log(chave, "maior que o esperado"); return false }
          } else return true
        } else {
          console.log(chave, "tipo de variável diferente"); return false
        }
      }
    })
    return passou
  } catch (e) {

    console.log("erro ao adicionar tabela", e)
    return false
  }

}
