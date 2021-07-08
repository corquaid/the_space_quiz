import { MongoClient } from 'mongodb'


const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  async function connectToDatabase() {
    if (!client.isConnected()) await client.connect();
    const db = client.db("spacequizdata");
    return { db, client };
  }
  
  export { connectToDatabase };