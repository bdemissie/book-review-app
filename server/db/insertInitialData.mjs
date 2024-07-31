import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { validate } from 'jsonschema';

dotenv.config();

const user = process.env.USER;
const password = process.env.PASSWORD;

if (!user || !password) {
  console.error('Missing MongoDB credentials. Please set USER and PASSWORD in your .env file.');
  process.exit(1);
}

const uri = `mongodb+srv://${user}:${password}@cluster0.sjoml8m.mongodb.net/read-and-review?retryWrites=true&w=majority&appName=Cluster0`;

const sampleBooks = [
  {
    _id: new ObjectId(),
    bookId: 1,
    title: "Book One",
    author: "Author One",
    genre: "Fiction",
    publishedYear: 2021,
    averageRating: 4.5
  },
  {
    _id: new ObjectId(),
    bookId: 2,
    title: "Book Two",
    author: "Author Two",
    genre: "Non-Fiction",
    publishedYear: 2020,
    averageRating: 4.0
  }
];

const sampleUsers = [
  {
    email: "user1@example.com",
    password: bcrypt.hashSync("password123", 10), // Adjust salt rounds as needed
    reviews: [
      {
        bookId: sampleBooks[0].bookId, // Placeholder for later update
        review: "Great book!",
        rating: 5,
        date: new Date("2023-12-31T00:00:00Z").toISOString()
      },
      {
        bookId: sampleBooks[1].bookId, // Placeholder for later update
        review: "Enjoyed it a lot!",
        rating: 4,
        date: new Date("2023-12-31T00:00:00Z").toISOString()
      }
    ]
  },
  {
    email: "user2@example.com",
    password: bcrypt.hashSync("password456", 10), // Adjust salt rounds as needed
    reviews: [
      {
        bookId: sampleBooks[0].bookId, // Placeholder for later update
        review: "Informative and well-written.",
        rating: 4,
        date: new Date("2023-12-31T00:00:00Z").toISOString()
      }
    ]
  }
];

const bookSchema = {
  type: 'object',
  properties: {
    bookId: { type: 'integer' },
    title: { type: 'string' },
    author: { type: 'string' },
    genre: { type: 'string' },
    publishedYear: { type: 'integer' },
    averageRating: { type: 'number', minimum: 0, maximum: 5 }
  },
  required: ['title', 'author', 'genre', 'publishedYear', 'averageRating']
};

const userSchema = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string' },
    reviews: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          bookId: { type: 'integer' },
          review: { type: 'string' },
          rating: { type: 'number', minimum: 0, maximum: 5 },
          date: { type: 'string', format: 'date-time' }
        },
        required: ['bookId', 'review', 'rating', 'date']
      }
    }
  },
  required: ['email', 'password', 'reviews']
};

const insertInitialData = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('read-and-review');

    const booksCollection = db.collection('books');
    const usersCollection = db.collection('users');

    // Data validation for books
    for (const book of sampleBooks) {
      const validationResult = validate(book, bookSchema);
      if (!validationResult.valid) {
        console.error('Invalid book data:', validationResult.errors);
        return;
      }
    }

    // Data validation for users
    for (const user of sampleUsers) {
      const validationResult = validate(user, userSchema);
      if (!validationResult.valid) {
        console.error('Invalid user data:', validationResult.errors);
        return;
      }
    }

    // Insert sample books
    await booksCollection.insertMany(sampleBooks);
    console.log('Sample books inserted.');

    // Insert sample users
    await usersCollection.insertMany(sampleUsers);
    console.log('Sample users inserted.');
  } catch (error) {
    console.error('Error inserting initial data:', error.message);
    console.error('Error details:', error);
  } finally {
    await client.close();
  }
};

insertInitialData();
