const algoliasearch = require('algoliasearch')
const client = algoliasearch('2H16J7JW3T', 'e29fec5ecc8b1323e4a1338d07a8c84c')
const index = client.initIndex('dev_bid')
const record = { objectID: 1, name: 'test_record' }
index.saveObject(record).wait()
index
  .search('test_record')
  .then(({ hits }) => console.log(hits[0]))
