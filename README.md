# Comic Book Store API

This is a RESTful API for managing a comic book inventory for an e-commerce store. The API allows the store manager to perform CRUD (Create, Read, Update, Delete) operations on comic books, including adding new books, retrieving book lists, updating book details, and deleting books from the inventory.

## Features

- **Create Comic Book**: Add a new comic book to the inventory.
- **Read Comic Book(s)**: Retrieve details of a single comic book or a list of all comic books.
- **Update Comic Book**: Modify any field (price, condition, etc.) of an existing comic book.
- **Delete Comic Book**: Remove a comic book from the inventory.
- **Filter, Pagination, and Sorting**: Retrieve comic books with filters, pagination, and sorting options.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Postman (for API testing)**

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- MongoDB installed and running locally, or access to a MongoDB cloud database
- Postman for testing API endpoints (optional, but recommended)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/comic-book-store-api.git
   cd comic-book-store-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables. Create a `.env` file in the root directory and add the following:

   ```bash
   MONGO_URI=mongodb://localhost:27017/comicbookstore
   PORT=5000
   ```

   Replace the `MONGO_URI` value with your own MongoDB connection string if using a cloud-based MongoDB.

4. Start the server:

   ```bash
   npm start
   ```

   The API will now be running on `http://localhost:5000`.

## API Endpoints

### Comic Book Management

1. **Create Comic Book**
   - **POST** `/api/comics`
   - Request Body (JSON):
     ```json
     {
       "name": "Batman",
       "author": "Bob Kane",
       "year": 1939,
       "price": 15.99,
       "discount": 10,
       "pages": 100,
       "condition": "new",
       "description": "First edition comic book"
     }
     ```
   - Response:
     ```json
     {
       "message": "Comic book created successfully."
     }
     ```

2. **Get All Comic Books**
   - **GET** `/api/comics`
   - Query Parameters (Optional):
     - `author`: Filter by author (e.g., `?author=Bob Kane`)
     - `page`: Pagination (e.g., `?page=1`)
     - `limit`: Limit the number of comic books per page (e.g., `?limit=10`)
     - `sort`: Sort results (e.g., `?sort=price`)
   - Response:
     ```json
     [
       {
         "_id": "615f36e0b1949c27c8cf1ef3",
          "name": "Batman",
          "author": "Bob Kane",
          "year": 1939,
          "price": 15.99,
          "discount": 10,
          "pages": 100,
          "condition": "new"
       },
       {
         "_id": "615f36e0b1949c27c8cf1ef4",
         "name": "Superman",
         "author": "Bob Kane",
         "year": 1949,
         "price": 17.99,
         "discount": 20,
         "pages": 104,
         "condition": "new",
         "description": "First edition comic book"
       }
     ]
     ```

3. **Get Comic Book by ID**
   - **GET** `/api/comics/:id`
   - Response:
     ```json
     {
       "_id": "615f36e0b1949c27c8cf1ef3",
       "name": "Batman",
       "author": "Bob Kane",
       "year": 1939,
      "price": 15.99,
      "discount": 10,
      "pages": 100,
      "condition": "new"
     }
     ```

4. **Update Comic Book**
   - **PUT** `/api/comics/:id`
   - Request Body (JSON):
     ```json
     {
       "price": 20.99,
       "discount": 15
     }
     ```
   - Response:
     ```json
     {
       "message": "Comic book updated."
     }
     ```.

5. **Delete Comic Book**
   - **DELETE** `/api/comics/:id`
   - Response:
     ```json
     {
       "message": "Comic book deleted."
     }
     ```

## Running Tests

### Postman Collection

A Postman collection is included in the repository for testing the API endpoints. You can import the collection into Postman and execute the following tests:

- **Create Comic Book**
- **Get All Comic Books**
- **Get Comic Book by ID**
- **Update Comic Book**
- **Delete Comic Book**

To use the Postman collection:

1. Download and install Postman.
2. Import the provided `Comic Book Store API.postman_collection.json` file into Postman.
3. Execute the requests in the collection.

## Folder Structure

```
comic-book-store-api/
├── controllers/
│   └── comicController.js  # Comic Book CRUD operations
├── models/
│   └── comicModel.js       # Comic Book Mongoose model
├── routes/
│   └── comicRoutes.js      # API routes
├── .env                    # Environment variables
├── app.js                  # Express application setup
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Error Handling

- **400 Bad Request**: Returned when invalid data is provided in the request body.
- **404 Not Found**: Returned when the requested comic book is not found.
- **500 Internal Server Error**: Returned for any server-side issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
