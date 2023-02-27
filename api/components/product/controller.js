const auth = require('../auth');

const TABLA = 'User';

module.exports = function (injectedStore) {
  let store = injectedStore;

  function list() {
    return store.list(TABLA);
  }

  function get(id) {
    return store.get(TABLA, id);
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
