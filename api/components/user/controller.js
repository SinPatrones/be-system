const auth = require('../auth');

const TABLE = 'User';

module.exports = function (injectedStore) {
  let store = injectedStore;

  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  async function save(body) {
    return await auth.signup(body);
  }

  return {
    list,
    get,
    save,
  };
}
