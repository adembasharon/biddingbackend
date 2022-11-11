const router=require("express").Router();

  
  // Instantiate an Algolia client
const algoliasearch = require('algoliasearch');
const algoliaClient = algoliasearch('2H16J7JW3T', '663405f6df386091a9c13ddfae6c213e');

// Add the search endpoint
router.post('/search', async ({body}, res) => {
  const { requests } = body;
  const results = await algoliaClient.search(requests);
  res.status(200).send(results);
});

// search for facts and values
router.post('/sffv', async ({body}, res) => {
  const { requests } = body;
  const results = await algoliaClient.searchForFacetValues(requests);
  res.status(200).send(results);
});

module.exports=router;
































// const algoliasearch = require('algoliasearch')
// const client = algoliasearch('2H16J7JW3T', 'e29fec5ecc8b1323e4a1338d07a8c84c')
// const index = client.initIndex('dev_bid')
// const record = { objectID: 1, name: 'test_record' }
// index.saveObject(record).wait()
// index
//   .search('test_record')
//   .then(({ hits }) => console.log(hits[0]))
