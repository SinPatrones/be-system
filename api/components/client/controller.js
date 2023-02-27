const TABLE = 'Client';

module.exports = function (injectedStore) {
  let store = injectedStore;

  function list() {
    return store.getAll(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  async function save(body) {
    console.log('guardando clotnrolador de cliente', {TABLE, body});
    return await store.save(TABLE, body);
  }

  return {
    list,
    get,
    save,
  };
}
