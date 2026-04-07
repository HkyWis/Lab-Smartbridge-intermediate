# Express CRUD Lab

## Description
This project is a simple REST API built using Express.js and MongoDB with Mongoose. It demonstrates CRUD (Create, Read, Update, Delete) operations for managing book data.

## Features
- Create a new book
- Get all books
- Get a book by ID
- Update a book
- Delete a book

## How to Run
1. Install dependencies:
   npm install

2. Start MongoDB (make sure it is running)

3. Run the server:
   node app.js

4. Test API using Postman or curl:
   http://localhost:3000/books

## Challenges
One challenge encountered was compatibility issues with newer versions of Mongoose, where deprecated connection options caused errors. This was resolved by removing unsupported options.

## Conclusion
This project demonstrates how Express, Mongoose, and MongoDB work together to handle CRUD operations and manage persistent data effectively.
