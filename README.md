# Hate Speech Classifier

This project is a web-based application that detects hate speech in text using a Logistic Regression model trained on the following [dataset](https://www.kaggle.com/datasets/waalbannyantudre/hate-speech-detection-curated-dataset/). The model achieved an F1 score of 82% on a 20% holdout of the dataset. It features a Flask backend for inference and a React frontend for user interaction. Both the frontend and backend are containerized for easy deployment.

**Important Note: This classifier is not 100% accurate. Do not use it in production! You have been warned.**

## Screenshots

<img width="1792" alt="not-hate-speech" src="https://github.com/user-attachments/assets/cbcd5303-a1fc-470b-99d1-a8633413a6a6">

<img width="1792" alt="hate-speech" src="https://github.com/user-attachments/assets/c2e314e6-c896-431f-8c9a-00595a806576">

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Requirements for the software and other tools to build, test, and push:
- [Docker](https://www.docker.com/)
- A brain that functions fine

### How to run

After cloning this repository and entering it, run the following Docker command:

    docker compose up

Once Flask and React are live, access http://localhost:80 from your browser.

## Built With

  - [React](https://react.dev/)
  - [Flask](https://github.com/pallets/flask)
  - [scikit-learn](https://scikit-learn.org/stable/)
  - [Docker](https://www.docker.com/)
