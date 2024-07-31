// Import required modules

import express from "express"
import dotenv from "dotenv"
import db from "./db/conn.mjs";
import cors from "cors";

// Create an express application instance
const app = express();


// Create an express router
const router = express.Router();

// Read the port number from the .env
dotenv.config();
const PORT = process.env.PORT || 5050;
console.log(PORT)

// Setup the Midleware to parse json bodies
app.use(cors());
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Function to get the first 3 books
const getFirstThreeBooks = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('read-and-review');
    const booksCollection = db.collection('books');
    const books = await booksCollection.find().limit(3).toArray();
    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  } finally {
    await client.close();
  }
};

// Route to get the first 3 books
app.get('/api/books', async (req, res) => {
  try {
    const books = await getFirstThreeBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});


console.log(PORT)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
