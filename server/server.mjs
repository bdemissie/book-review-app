// server/server.js
// Import required modules

import express from "express"
import dotenv from "dotenv"
import db from "./db/conn.mjs";
import methodOverride from "method-override"


// Create an express application instance
const app = express();

const cors = require('cors');

// Create an express router
const router = express.Router();

// Read the port number from the .env
dotenv.config();
const PORT = process.env.PORT || 3000;
console.log(PORT)

// Setup the Midleware to parse json bodies
app.use(cors());
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Create a collection with Schema Validation

// Create Users Collection with Schema Validation

await db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['email', 'password', 'reviews'],
      properties: {
        email: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        password: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        reviews: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: ['bookId', 'review', 'rating', 'date'],
            properties: {
              bookId: {
                bsonType: 'objectId',
                description: 'must be an ObjectId and is required'
              },
              review: {
                bsonType: 'string',
                description: 'must be a string and is required'
              },
              rating: {
                bsonType: 'int',
                minimum: 0,
                maximum: 5,
                description: 'must be an integer between 0 and 5 and is required'
              },
              date: {
                bsonType: 'date',
                description: 'must be a date and is required'
              }
            }
          }
        }
      }
    }
  }
});

console.log('Users collection created with schema validation.');

// Create Books Collection with Schema Validation
await db.createCollection('books', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['title', 'author', 'genre', 'publishedYear', 'averageRating'],
      properties: {
        title: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        author: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        genre: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        publishedYear: {
          bsonType: 'int',
          description: 'must be an integer and is required'
        },
        averageRating: {
          bsonType: 'double',
          minimum: 0,
          maximum: 5,
          description: 'must be a double between 0 and 5 and is required'
        }
      }
    }
  }
});

console.log('Books collection created with schema validation.');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
