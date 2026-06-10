# iNotebook 📓

iNotebook is a secure, full-stack web application designed for managing personal notes. Built with the MERN stack, it provides a seamless and efficient way to organize your daily thoughts, ensuring your data is safely stored and accessible from anywhere.

## 🚀 Features

* **Full CRUD Functionality**: Easily create new notes, read existing ones, update content on the fly, and delete notes you no longer need.
* **Secure Authentication**: Implements robust JWT-based (JSON Web Token) authentication to protect user routes and ensure privacy.
* **High Performance**: Utilizes MongoDB indexing to ensure fast and efficient data querying, even as the database scales.
* **Clean Architecture**: Strictly separates the client and server logic into dedicated `frontend` and `backend` directories.

## 🛠️ Tech Stack

* **Frontend:** React.js, HTML5, CSS3, JavaScript (ES6+)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose Object Data Modeling)
* **Security:** JWT for stateless authentication and bcryptjs for password hashing.

## 📂 Project Structure

The repository is divided into two primary environments:

### `/backend`
This directory houses the Node.js/Express server, RESTful API routing, and database interactions.
* **Routes:** Handles API endpoints for user authentication (`/api/auth`) and note operations (`/api/notes`).
* **Models:** Defines the MongoDB schemas for the `User` and `Note` entities.
* **Middleware:** Contains the JWT verification logic (`fetchuser`) to secure private endpoints and ensure users can only access their own notes.

### `/frontend`
This directory contains the React user interface and client-side routing.
* **Components:** Modular UI elements including the navigation bar, note cards, and login/signup forms.
* **State Management:** Manages the global state of the user's notes and authentication status (typically via React Context API) to keep the frontend completely in sync with the backend database.

## ⚙️ Installation & Local Setup

To run this project locally, you will need to configure and start both the backend server and the frontend client.

### Prerequisites
* [Node.js](https://nodejs.org/) installed.
* A running MongoDB instance (local or MongoDB Atlas).

### 1. Backend Setup
Open your terminal, navigate to the backend directory, install the required packages, and configure your environment variables.

```bash
cd backend
npm install
