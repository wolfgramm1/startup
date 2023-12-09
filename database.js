const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const reviewCollection = db.collection('review');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addScore(review) {
  const result = await reviewCollection.insertOne(review);
  return result;
}
function getBarbie() {
    const query = { movie:'barbie'};
    const cursor = reviewCollection.find(query);
    return cursor.toArray();
  }
function getBatman() {
const query = { movie:'batman'};
const cursor = reviewCollection.find(query);
return cursor.toArray();
}

function getHoly() {
  const query = { movie:'holy'};
  const cursor = reviewCollection.find(query);
  return cursor.toArray();
}

module.exports = { addScore, getBarbie, getBatman, getHoly };
