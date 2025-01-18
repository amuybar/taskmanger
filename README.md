# Task Tracker API

A simple **Node.js** application for managing tasks with a PostgreSQL database. The app includes full CRUD functionality and is designed to showcase modern DevOps practices with Docker, CI/CD, and testing.

---

## Features

- **CRUD Operations**: Manage tasks with properties like `id`, `title`, `description`, and `status`.
- **PostgreSQL Database**: Stores tasks securely.
- **Dockerized**: Easy to run in a containerized environment.
- **CI/CD Pipeline**: Automated testing, linting, and Docker image deployment.
- **Extensible**: Ready for monitoring, logging, and cloud deployment.

---

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **PostgreSQL**: Relational database.
- **Docker**: Containerization.
- **GitHub Actions**: CI/CD pipeline.
- **ESLint**: Code linting.
- **Jest**: Unit testing.

---

## Prerequisites

Before running the project, ensure you have:

- **Node.js** (v18 or higher)
- **npm** (Node package manager)
- **Docker** and **Docker Compose**
- A PostgreSQL client (optional, for manual DB interactions)

---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/<your-username>/task-tracker.git
cd task-tracker
```


## Install Dependencies
```bash
npm install
```

## Set Up Environment Variables
#### Create a .env file in the root directory and add:

```env
DB_USER=task_user
DB_PASSWORD=secure_password
DB_HOST=localhost
DB_NAME=task_tracker
DB_PORT=5432

```
## Run Locally
### Start the app locally with:

```bash
npm start
```
``The app will run on http://localhost:3000.``

## Running with Docker
### Build and Start Containers
```bash
docker-compose up --build
```
### Access the App
``App: http://localhost:3000``
``PostgreSQL: localhost:5432``

## Testing and Linting
### Run Tests
```bash
npm test
```
### Run Linter
```bash
npm run lint
```
## CI/CD Pipeline
#### This project uses GitHub Actions for CI/CD. On every push to the main branch, the pipeline:

1. Lints the code.
2. Runs tests.
3. Builds and pushes the Docker image to Docker Hub.


### Configure GitHub Secrets
#### Add the following secrets to your GitHub repository:

`DOCKER_USERNAME`: Your Docker Hub username.
`DOCKER_PASSWORD`: Your Docker Hub password.


## Future Enhancements
1. Add monitoring (e.g., Prometheus).
2. Deploy to a cloud platform (AWS ECS, Render, Vercel, etc.).
3. Implement authentication and authorization.



