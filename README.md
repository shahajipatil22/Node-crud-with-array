# Node-crud-with-array
## Project Structure
```
    ├── README.md
    ├── app.js
    ├── controllers
    │   └── todoController.js
    ├── models
    │   └── todoModel.js
    ├── routes
    │   └── todoRoutes.js
    └── views
        ├── index.ejs
        └── error.ejs
```    

## Installation
1. Clone the repository or download the source code:
- https://github.com/shahajipatil22/Node-crud-with-array.git

2. Navigate into the project directory:
- cd Node-crud-with-array

3. Install the dependencies:
- npm install

4. Start the server:
- node app.js

## Usage
- Access the application in your browser:
Open a web browser and visit http://localhost:3007. Replace 3007 with the desired port if you modified it in the app.js file.

- The application will display a list of todos, where you can perform CRUD operations.

## Features
- Create, Read, Update, and Delete todos
- Store todos in a local array (non-persistent)
- Basic error handling and view templates

## API Endpoints
- GET /todos: Retrieve all todos
- POST /todos: Create a new todo
- GET /todos/:id: Retrieve a todo by ID
- PUT /todos/:id: Update a todo by ID
- DELETE /todos/:id: Delete a todo by ID

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript) for templating