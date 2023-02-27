const bcrypt = require('bcrypt');
const auth = require('../../../auth');
const TABLE = 'User';

module.exports = function (injectedStore) {
  let store = injectedStore;

  async function login(email, password) {
    const [data] = await store.get(TABLE, {email});
    if (!data){
      throw new Error('No existe usuario');
    }

    return bcrypt.compare(password, data.password)
      .then(result => {
        if (result === true) {
          return auth.sign(data);
        } else {
          throw new Error('Información invalida');
        }
      });
  }

  async function signup(data) {
    const newUser = {
      ...data,
      password: await bcrypt.hashSync(data.password, 7),
    }
    return await store.save(TABLE, newUser);
  }

  return {
    signup,
    login,
  };
};
