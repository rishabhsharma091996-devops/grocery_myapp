# Grocery App

A minimal full-stack grocery list app: React front end, Node/Express back end.

## Run locally

1. Backend:
   cd backend
   npm install
   npm start
   # serves on http://localhost:5000

2. Frontend (in a second terminal):
   cd frontend
   npm install
   npm start
   # serves on http://localhost:3000

3. Open http://localhost:3000 in your browser. You should see a list
   of grocery items with prices, pulled live from the backend.

## Deploy

Push to the main branch. GitHub Actions deploys the backend to Azure
App Service and the frontend to Azure Static Web App automatically.
See the deployment doc for full setup steps and required secrets.