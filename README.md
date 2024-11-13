# Pizza App
================


## Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Running the App](#running-the-app)
* [Seeding the Database](#seeding-the-database)
* [API Endpoints](#api-endpoints)


## Introduction
------------

This Pizza App is a simple Node.js and Express.js application developed for practicing and demonstrating the use of Prisma ORM tool. The goal of this project is to provide a hands-on experience with Prisma's features and functionality.


## Features
------------

* User authentication and authorization
* Pizza ordering and management
* API endpoints for CRUD operations
* Prisma ORM integration for database management


## Prerequisites
-------------

* Node.js (version 16 or higher)
* npm (version 8 or higher)
* Prisma (installed globally or locally)


## Installation
------------

1. Clone the repository: `git clone https://github.com/your-username/pizza-app.git`

2. Navigate to the project directory: `cd pizza-app`

3. Install dependencies: `npm install`

4. Install Prisma globally (if not already installed): `npm install -g prisma`


## Running the App
--------------

1. Start the app: `npm start`

2. The app will run on `http://localhost:3000` (or the port specified in your `.env` file)


## Seeding the Database
-------------------

1. Run the seed script: `npm run seed`

2. This will populate the database with sample data


## API Endpoints
-------------

### Authentication

* **POST /login** - Login with email and password
* **POST /register** - Register a new user

### Pizzas

* **GET /pizzas** - Get all pizzas
* **GET /pizzas/:id** - Get a pizza by ID
* **POST /pizzas** - Create a new pizza
* **PUT /pizzas/:id** - Update a pizza
* **DELETE /pizzas/:id** - Delete a pizza


## Learning Objectives
-------------------

This project aims to demonstrate the following Prisma concepts:

* Schema definition
* Model generation
* CRUD operations
* Relations and associations
* Database migrations


## Contributing
------------

Contributions are welcome! Please submit a pull request with your changes.


## License
-------

This project is licensed under the ISC License.


## Acknowledgments
------------

* [Prisma](https://www.prisma.io/)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/)
