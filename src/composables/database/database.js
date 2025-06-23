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
    const db = event.target.result;
    db.createObjectStore("Despesas", { keyPath: "id", autoIncrement: true });
    db.createObjectStore("Categorias", {
      keyPath: "id",
      autoIncrement: true,
    });
    db.createObjectStore("FormasPagamento", {
      keyPath: "id",
      autoIncrement: true,
    });
  };
}
