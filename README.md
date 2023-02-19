# Blog Application with FARM Stack

This is a simple blog application that has been developed using FastAPI. The application includes three pages: blogs list page, form for adding blogs, and blog details page. The application also has a simple server with three main endpoints for adding, fetching, and fetching by id of blogs in MongoDB.

## Run instructions

To get started with the application, follow these steps:

A. Python/FastAPI Backend
1. Navigate into /backend directory (where main.py is present)
2. Start FastAPI server
```bash
uvicorn main:app --reload
```
3. The FastAPI server will be hosted at its default port 8000
4. To access SwaggerUI for API testing and documentation, go to http://localhost:8000/docs

B. React Frontend
1. Navigate to /frontend directory (where package.json is present)
2. Start React Web Application
```bash
npm start
```
3. The React web application will be hosted at its default port 3000, goto http://localhost:3000/