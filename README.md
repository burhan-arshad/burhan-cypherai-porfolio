# Burhan Arshad — AI & Machine Learning Portfolio

Personal portfolio website of **Burhan Arshad**, a Computer Science student and aspiring **AI/ML Engineer** focused on building practical intelligent systems across Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI.

The portfolio highlights selected machine learning and AI projects, technical skills, services, and ongoing learning in AI engineering, alongside select full-stack and eCommerce development work.

## Live Website

**Portfolio:** https://burhan.cypherai.tech

---

## About

I am a Computer Science student at the **University of Central Punjab** and an aspiring AI/ML Engineer focused on turning ideas into practical, deployed intelligent systems.

My main areas of interest include:

* Machine Learning
* Deep Learning
* Natural Language Processing
* Computer Vision
* Generative AI & Retrieval-Augmented Generation
* Agentic AI
* AI-powered applications

Alongside AI/ML, I work with backend development, databases, eCommerce platforms, and Unity game development.

I enjoy building projects end-to-end — from data processing and model development, to backend APIs, evaluation, deployment, and real-world integration.

---

## Tech Stack

### AI & Machine Learning

* Python
* NumPy
* Pandas
* Scikit-learn
* TensorFlow / Keras
* OpenCV
* Matplotlib
* Seaborn
* Jupyter Notebook

### Generative AI & NLP

* LangChain
* ChromaDB (Vector Databases)
* Sentence-Transformers (Embeddings)
* Hugging Face
* Groq (LLM Inference)
* TF-IDF / NLP Pipelines
* Retrieval-Augmented Generation (RAG)
* Agentic AI

### Backend, APIs & Deployment

* FastAPI
* Uvicorn
* Streamlit
* PostgreSQL
* Supabase
* SQL
* REST APIs
* WebSockets / Realtime Systems
* Vercel, Render

### Frontend

* Astro
* HTML
* CSS
* JavaScript
* Tailwind CSS

### Animation & Interaction

* GSAP
* Framer Motion

### Development Tools

* Git
* GitHub
* VS Code
* Virtual Environments

### Game Development

* Unity
* C#
* Blender
* Netcode for GameObjects
* ParrelSync

---

# Featured ML / AI Projects

## Real-Time ASL Sign Language Recognition

A computer vision system that recognizes American Sign Language alphabet gestures from a live webcam feed.

The system uses a custom CNN trained on **87,000 images across 29 classes** and provides real-time predictions through a FastAPI WebSocket pipeline.

**Technologies:** Python, TensorFlow/Keras, CNN, Computer Vision, FastAPI, WebSockets

**Validation Accuracy:** 99.19%

* **Live Demo:** https://realtime-sign-language-recognition-burhan.onrender.com/
* **GitHub:** https://github.com/burhan-arshad/realtime-sign-language-recognition

---

## Self-Driving Car — Behavioral Cloning

An end-to-end autonomous driving system inspired by NVIDIA's PilotNet architecture.

The model maps camera frames directly to steering angles and incorporates multi-camera training, data augmentation, steering-distribution balancing, and real-time simulator control.

**Technologies:** Python, TensorFlow/Keras, CNN, Computer Vision, Behavioral Cloning

* **GitHub:** https://github.com/burhan-arshad/self-driving-car-simulator

---

## RAG Document Assistant

A Retrieval-Augmented Generation application that allows users to upload PDF or TXT documents and ask questions about their contents.

Documents are chunked and embedded locally, stored in ChromaDB, retrieved using MMR, and passed to a Groq-hosted LLM for response generation. Retrieved source chunks are also displayed for better traceability.

**Technologies:** Python, LangChain, ChromaDB, Sentence-Transformers, Groq, Streamlit

* **Live Demo:** https://rag-document-summarizer-burhan.streamlit.app/
* **GitHub:** https://github.com/burhan-arshad/rag-document-summarizer

---

## CineMatch — Movie Recommendation System

