import React from 'react';

import aslImage from '../assets/project_images/asl.png';
import selfDrivingCarImage from '../assets/project_images/self-driving-car.gif';
import ragImage from '../assets/project_images/rag.png';
import cinematchImage from '../assets/project_images/cinematch.png';
import pneumoniaImage from '../assets/project_images/pneumonia.png';
import cryptoPriceImage from '../assets/project_images/crypto-price-prediction.png';
import videoAssistantImage from '../assets/project_images/video-assistant.png';
import pearlEssenceImage from '../assets/project_images/pearl-essence-interiors.png';
import kadmeImage from '../assets/project_images/kadme.png';

const projects = [
  {
    number: '01',
    name: 'REAL-TIME ASL SIGN LANGUAGE RECOGNITION',
    title: (
      <>
        REAL-TIME ASL{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          sign
        </span>
        <br />
        LANGUAGE RECOGNITION
      </>
    ),
    description:
      'A computer vision system that recognizes American Sign Language alphabet gestures from a live webcam feed. A custom CNN trained on 87,000 images across 29 classes reaches 99.19% validation accuracy, with predictions streamed in real time over FastAPI WebSockets.',
    image: aslImage,
    live: 'https://realtime-sign-language-recognition-burhan.onrender.com/',
    github:
      'https://github.com/burhan-arshad/realtime-sign-language-recognition',
  },
  {
    number: '02',
    name: 'SELF-DRIVING CAR — BEHAVIORAL CLONING',
    title: (
      <>
        SELF-DRIVING{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          car
        </span>
        <br />
        BEHAVIORAL CLONING
      </>
    ),
    description:
      'An end-to-end autonomous driving system inspired by NVIDIA PilotNet. A convolutional network maps raw camera frames directly to steering angles, trained on multi-camera data with augmentation, steering-distribution balancing, and real-time simulator control.',
    image: selfDrivingCarImage,
    liveDemo: null,
    github:
      'https://github.com/burhan-arshad/self-driving-car-simulator',
  },
  {
    number: '03',
    name: 'RAG DOCUMENT ASSISTANT',
    title: (
      <>
        RAG{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          document
        </span>
        <br />
        ASSISTANT
      </>
    ),
    description:
      'A Retrieval-Augmented Generation app that lets users upload PDF or TXT files and ask questions about them. Documents are chunked, embedded locally, stored in ChromaDB, retrieved with MMR, and answered by an LLM with source chunks shown for traceability.',
    image: ragImage,
    live: 'https://rag-document-summarizer-burhan.streamlit.app/',
    github:
      'https://github.com/burhan-arshad/rag-document-summarizer',
  },
  {
    number: '04',
    name: 'CINEMATCH MOVIE RECOMMENDATION SYSTEM',
    title: (
      <>
        CINEMATCH{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          movie
        </span>
        <br />
        RECOMMENDATION SYSTEM
      </>
    ),
    description:
      'A content-based recommendation engine using TF-IDF and cosine similarity, served through a dedicated FastAPI backend and a Streamlit frontend, enriched with live TMDB data for search, posters, ratings, and genre-based recommendations.',
    image: cinematchImage,
    live: 'https://movie-recommendation-system-burhan.streamlit.app/',
    github:
      'https://github.com/burhan-arshad/movie-recommendation-system',
  },
  {
    number: '05',
    name: 'CHEST X-RAY PNEUMONIA DETECTION',
    title: (
      <>
        CHEST X-RAY{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          pneumonia
        </span>
        <br />
        DETECTION
      </>
    ),
    description:
      'A medical imaging classifier built on a custom CNN, trained to distinguish normal chest X-rays from pneumonia cases. Evaluation was tuned for recall over raw accuracy — reaching 94% recall on the pneumonia class — since a missed case is the costlier error.',
    image: pneumoniaImage,
    live: 'https://pneumonia-detection-burhan.streamlit.app/',
    github:
      'https://github.com/burhan-arshad/pneumonia-detection-on-x-rays',
  },
  {
    number: '06',
    name: 'CRYPTO PRICE PREDICTION',
    title: (
      <>
        CRYPTO PRICE{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          prediction
        </span>
        <br />
        SYSTEM
      </>
    ),
    description:
      'A cryptocurrency forecasting system that predicts the direction of the next 10 hourly BTC/USDT candles using an LSTM model and technical indicators, with out-of-sample backtesting to evaluate prediction performance.',
    image: cryptoPriceImage,
    live: 'https://crypto-price-predictor-burhan.streamlit.app/',
    github:
      'https://github.com/burhan-arshad/crypto-price-predictor',
  },
  {
    number: '07',
    name: 'VIDEO ASSISTANT — AI VIDEO ANALYSIS',
    title: (
      <>
        VIDEO{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          assistant
        </span>
        <br />
        AI VIDEO ANALYSIS
      </>
    ),
    description:
      'An AI-powered video assistant that processes YouTube videos or local files, transcribes audio with Whisper, generates summaries and structured insights, and builds a RAG-powered chat interface for asking questions about the video content.',
    image: videoAssistantImage,
    liveDemo: null,
    github:
      'https://github.com/burhan-arshad/video-assistant',
  },
  {
    number: '08',
    name: 'PEARLESSENCEINTERIORS',
    title: (
      <>
        PEARL{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          essence
        </span>
        <br />
        INTERIORS
      </>
    ),
    description:
      'A professional WordPress website developed for a UAE-based interior design and fit-out business. The website presents the brand, interior design services, project capabilities, and consultation experience through a polished digital presence focused on luxury, functionality, and visual presentation.',
    image: pearlEssenceImage,
    live: 'https://pearlessenceinteriors.com/',
    github: null,
    specialType: 'wordpress',
  },
  {
    number: '09',
    name: 'KADME',
    title: (
      <>
        KADME{' '}
        <span className="font-light italic text-purple-300 lowercase font-serif">
          footwear
        </span>
        <br />
        SHOPIFY STORE
      </>
    ),
    description:
      'A Shopify eCommerce store developed for a Pakistani shoe brand. The project focuses on product presentation, collection organization, responsive shopping experience, conversion-focused layouts, and a clean brand identity for online footwear sales.',
    image: kadmeImage,
    live: 'https://kadme.store/',
    github: null,
    specialType: 'shopify',
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#070711] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-20">
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-purple-400">
            SYS.04 // PROJECTS
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            SELECTED{' '}
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
              PROJECTS.
            </span>
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => {

            /* WordPress Project */
            if (project.specialType === 'wordpress') {
              return (
                <div
                  key={project.name}
                  className="group relative overflow-hidden border border-purple-500/20 bg-[#0b0b16] shadow-[0_0_60px_rgba(139,92,246,0.06)]"
                >
                  <div className="grid lg:grid-cols-2">

                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full min-h-[300px] w-full object-contain bg-[#0b0b16] p-4 sm:p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#070711]/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                      <div className="mb-6 flex items-center gap-4">
                        <span className="font-mono text-sm text-purple-400">
                          {project.number}
                        </span>

                        <div className="h-px w-12 bg-purple-500/40" />

                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500">
                          WORDPRESS
                        </span>
                      </div>

                      <h3 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mb-8 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-purple-500/40 px-5 py-3 font-mono text-xs uppercase tracking-widest text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white"
                          >
                            Visit Site 
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            }

            /* Shopify Project */
            if (project.specialType === 'shopify') {
              return (
                <div
                  key={project.name}
                  className="group relative overflow-hidden border border-purple-500/20 bg-[#0b0b16] shadow-[0_0_60px_rgba(139,92,246,0.06)]"
                >
                  <div className="grid lg:grid-cols-2">

                    <div className="relative overflow-hidden lg:order-2">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full min-h-[300px] w-full object-contain bg-[#0b0b16] p-4 sm:p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#070711]/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14 lg:order-1">
                      <div className="mb-6 flex items-center gap-4">
                        <span className="font-mono text-sm text-purple-400">
                          {project.number}
                        </span>

                        <div className="h-px w-12 bg-purple-500/40" />

                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500">
                          SHOPIFY
                        </span>
                      </div>

                      <h3 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mb-8 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-purple-500/40 px-5 py-3 font-mono text-xs uppercase tracking-widest text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white"
                          >
                            Visit Store 
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            }

            /* Standard Projects */
            return (
              <div
                key={project.name}
                className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >

                {/* Project Image */}
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-purple-500/20 bg-[#0b0b16] shadow-[0_0_40px_rgba(139,92,246,0.08)]">

                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-contain p-2 sm:p-3 md:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#070711]/30 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute inset-0 border border-purple-400/0 transition-colors duration-500 group-hover:border-purple-400/30 pointer-events-none" />

                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-mono text-sm text-purple-400">
                      {project.number}
                    </span>

                    <div className="h-px w-12 bg-purple-500/40" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500">
                      PROJECT
                    </span>
                  </div>

                  <h3 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mb-8 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-purple-500/40 px-5 py-3 font-mono text-xs uppercase tracking-widest text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white"
                      >
                        Live Demo 
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-purple-500/40 px-5 py-3 font-mono text-xs uppercase tracking-widest text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white"
                      >
                        Live Demo 
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/10 px-5 py-3 font-mono text-xs uppercase tracking-widest text-gray-400 transition-all duration-300 hover:border-white/30 hover:text-white"
                      >
                        GitHub 
                      </a>
                    )}

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View More Projects */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://github.com/burhan-arshad/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-purple-500/30 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white"
          >
            View More Projects

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Project;