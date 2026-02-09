import gerarUUID from "./uuid";
import verificaObjeto from "./verificaObjeto";

export async function existeDB(dbName) {
  const isExisting = (await globalThis.indexedDB.databases()).map((db) =>
    db.name
  )
    .includes(dbName);

  return isExisting;
}
export function criarDB() {
  const request = indexedDB.open("BD", 1);

  request.onupgradeneeded = function (event) {
    console.log('xerequinha do caralhgo')
    const db = event.target.result;
    db.createObjectStore("Despesas", { keyPath: "id" });
    db.createObjectStore("Categorias", {
      keyPath: "id",
    });
    db.createObjectStore("FormasPagamento", {
      keyPath: "id",
    });
  };

  request.onerror = function (event) {
    console.log("fudeu", event)
  }
}

export function adicionaBD(tabela, payload) {
  let retorno = {}
  if (!existeDB)
    criarDB()
  if (verificaObjeto(tabela, payload)) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("BD", 1);
      request.onsuccess = function (event) {
        const db = event.target.result
        const transaction = db.transaction([tabela], "readwrite");
        const objectStore = transaction.objectStore(tabela);
        const request = objectStore.add({ id: gerarUUID(), ...payload });
        request.onsuccess = function () {
          retorno = { "cdg_erro": 0, "msg": "Salvo com sucesso!" }
        }
        request.onerror = (event) => {
          retorno = { "cdg_erro": 1, "msg": "Erro ao salvar", detalhe_erro: event }
        }
        transaction.oncomplete = () => {
          retorno = { "cdg_erro": 0, "msg": "Salvo com sucesso!" }
        };
        transaction.onerror = (event) => {
          retorno = { "cdg_erro": 1, "msg": "Erro ao salvar", detalhe_erro: event }
        };
      };
      request.onerror = (event) => {
        retorno = { "cdg_erro": 1, "msg": "Erro ao salvar", detalhe_erro: event }
      }

    }
  return retorno
  })
}