A content-based movie recommendation engine using **TF-IDF and cosine similarity**.

The system includes a dedicated FastAPI backend and a Streamlit frontend, with live TMDB integration for movie search, posters, ratings, and genre-based recommendations.

**Technologies:** Python, Scikit-learn, TF-IDF, Cosine Similarity, FastAPI, Streamlit, TMDB API

* **Live Demo:** https://movie-recommendation-system-burhan.streamlit.app/
* **GitHub:** https://github.com/burhan-arshad/movie-recommendation-system

---

## Chest X-Ray Pneumonia Detection

A medical imaging classification project designed to distinguish normal chest X-rays from pneumonia cases.

The model was evaluated with particular attention to pneumonia-class recall, reflecting the importance of reducing missed positive cases.

**Technologies:** Python, TensorFlow/Keras, CNN, Computer Vision, Streamlit

**Pneumonia Recall:** 94%

* **Live Demo:** https://pneumonia-detection-burhan.streamlit.app/
* **GitHub:** https://github.com/burhan-arshad/pneumonia-detection-on-x-rays

---

## BTC Directional Signal — LSTM with Backtested Evaluation

A time-series deep learning project predicting short-term Bitcoin price direction from 100,000 hourly candles and 15 engineered technical indicators.

Rather than relying on classification accuracy, the model is evaluated through out-of-sample backtesting — transaction costs, Sharpe ratio, maximum drawdown, and win rate.

**Technologies:** Python, TensorFlow/Keras, LSTM, Pandas, Streamlit

* **Live Demo:** https://crypto-price-predictor-burhan.streamlit.app/
* **GitHub:** https://github.com/burhan-arshad/crypto-price-predictor

---

# Web & eCommerce Projects

## Pearl Essence Interiors

A professional WordPress website developed for a UAE-based interior design and fit-out business.

The website focuses on presenting the company's services, projects, brand identity, and consultation experience through a polished digital presence.

**Technologies:** WordPress, PHP, HTML, CSS, JavaScript

* **Live Website:** https://pearlessenceinteriors.com/

## KADME Footwear Store

A Shopify eCommerce store developed for a Pakistani footwear brand.

The project focuses on product presentation, collection organization, responsive layouts, conversion-focused design, and online shopping experience.

**Technologies:** Shopify, Liquid, HTML, CSS, JavaScript

* **Live Store:** https://kadme.store/

---

# Additional Development Work

## Cloud-Based Multi-Tenant SaaS Inventory System

A cloud-based multi-tenant inventory management platform designed for SaaS environments, focused on tenant isolation, relational database architecture, authentication, and real-time data synchronization.

**Technologies:** PostgreSQL, Supabase, SQL, Realtime/WebSockets

* **Live Demo:** https://inventory-saas-eight.vercel.app/
* **GitHub:** https://github.com/burhan-arshad/inventory-saas

## SMS Spam Classifier

An NLP machine learning application that classifies SMS messages as Spam or Ham using TF-IDF, LinearSVC, and GridSearchCV, deployed with a real-time Streamlit interface.

**Performance:** ~99% accuracy · ~97% macro F1-score

* **Live Demo:** https://nlp-spam-detection-burhan.streamlit.app/
* **GitHub:** https://github.com/burhan-arshad/nlp-spam-detection

## Bike Demand Prediction

A machine learning regression project predicting bike rental demand using environmental and temporal features, with a tuned Random Forest model and a Streamlit interface.

**Technologies:** Python, Pandas, Scikit-learn, Random Forest, GridSearchCV, Streamlit

* **Live Demo:** https://bike-demand-prediction-burhan.streamlit.app/
* **GitHub:** https://github.com/burhan-arshad/bike-demand-prediction

## Multiplayer Stealth-Comedy Game

A multiplayer stealth-comedy burglary game developed with Unity, focused on networked gameplay, player interaction, environmental systems, cooperative mechanics, enemy AI behavior, and multiplayer synchronization.

