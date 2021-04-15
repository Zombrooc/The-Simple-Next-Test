import { MongoClient } from 'mongodb'
import url from 'url';

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(process.env.MONGO_URL).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}