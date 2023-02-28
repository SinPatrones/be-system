const TABLE = 'Product';

module.exports = function (injectedStore) {
  let store = injectedStore;

  function list() {
    return store.getAll(TABLE);
  }

  async function save(body) {
    return await store.save(TABLE, body);
  }

  async function update(body){
    const identifier = { productId: body.productId};
    delete body.productId;
    return await store.update(TABLE, identifier, body);
  }

  async function remove(id){
    const identifier = { productId: parseInt(id)};
    return store.remove(TABLE, identifier);
  }

  return {
    list,
    save,
    update,
    remove
  };
}