**Technologies:** Unity, C#, Netcode for GameObjects, ParrelSync, Blender

* **GitHub:** https://github.com/burhan-arshad/Unity-Multiplayer-Burglary-Game

## Debug or Die

A horror game project developed with Unity, focusing on atmosphere, environmental interaction, gameplay systems, pacing, and interactive storytelling.

**Technologies:** Unity, C#, Blender

* **GitHub:** https://github.com/burhan-arshad/debug-or-die

---

# Services

## Machine Learning Solutions

Development of practical machine learning systems for classification, regression, prediction, and data-driven applications.

## NLP & Generative AI Applications

Development of NLP and generative AI solutions including text classification, retrieval-augmented generation, embeddings, and LLM-integrated applications.

## AI-Powered Applications

Integration of machine learning and AI capabilities into practical software applications and business workflows.

## Data Analysis & Visualization

Data cleaning, exploratory data analysis, visualization, statistical analysis, feature exploration, and pattern discovery.

## Custom Software Development

Development of custom software solutions based on specific business and technical requirements.

## eCommerce Development

Development and customization of Shopify and WordPress websites for online businesses.

---

# Current AI Focus

My current learning path is:

**Machine Learning → Deep Learning → NLP → Computer Vision → Generative AI → Intelligent Applications**

I am focused on understanding not only how to train models, but also how intelligent systems are:

* Designed
* Evaluated
* Integrated
* Deployed
* Exposed through APIs
* Connected to real applications
* Improved through experimentation

---

# Development Philosophy

> **Learn. Build. Break. Improve. Deploy.**

I believe the strongest way to learn technology is by building.

Each project is an opportunity to move beyond theory, understand how different technologies work together, identify problems, experiment with solutions, and turn concepts into usable systems.

---

# Learning Journey

My development journey is continuously expanding across:

```text
Python
   ↓
Machine Learning
   ↓
Deep Learning
   ↓
Natural Language Processing
   ↓
Computer Vision
   ↓
Generative AI
   ↓
Agentic AI
   ↓
Intelligent Applications
```

At the same time, I continue developing my skills in backend development, databases, cloud-based applications, and software engineering.

---


> Building intelligent systems, one project at a time.

---
# What I Work With

| Area              | Technologies                                          |
| ----------------- | ------------------------------------------------------ |
| Programming       | Python, C#, JavaScript, SQL                            |
| Machine Learning  | Scikit-learn, TensorFlow, Keras                        |
| Data              | NumPy, Pandas, Matplotlib, Seaborn                     |
| NLP               | TF-IDF, Text Classification, NLP Pipelines             |
| Computer Vision   | CNNs, Image Classification, OpenCV                     |
| Generative AI     | LangChain, ChromaDB, Sentence-Transformers, Groq, RAG  |
| Backend           | FastAPI, Uvicorn, REST APIs, WebSockets                |
| Databases         | PostgreSQL, Supabase, SQL                              |
| Frontend          | Astro, HTML, CSS, JavaScript, Tailwind                 |
| Animation         | GSAP, Framer Motion                                    |
| Game Development  | Unity, C#, Blender, NGO                                |
| Version Control   | Git, GitHub                                            |
| Deployment        | Vercel, Streamlit, Render                              |

---

# Connect With Me

* **GitHub:** https://github.com/burhan-arshad
* **LinkedIn:** https://www.linkedin.com/in/burhan-arshad/
* **Instagram:** https://www.instagram.com/https_jerry24/
* **Upwork:** https://www.upwork.com/freelancers/~01ea7bfad0ddb63528
* **Email:** [burhanarshad707@gmail.com](mailto:burhanarshad707@gmail.com)
* **WhatsApp:** https://wa.me/923147089020

---

# Author

**Burhan Arshad**

AI & Machine Learning Developer
Computer Science Student


© 2026 **Burhan Arshad**. All Rights Reserved.
