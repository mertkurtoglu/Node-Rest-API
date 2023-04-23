Getting Started
Follow the steps below to get started with the project:

Clone the repository.

- Install Node.js and npm on your system.
- Install project dependencies by running the following command in the terminal:

  - npm install

Create a .env file in the root directory of the project, and add the following environment variables:

- PORT = 3000
- MONGODB_URI = "mongodb+srv://mertkurtoglu35:mert123@cluster0.hnql2o2.mongodb.net/test"
- JWT_KEY = "secret-key"

Running the Application

- To start the application, run the following command in the terminal:

  - npm start

The application will start on http://localhost:3000.

Project Structure

- The project structure is as follows:

api/
├── controllers/
│ └── ...
├── models/
│ └── ...
├── routes/
│ └── ...
├── .env
├── app.js
├── package.json
├── README.md
└── server.js

controllers: contains the application logic.
models: contains database models.
routes: contains route handlers for the application.
views: contains views for the application.
.env: contains environment variables for the project.
app.js: the main application file.
package.json: contains project dependencies and metadata.
README.md: this file.

Dependencies

- The following dependencies are used in the project:

  - bcrypt
  - body-parser
  - dotenv
  - express
  - jsonwebtoken
  - mongoose
  - morgan
  - multer

Test on Postman

- User Signup => POST - http://localhost:3000/user/signup
    name, surname, email, password
- User Login  => POST - http://localhost:3000/user/login
    email, password

- Get All Products       => GET - http://localhost:3000/products
- Get A Specific Product => GET - http://localhost:3000/products/:productId
- Create A Product       => POST - http://localhost:3000/products
    form-data => name, description, price, productImage

- Get All Orders       => GET - http://localhost:3000/orders
- Get A Specific Order => GET - http://localhost:3000/orders/:orderId
- Create An Order      => POST - http://localhost:3000/orders
    quantity, productId
