const TABLE = 'Client';

module.exports = function (injectedStore) {
  let store = injectedStore;

  function list() {
    return store.getAll(TABLE);
  }

  async function save(body) {
    return await store.save(TABLE, body);
  }

  return {
    list,
    save,
  };
}
