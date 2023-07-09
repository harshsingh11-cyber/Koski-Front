# CRM Application

This is a CRM (Customer Relationship Management) application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application helps businesses manage their customer interactions, track leads, and improve customer service.

## hosted Link

## Requirements

To run this application locally, you need to set up the MERN development environment by installing the required software and dependencies. Make sure you have the following installed on your machine:

- Node.js
- MongoDB 
- NPM (Node Package Manager)

## Installation

1. Clone the repository: `git clone https://github.com/your/repo.git`
2. Navigate to the project directory: `cd crm-application`
3. Install backend dependencies: `npm install`
4. Navigate to the client directory: `cd client`
5. Install frontend dependencies: `npm install`
6. Go back to the project directory: `cd ..`

## Configuration

1. Create a `.env` file in the project directory.
2. Add the following environment variables to the `.env` file:


- `PORT` is the port number on which the server will run (default: 3000).
- `MONGODB_URI` is the connection URL for your MongoDB database.
- `JWT_SECRET` is the secret key used for JSON Web Token authentication.

## Database Setup

1. Make sure MongoDB is running on your local machine.
2. Create a new database in MongoDB called `crm_database`.

## Running the Application

1. In the project directory, start the server: `npm run server`
2. In a new terminal, navigate to the client directory: `cd client`
3. Start the client: `npm start`
4. The CRM application should open in your default web browser at `http://localhost:3000`.

## Features

- Display a list of all customers with their basic information.
- Add a form to create a new customer.
- View detailed information about a specific customer.
- Edit and update customer details.
- Delete a customer from the CRM.
- User authentication and authorization using JSON Web Tokens.
- Proper validation and error handling.
- Search functionality to search for customers based on their name, email, or phone number.
- Pagination to improve performance with a large number of customers.
- Sorting functionality to sort the list of customers based on different criteria.
- Deployment to a cloud platform like Heroku or AWS.

## Folder Structure

- `client` - Contains the React.js frontend code.
- `server` - Contains the Node.js backend code.
-


## Contributing

Please feel free to contribute to this project by submitting bug reports, feature requests, or pull requests. Your feedback is highly appreciated.

## Screnshot


