// Import required modules
import {MongoClient} from 'mongodb'
import dotenv from 'dotenv';

// Load environmental vairable from .env
dotenv.config();

// Getting the MongoDB username  and passowrd from environment variables
const user  = process.env.USER;
const password = process.env.PASSWORD;

// Setup connection string for MongoDB and connect
let uri = `mongodb+srv://${user}:${password}@cluster0.sjoml8m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);

let conn;

// Connect to the mongodb client and access the sba-19 database
try {

    conn = await client.connect();
    console.log('Connected to MongoDB')
}
catch (e) {

    console.error(e);
    
}

let db = conn.db("read-and-review")
console.log('db connection created')

export default db;