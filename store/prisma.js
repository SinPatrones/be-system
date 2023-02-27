const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function save(tableName, data) {
  return await prisma[tableName].create({
    data
  });
}

async function getAll(tableName) {
  return await prisma[tableName].findMany();
}

async function get(tableName, query) {
  return await prisma[tableName].findMany({
    where: query
  });
}

async function update(tableName, id, data) {
  return await prisma[tableName].updateMany({
    where: id,
    data
  });
}

async function remove(tableName, recordIdentifier){
  return await prisma[tableName].delete({
    where: recordIdentifier
  })
}

module.exports = {
  save,
  getAll,
  get,
  update,
  remove
};
