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
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: 1960,
    averageRating: 4.8,
    imageUrl: "https://example.com/image1.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949,
    averageRating: 4.7,
    imageUrl: "https://example.com/image2.jpg"
  },
  // Add more books here...
  {
    _id: new ObjectId(),
    bookId: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
    averageRating: 4.6,
    imageUrl: "https://example.com/image3.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publishedYear: 1925,
    averageRating: 4.5,
    imageUrl: "https://example.com/image4.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publishedYear: 1851,
    averageRating: 4.1,
    imageUrl: "https://example.com/image5.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    publishedYear: 1869,
    averageRating: 4.3,
    imageUrl: "https://example.com/image6.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 7,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological Fiction",
    publishedYear: 1866,
    averageRating: 4.4,
    imageUrl: "https://example.com/image7.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publishedYear: 1951,
    averageRating: 4.2,
    imageUrl: "https://example.com/image8.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 9,
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic",
    publishedYear: -800,
    averageRating: 4.6,
    imageUrl: "https://example.com/image9.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 10,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Philosophical Fiction",
    publishedYear: 1880,
    averageRating: 4.5,
    imageUrl: "https://example.com/image10.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 11,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Romance",
    publishedYear: 1847,
    averageRating: 4.7,
    imageUrl: "https://example.com/image11.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 12,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    genre: "Gothic Fiction",
    publishedYear: 1847,
    averageRating: 4.6,
    imageUrl: "https://example.com/image12.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 13,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Epic Poetry",
    publishedYear: 1320,
    averageRating: 4.4,
    imageUrl: "https://example.com/image13.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 14,
    title: "The Iliad",
    author: "Homer",
    genre: "Epic",
    publishedYear: -750,
    averageRating: 4.5,
    imageUrl: "https://example.com/image14.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 15,
    title: "Les Misérables",
    author: "Victor Hugo",
    genre: "Historical Fiction",
    publishedYear: 1862,
    averageRating: 4.7,
    imageUrl: "https://example.com/image15.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 16,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    publishedYear: 1932,
    averageRating: 4.6,
    imageUrl: "https://example.com/image16.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 17,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1937,
    averageRating: 4.8,
    imageUrl: "https://example.com/image17.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 18,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    publishedYear: 1953,
    averageRating: 4.5,
    imageUrl: "https://example.com/image18.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 19,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    genre: "Adventure",
    publishedYear: 1605,
    averageRating: 4.4,
    imageUrl: "https://example.com/image19.jpg"
  },
  {
    _id: new ObjectId(),
    bookId: 20,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1954,
    averageRating: 4.9,
    imageUrl: "https://example.com/image20.jpg"
  }
];

const sampleUsers = [
  {
    email: "user1@example.com",
    password: bcrypt.hashSync("password123", 10),
    reviews: [
      {
        bookId: 1,
        review: "A masterpiece.",
        rating: 5,
        date: new Date("2023-01-01T00:00:00Z").toISOString()
      },
      {
        bookId: 2,
        review: "Thought-provoking.",
        rating: 4,
        date: new Date("2023-02-01T00:00:00Z").toISOString()
      }
    ]
  },
  {
    email: "user2@example.com",
    password: bcrypt.hashSync("password456", 10),
    reviews: [
      {
        bookId: 3,
        review: "A timeless romance.",
        rating: 5,
        date: new Date("2023-03-01T00:00:00Z").toISOString()
      }
    ]
  },
  {
    email: "user3@example.com",
    password: bcrypt.hashSync("password789", 10),
    reviews: [
      {
        bookId: 4,
        review: "A classic.",
        rating: 4,
        date: new Date("2023-04-01T00:00:00Z").toISOString()
      },
      {
        bookId: 5,
        review: "A bit long but worth it.",
        rating: 3,
        date: new Date("2023-05-01T00:00:00Z").toISOString()
      }
    ]
  },
  {
    email: "user4@example.com",
    password: bcrypt.hashSync("password012", 10),
    reviews: [
      {
        bookId: 6,
        review: "Epic storytelling.",
        rating: 5,
        date: new Date("2023-06-01T00:00:00Z").toISOString()
      },
      {
        bookId: 7,
        review: "Deep and thoughtful.",
        rating: 4,
        date: new Date("2023-07-01T00:00:00Z").toISOString()
      }
    ]
  },
  {
    email: "user5@example.com",
    password: bcrypt.hashSync("password345", 10),
    reviews: [
      {
        bookId: 8,
        review: "Engaging and relatable.",
        rating: 4,
        date: new Date("2023-08-01T00:00:00Z").toISOString()
      }
    ]
  },
  {
    email: "user6@example.com",
    password: bcrypt.hashSync("password678", 10),
    reviews: [
      {
        bookId: 9,
        review: "An epic journey.",
        rating: 5,
        date: new Date("2023-09-01T00:00:00Z").toISOString()
      },
      {
        bookId: 10,
        review: "Philosophical and profound.",
        rating: 5,
        date: new Date("2023-10-01T00:00:00Z").toISOString()
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
    averageRating: { type: 'number', minimum: 0, maximum: 5 },
    imageUrl: { type: 'string' }
  },
  required: ['title', 'author', 'genre', 'publishedYear', 'averageRating', 'imageUrl']
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
