# Bike Library API

A simple REST API built using **Nest.js** to manage a bike library. It supports basic CRUD operations (Create, Read, Update, Delete) and uses **SQLite** for persistence. The API is also documented using **Swagger**.

## Features

- **GET /bikes**: Fetch a list of all bikes in the library.
- **POST /bikes**: Add a new bike to the library.
- **PUT /bikes/{id}**: Update the details of an existing bike.
- **DELETE /bikes/{id}**: Delete a bike from the library.

## Requirements

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://npmjs.com/)
- [SQLite](https://www.sqlite.org/)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/bike-library-api.git
cd bike-library-api
```

### 2. Install Dependencies

Install the required dependencies by running:

```bash
npm install
```

### 3. Run the Application

To run the application in development mode, execute the following command:

```bash
npm run start
```

This will start the server on `http://localhost:3000`.

### 4. Access the API

You can access the following routes:

- **GET /bikes**: Returns a list of all bikes.
- **POST /bikes**: Adds a new bike (requires a JSON body).
- **PUT /bikes/{id}**: Updates an existing bike (requires a JSON body with bike details).
- **DELETE /bikes/{id}**: Deletes a bike by its ID.

### 5. Swagger Documentation

Once the application is running, you can access the Swagger UI for API documentation at:

```
http://localhost:3000/api
```

The Swagger UI provides an interactive interface to view and test the API endpoints.

## API Data Model

### Bike Model:

- **id** (UUID or auto-generated)
- **make** (string, e.g., "Royal Enfield")
- **model** (string, e.g., "Classic 350")
- **year** (number, e.g., 2021)
- **type** (string, e.g., "Cruiser", "Sport", etc.)

### Example Payloads

**Create Bike:**

```json
{
  "make": "Royal Enfield",
  "model": "Classic 350",
  "year": 2021,
  "type": "Cruiser"
}
```

**Update Bike:**

```json
{
  "make": "Honda",
  "model": "CBR 600",
  "year": 2022,
  "type": "Sport"
}
```

## Project Structure

Here’s a brief overview of the project structure:

```
src/
├── bikes/
│   ├── dto/
│   │   ├── create-bike.dto.ts
│   │   ├── update-bike.dto.ts
│   ├── entities/
│   │   └── bike.entity.ts
│   ├── bikes.controller.ts
│   ├── bikes.service.ts
│   └── bikes.module.ts
├── app.module.ts
├── main.ts
```

- **bikes.dto.ts**: Data Transfer Objects for validating bike data.
- **bikes.entity.ts**: The Bike data model using TypeORM.
- **bikes.controller.ts**: Handles incoming requests and routes them to the appropriate service methods.
- **bikes.service.ts**: Contains the business logic for handling bikes.
- **bikes.module.ts**: The module that imports the necessary TypeORM configuration and exposes the service and controller.
- **app.module.ts**: Main application module that includes the `BikesModule`.

## Troubleshooting

- **SQLite Database**: If you encounter issues related to the SQLite database, make sure it’s installed and accessible on your system.
- **Missing Dependencies**: Ensure that all dependencies are installed by running `npm install`.

## Screenshots

- **GET Request**:
![Screenshot 2024-10-08 210627](https://github.com/user-attachments/assets/137e27cc-61f0-48ac-a5dd-c695a22f6403)

- **POST Request**: 
![Screenshot 2024-10-08 210753](https://github.com/user-attachments/assets/7b202d7b-564d-4511-a52e-c9523e984e3e)

- **PUT Request**:
![Screenshot 2024-10-08 210821](https://github.com/user-attachments/assets/79a3725a-98fb-4c56-8ec4-33d241bcb76d)

- **DELETE Request**-
![Screenshot 2024-10-08 210916](https://github.com/user-attachments/assets/fb6c8539-f9ec-4a80-a8a9-c67888e6b079)
