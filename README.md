# Chatbot README

This project contains a Q&A chatbot system built with a Flask backend and a React frontend. The bot is designed for network security purposes, and it uses machine learning techniques to provide responses based on a variety of data sources.

## Table of Contents
1. [Installation](#installation)
2. [Backend Setup](#backend-setup)
   - [Install Backend Dependencies](#install-backend-dependencies)
   - [PDF Loader](#pdf-loader)
   - [Start the Flask App](#start-the-flask-app)
3. [Frontend Setup](#frontend-setup)
   - [Install Frontend Dependencies](#install-frontend-dependencies)
   - [Start the React App](#start-the-react-app)
4. [Accessing the Application](#accessing-the-application)
5. [Notes](#notes)

## Installation

Follow these steps to install the required dependencies and set up both the frontend and backend.

### Install Backend Dependencies
To install the necessary Python packages for the Flask backend, run the following command in your terminal (in the root directory of the project):

```bash
pip install -r requirements.txt


## PDF Loader
Before running the Flask app, make sure to add the required PDF file(s) to the ./data directory.

Execute the following command to load the PDF data:

```bash
python pdf_loader.py
```
This command will handle the loading of the necessary PDF files into the app.

## Flask App
Start the Flask app by running:
```bash
python app.py
```
Visit http://localhost:5000 in your web browser to access the application.

## Frontend Setup

Follow these steps to set up and run the React frontend for the chatbot application.

### 1. Install Frontend Dependencies

Before running the React app, navigate to the `frontend` directory (where your `package.json` file is located). Install the required dependencies by running the following command:

```bash
npm install

### 2. Start the React App

Start the React app by running:

```bash
npm start
```

Visit http://localhost:3000 in your web browser to access the React app.

## Accessing the Application

Once both the backend and frontend are set up, you can access the chatbot application at http://localhost:3000.

## Notes

- Ensure that you have a PDF file with the necessary data for the chatbot to work properly.
- The chatbot uses machine learning techniques to provide responses based on the data it has been trained on.
- The chatbot is intended for network security purposes and should not be used for any other purpose.

