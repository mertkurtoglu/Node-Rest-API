Getting Started
Follow the steps below to get started with the project:

Clone the repository.

- Install Node.js and npm on your system.
- Install project dependencies by running the following command in the terminal:

  - npm install

Create a .env file in the root directory of the project, and add the following environment variables:

- PORT = 3000

Running the Application

- To start the application, run the following command in the terminal:

  - npm start

The application will start on http://localhost:3000.

Project Structure

- The project structure is as follows:

  ├── controllers/
  │ └── ...
  ├── models/
  │ └── ...
  ├── routes/
  │ └── ...
  ├── views/
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
