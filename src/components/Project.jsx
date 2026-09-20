import React from 'react';

import pearlEssenceImage from '../assets/project_images/pearl-essence-interiors.png';
import kadmeImage from '../assets/project_images/kadme.png';

const PROJECT_PREVIEWS = {
  asl: (accent) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="625" viewBox="0 0 1000 625">
      <defs>
        <linearGradient id="asl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#070711"/>
          <stop offset="55%" stop-color="#120b25"/>
          <stop offset="100%" stop-color="#050509"/>
        </linearGradient>

        <linearGradient id="asl-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#17132b"/>
          <stop offset="100%" stop-color="#0b0a16"/>
        </linearGradient>

        <radialGradient id="asl-glow">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.28"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>

        <filter id="asl-shadow">
          <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#000000" flood-opacity="0.45"/>
        </filter>
      </defs>

      <rect width="1000" height="625" fill="url(#asl-bg)"/>
      <circle cx="520" cy="310" r="360" fill="url(#asl-glow)"/>

      <rect x="34" y="30" width="932" height="565" rx="22" fill="#090911" stroke="${accent}" stroke-opacity="0.18"/>

      <rect x="34" y="30" width="932" height="58" rx="22" fill="#0e0d18"/>
      <rect x="34" y="66" width="932" height="22" fill="#0e0d18"/>

      <circle cx="65" cy="59" r="6" fill="#ef4444" opacity="0.7"/>
      <circle cx="87" cy="59" r="6" fill="#eab308" opacity="0.7"/>
      <circle cx="109" cy="59" r="6" fill="#22c55e" opacity="0.7"/>

      <text x="140" y="64" fill="#ffffff" opacity="0.45" font-family="monospace" font-size="13">
        ASL VISION / REAL-TIME RECOGNITION
      </text>

      <rect x="65" y="115" width="570" height="425" rx="16" fill="#050509" stroke="#ffffff" stroke-opacity="0.08"/>

      <rect x="82" y="132" width="536" height="391" rx="12" fill="#0a0911"/>

      <g opacity="0.08" stroke="${accent}">
        <path d="M82 210 H618"/>
        <path d="M82 290 H618"/>
        <path d="M82 370 H618"/>
        <path d="M82 450 H618"/>
        <path d="M170 132 V523"/>
        <path d="M270 132 V523"/>
        <path d="M370 132 V523"/>
        <path d="M470 132 V523"/>
        <path d="M570 132 V523"/>
      </g>

      <path
        d="M350 455
           C305 435 275 397 279 350
           C282 320 294 298 304 270
           L300 192
           C299 175 311 163 324 164
           C338 165 345 176 345 192
           L347 255
           L354 151
           C355 135 367 125 380 128
           C394 130 400 141 399 157
           L398 255
           L408 143
           C410 127 421 119 435 122
           C449 125 454 137 452 153
           L443 263
           L461 174
           C464 159 476 153 489 158
           C502 163 505 175 501 190
           L485 295
           C480 325 489 350 503 372
           C525 407 512 446 480 466
           C440 491 389 480 350 455 Z"
        fill="#11101b"
        stroke="${accent}"
        stroke-width="2.5"
        stroke-opacity="0.9"
      />

      <g fill="${accent}">
        <circle cx="350" cy="455" r="5"/>
        <circle cx="304" cy="270" r="5"/>
        <circle cx="345" cy="255" r="5"/>
        <circle cx="354" cy="151" r="5"/>
        <circle cx="398" cy="255" r="5"/>
        <circle cx="408" cy="143" r="5"/>
        <circle cx="443" cy="263" r="5"/>
        <circle cx="461" cy="174" r="5"/>
        <circle cx="485" cy="295" r="5"/>
        <circle cx="503" cy="372" r="5"/>
      </g>

      <g stroke="${accent}" stroke-width="1.5" opacity="0.4">
        <path d="M350 455 L304 270"/>
        <path d="M350 455 L398 255"/>
        <path d="M398 255 L408 143"/>
        <path d="M443 263 L461 174"/>
        <path d="M443 263 L485 295"/>
      </g>

      <rect x="660" y="115" width="273" height="425" rx="16" fill="url(#asl-card)" stroke="${accent}" stroke-opacity="0.16" filter="url(#asl-shadow)"/>

      <text x="688" y="150" fill="#ffffff" font-family="monospace" font-size="11" opacity="0.4">
        MODEL OUTPUT
      </text>

      <text x="688" y="215" fill="${accent}" font-family="sans-serif" font-size="58" font-weight="800">
        A
      </text>

      <text x="688" y="244" fill="#ffffff" font-family="monospace" font-size="11" opacity="0.45">
        PREDICTED SIGN
      </text>

      <rect x="688" y="278" width="215" height="7" rx="3" fill="#ffffff" opacity="0.06"/>
      <rect x="688" y="278" width="199" height="7" rx="3" fill="${accent}" opacity="0.75"/>

      <text x="688" y="310" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.45">
        CONFIDENCE
      </text>

      <text x="870" y="310" text-anchor="end" fill="#ffffff" font-family="monospace" font-size="12">
        99.19%
      </text>

      <text x="688" y="355" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.45">
        WEBSOCKET
      </text>

      <circle cx="695" cy="382" r="5" fill="#22c55e"/>
      <text x="710" y="386" fill="#22c55e" font-family="monospace" font-size="11">
        STREAMING
      </text>

      <text x="688" y="430" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        CNN MODEL
      </text>

      <text x="688" y="455" fill="#ffffff" font-family="monospace" font-size="14">
        29 CLASSES
      </text>

      <text x="688" y="485" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        LIVE CAMERA
      </text>

      <text x="688" y="510" fill="#ffffff" font-family="monospace" font-size="14">
        CONNECTED
      </text>
    </svg>
  `,

  driving: (accent) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="625" viewBox="0 0 1000 625">
      <defs>
        <linearGradient id="drive-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#15152a"/>
          <stop offset="55%" stop-color="#080810"/>
          <stop offset="100%" stop-color="#030305"/>
        </linearGradient>

        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#181820"/>
          <stop offset="100%" stop-color="#050507"/>
        </linearGradient>

        <radialGradient id="drive-glow">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="1000" height="625" fill="url(#drive-bg)"/>

      <circle cx="500" cy="330" r="330" fill="url(#drive-glow)"/>

      <rect x="32" y="30" width="936" height="565" rx="22" fill="#07070d" stroke="${accent}" stroke-opacity="0.16"/>

      <rect x="32" y="30" width="936" height="58" rx="22" fill="#0e0e17"/>
      <rect x="32" y="66" width="936" height="22" fill="#0e0e17"/>

      <circle cx="64" cy="59" r="6" fill="#ef4444" opacity="0.7"/>
      <circle cx="86" cy="59" r="6" fill="#eab308" opacity="0.7"/>
      <circle cx="108" cy="59" r="6" fill="#22c55e" opacity="0.7"/>

      <text x="140" y="64" fill="#ffffff" opacity="0.4" font-family="monospace" font-size="13">
        AUTONOMOUS DRIVING / PILOTNET SIMULATOR
      </text>

      <path d="M75 525 L385 115 L615 115 L925 525 Z" fill="url(#road)"/>

      <path d="M385 115 L75 525" stroke="${accent}" stroke-width="2" opacity="0.25"/>
      <path d="M615 115 L925 525" stroke="${accent}" stroke-width="2" opacity="0.25"/>

      <g stroke="#ffffff" stroke-width="6" opacity="0.55" stroke-dasharray="35 32">
        <path d="M500 490 L500 130"/>
      </g>

      <g stroke="#ffffff" opacity="0.18">
        <path d="M300 525 L435 115"/>
        <path d="M700 525 L565 115"/>
      </g>

      <g transform="translate(390 390)">
        <rect x="0" y="25" width="220" height="82" rx="22" fill="#101019" stroke="${accent}" stroke-width="2"/>
        <path d="M30 25 L65 -15 L155 -15 L190 25" fill="#141421" stroke="${accent}" stroke-width="2"/>
        <rect x="76" y="-5" width="68" height="30" rx="5" fill="#050509" stroke="${accent}" stroke-opacity="0.5"/>
        <circle cx="48" cy="112" r="20" fill="#050509" stroke="${accent}" stroke-width="2"/>
        <circle cx="172" cy="112" r="20" fill="#050509" stroke="${accent}" stroke-width="2"/>
      </g>

      <rect x="68" y="115" width="190" height="155" rx="14" fill="#0b0b14" stroke="#ffffff" stroke-opacity="0.08"/>

      <text x="90" y="145" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        CAMERA FEED
      </text>

      <rect x="90" y="163" width="146" height="78" rx="8" fill="#11111a"/>

      <path d="M100 226 L130 185 L155 210 L180 176 L225 226" fill="none" stroke="${accent}" stroke-width="2" opacity="0.8"/>

      <circle cx="200" cy="185" r="4" fill="${accent}"/>

      <rect x="742" y="115" width="190" height="270" rx="14" fill="#0b0b14" stroke="#ffffff" stroke-opacity="0.08"/>

      <text x="765" y="145" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        VEHICLE TELEMETRY
      </text>

      <text x="765" y="185" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        SPEED
      </text>

      <text x="765" y="213" fill="${accent}" font-family="monospace" font-size="25">
        42
      </text>

      <text x="820" y="213" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        KM/H
      </text>

      <text x="765" y="255" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        STEERING
      </text>

      <text x="765" y="283" fill="${accent}" font-family="monospace" font-size="21">
        +0.08
      </text>

      <text x="765" y="325" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        MODEL
      </text>

      <text x="765" y="350" fill="#ffffff" font-family="monospace" font-size="14">
        PILOTNET
      </text>

      <rect x="68" y="420" width="190" height="105" rx="14" fill="#0b0b14" stroke="#ffffff" stroke-opacity="0.08"/>

      <text x="90" y="448" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        PREDICTION
      </text>

      <path d="M90 490 C120 470 145 510 175 482 C200 460 215 475 238 456" fill="none" stroke="${accent}" stroke-width="2"/>

      <circle cx="238" cy="456" r="5" fill="${accent}"/>
    </svg>
  `,

  rag: (accent) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="625" viewBox="0 0 1000 625">
      <defs>
        <linearGradient id="rag-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#080810"/>
          <stop offset="55%" stop-color="#100b20"/>
          <stop offset="100%" stop-color="#050507"/>
        </linearGradient>

        <linearGradient id="rag-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#17122a"/>
          <stop offset="100%" stop-color="#0b0a13"/>
        </linearGradient>
      </defs>

      <rect width="1000" height="625" fill="url(#rag-bg)"/>

      <rect x="30" y="28" width="940" height="569" rx="22" fill="#08080f" stroke="${accent}" stroke-opacity="0.18"/>

      <rect x="30" y="28" width="940" height="65" rx="22" fill="#0e0d17"/>
      <rect x="30" y="70" width="940" height="23" fill="#0e0d17"/>

      <circle cx="63" cy="60" r="6" fill="#ef4444" opacity="0.7"/>
      <circle cx="85" cy="60" r="6" fill="#eab308" opacity="0.7"/>
      <circle cx="107" cy="60" r="6" fill="#22c55e" opacity="0.7"/>

      <text x="140" y="65" fill="#ffffff" font-family="monospace" font-size="13" opacity="0.45">
        RAG DOCUMENT ASSISTANT
      </text>

      <rect x="60" y="120" width="250" height="435" rx="16" fill="#0d0c15" stroke="#ffffff" stroke-opacity="0.07"/>

      <text x="85" y="152" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        DOCUMENTS
      </text>

      <rect x="82" y="177" width="205" height="55" rx="10" fill="url(#rag-panel)" stroke="${accent}" stroke-opacity="0.35"/>

      <rect x="101" y="193" width="24" height="27" rx="3" fill="${accent}" opacity="0.85"/>
      <text x="137" y="205" fill="#ffffff" font-family="monospace" font-size="10">
        research.pdf
      </text>
      <text x="137" y="220" fill="#ffffff" font-family="monospace" font-size="8" opacity="0.35">
        14.8 MB
      </text>

      <rect x="82" y="246" width="205" height="55" rx="10" fill="#11101a"/>

      <rect x="101" y="262" width="24" height="27" rx="3" fill="#ffffff" opacity="0.15"/>
      <text x="137" y="274" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.65">
        notes.txt
      </text>
      <text x="137" y="289" fill="#ffffff" font-family="monospace" font-size="8" opacity="0.3">
        32 KB
      </text>

      <rect x="82" y="325" width="205" height="44" rx="10" fill="${accent}" opacity="0.12" stroke="${accent}" stroke-opacity="0.25"/>

      <text x="103" y="352" fill="${accent}" font-family="monospace" font-size="10">
        + UPLOAD DOCUMENT
      </text>

      <text x="85" y="415" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        VECTOR STORE
      </text>

      <circle cx="95" cy="445" r="5" fill="#22c55e"/>
      <text x="110" y="449" fill="#22c55e" font-family="monospace" font-size="10">
        CHROMADB READY
      </text>

      <text x="85" y="485" fill="#ffffff" font-family="monospace" font-size="9" opacity="0.35">
        RETRIEVAL
      </text>

      <text x="85" y="508" fill="#ffffff" font-family="monospace" font-size="12">
        MMR SEARCH
      </text>

      <rect x="335" y="120" width="605" height="435" rx="16" fill="#0b0a12" stroke="#ffffff" stroke-opacity="0.07"/>

      <text x="365" y="153" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        CONVERSATION
      </text>

      <rect x="365" y="180" width="475" height="70" rx="12" fill="#11101b"/>

      <text x="388" y="208" fill="#ffffff" font-family="sans-serif" font-size="13">
        What are the main findings in the document?
      </text>

      <text x="388" y="230" fill="${accent}" font-family="monospace" font-size="9" opacity="0.75">
        USER QUERY
      </text>

      <rect x="365" y="275" width="510" height="145" rx="12" fill="url(#rag-panel)" stroke="${accent}" stroke-opacity="0.2"/>

      <circle cx="390" cy="300" r="12" fill="${accent}" opacity="0.9"/>

      <text x="415" y="305" fill="${accent}" font-family="monospace" font-size="10">
        RAG ASSISTANT
      </text>

      <text x="390" y="338" fill="#ffffff" font-family="sans-serif" font-size="12" opacity="0.75">
        The document identifies three major findings
      </text>

      <text x="390" y="359" fill="#ffffff" font-family="sans-serif" font-size="12" opacity="0.75">
        based on the retrieved research sections...
      </text>

      <rect x="390" y="382" width="120" height="20" rx="5" fill="${accent}" opacity="0.12"/>
      <text x="401" y="396" fill="${accent}" font-family="monospace" font-size="8">
        SOURCE: PAGE 07
      </text>

      <rect x="365" y="450" width="510" height="58" rx="12" fill="#0f0e17" stroke="#ffffff" stroke-opacity="0.06"/>

      <text x="390" y="485" fill="#ffffff" font-family="monospace" font-size="11" opacity="0.3">
        Ask a question about your documents...
      </text>

      <circle cx="842" cy="479" r="17" fill="${accent}" opacity="0.85"/>
      <path d="M835 479 L848 479 M844 475 L848 479 L844 483" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    </svg>
  `,

  movie: (accent) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="625" viewBox="0 0 1000 625">
      <defs>
        <linearGradient id="movie-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0b0913"/>
          <stop offset="55%" stop-color="#160b23"/>
          <stop offset="100%" stop-color="#050507"/>
        </linearGradient>

        <linearGradient id="poster1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2d1747"/>
          <stop offset="100%" stop-color="#09070d"/>
        </linearGradient>

        <linearGradient id="poster2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1d2845"/>
          <stop offset="100%" stop-color="#08090f"/>
        </linearGradient>
      </defs>

      <rect width="1000" height="625" fill="url(#movie-bg)"/>

      <rect x="30" y="28" width="940" height="569" rx="22" fill="#08080e" stroke="${accent}" stroke-opacity="0.18"/>

      <rect x="30" y="28" width="940" height="65" rx="22" fill="#0f0d17"/>
      <rect x="30" y="70" width="940" height="23" fill="#0f0d17"/>

      <circle cx="63" cy="60" r="6" fill="#ef4444" opacity="0.7"/>
      <circle cx="85" cy="60" r="6" fill="#eab308" opacity="0.7"/>
      <circle cx="107" cy="60" r="6" fill="#22c55e" opacity="0.7"/>

      <text x="140" y="65" fill="#ffffff" font-family="monospace" font-size="13" opacity="0.45">
        CINEMATCH / MOVIE RECOMMENDATION ENGINE
      </text>

      <text x="70" y="135" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">
        Find something you'll love.
      </text>

      <rect x="70" y="155" width="860" height="48" rx="24" fill="#111019" stroke="${accent}" stroke-opacity="0.25"/>

      <circle cx="96" cy="179" r="8" fill="none" stroke="#ffffff" stroke-opacity="0.4" stroke-width="2"/>
      <path d="M102 185 L108 191" stroke="#ffffff" stroke-opacity="0.4" stroke-width="2"/>

      <text x="122" y="184" fill="#ffffff" font-family="monospace" font-size="11" opacity="0.35">
        Search movies, genres, actors...
      </text>

      <text x="70" y="248" fill="${accent}" font-family="monospace" font-size="10">
        RECOMMENDED FOR YOU
      </text>

      <g>
        <rect x="70" y="270" width="175" height="225" rx="12" fill="url(#poster1)" stroke="#ffffff" stroke-opacity="0.08"/>
        <circle cx="157" cy="355" r="38" fill="none" stroke="${accent}" stroke-width="2" opacity="0.7"/>
        <path d="M145 340 L177 355 L145 370 Z" fill="${accent}" opacity="0.8"/>
        <text x="88" y="435" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="700">
          NIGHT SHIFT
        </text>
        <text x="88" y="458" fill="#ffffff" font-family="monospace" font-size="9" opacity="0.4">
          2024 • THRILLER
        </text>
        <text x="88" y="480" fill="${accent}" font-family="monospace" font-size="10">
          ★ 8.4
        </text>
      </g>

      <g>
        <rect x="265" y="270" width="175" height="225" rx="12" fill="url(#poster2)" stroke="#ffffff" stroke-opacity="0.08"/>
        <circle cx="352" cy="355" r="42" fill="${accent}" opacity="0.12"/>
        <circle cx="352" cy="355" r="24" fill="none" stroke="${accent}" stroke-width="2"/>
        <text x="283" y="435" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="700">
          ORBIT
        </text>
        <text x="283" y="458" fill="#ffffff" font-family="monospace" font-size="9" opacity="0.4">
          2025 • SCI-FI
        </text>
        <text x="283" y="480" fill="${accent}" font-family="monospace" font-size="10">
          ★ 8.7
        </text>
      </g>

      <g>
        <rect x="460" y="270" width="175" height="225" rx="12" fill="#181326" stroke="#ffffff" stroke-opacity="0.08"/>
        <path d="M495 390 C530 320 570 320 605 390" fill="none" stroke="${accent}" stroke-width="2" opacity="0.75"/>
        <circle cx="550" cy="350" r="24" fill="none" stroke="${accent}" stroke-width="2"/>
        <text x="478" y="435" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="700">
          AFTERLIGHT
        </text>
        <text x="478" y="458" fill="#ffffff" font-family="monospace" font-size="9" opacity="0.4">
          2023 • DRAMA
        </text>
        <text x="478" y="480" fill="${accent}" font-family="monospace" font-size="10">
          ★ 8.1
        </text>
      </g>

      <g>
        <rect x="655" y="270" width="175" height="225" rx="12" fill="#131928" stroke="#ffffff" stroke-opacity="0.08"/>
        <path d="M690 330 L795 390 M795 330 L690 390" stroke="${accent}" stroke-width="2" opacity="0.6"/>
        <text x="673" y="435" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="700">
          ECHOES
        </text>
        <text x="673" y="458" fill="#ffffff" font-family="monospace" font-size="9" opacity="0.4">
          2024 • MYSTERY
        </text>
        <text x="673" y="480" fill="${accent}" font-family="monospace" font-size="10">
          ★ 8.3
        </text>
      </g>

      <text x="70" y="535" fill="#ffffff" font-family="monospace" font-size="9" opacity="0.3">
        TF-IDF • COSINE SIMILARITY • TMDB API • FASTAPI
      </text>
    </svg>
  `,

  pneumonia: (accent) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="625" viewBox="0 0 1000 625">
      <defs>
        <linearGradient id="xray-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#06070b"/>
          <stop offset="60%" stop-color="#101521"/>
          <stop offset="100%" stop-color="#050507"/>
        </linearGradient>

        <radialGradient id="lung-glow">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="1000" height="625" fill="url(#xray-bg)"/>

      <circle cx="470" cy="330" r="320" fill="url(#lung-glow)"/>

      <rect x="30" y="28" width="940" height="569" rx="22" fill="#07080c" stroke="${accent}" stroke-opacity="0.18"/>

      <rect x="30" y="28" width="940" height="65" rx="22" fill="#0d0f16"/>
      <rect x="30" y="70" width="940" height="23" fill="#0d0f16"/>

      <circle cx="63" cy="60" r="6" fill="#ef4444" opacity="0.7"/>
      <circle cx="85" cy="60" r="6" fill="#eab308" opacity="0.7"/>
      <circle cx="107" cy="60" r="6" fill="#22c55e" opacity="0.7"/>

      <text x="140" y="65" fill="#ffffff" font-family="monospace" font-size="13" opacity="0.45">
        CHEST X-RAY / PNEUMONIA CLASSIFIER
      </text>

      <rect x="65" y="120" width="530" height="420" rx="16" fill="#030407" stroke="#ffffff" stroke-opacity="0.08"/>

      <g transform="translate(105 145)">
        <path
          d="M225 30 C185 70 145 105 120 160 C95 215 95 305 145 355 C170 380 205 367 220 330 C235 292 238 245 225 205 Z"
          fill="#bfc8d6"
          opacity="0.08"
          stroke="#dbe4ef"
          stroke-width="2"
        />

        <path
          d="M225 30 C265 70 305 105 330 160 C355 215 355 305 305 355 C280 380 245 367 230 330 C215 292 212 245 225 205 Z"
          fill="#bfc8d6"
          opacity="0.08"
          stroke="#dbe4ef"
          stroke-width="2"
        />

        <path d="M225 35 L225 350" stroke="#dbe4ef" stroke-width="3" opacity="0.4"/>

        <g stroke="#dbe4ef" stroke-width="1" opacity="0.18" fill="none">
          <path d="M225 90 C180 110 150 135 125 175"/>
          <path d="M225 120 C180 140 150 170 120 210"/>
          <path d="M225 150 C180 170 150 200 125 240"/>
          <path d="M225 180 C180 200 155 235 130 270"/>
          <path d="M225 90 C270 110 300 135 325 175"/>
          <path d="M225 120 C270 140 300 170 330 210"/>
          <path d="M225 150 C270 170 300 200 325 240"/>
          <path d="M225 180 C270 200 295 235 320 270"/>
        </g>

        <ellipse cx="300" cy="230" rx="42" ry="70" fill="${accent}" opacity="0.11"/>
        <ellipse cx="150" cy="265" rx="30" ry="50" fill="${accent}" opacity="0.08"/>

        <rect x="102" y="235" width="75" height="60" rx="5" fill="none" stroke="${accent}" stroke-width="2"/>

        <line x1="102" y1="250" x2="177" y2="250" stroke="${accent}" stroke-width="1" opacity="0.5"/>
        <line x1="102" y1="265" x2="177" y2="265" stroke="${accent}" stroke-width="1" opacity="0.5"/>
        <line x1="102" y1="280" x2="177" y2="280" stroke="${accent}" stroke-width="1" opacity="0.5"/>
      </g>

      <rect x="625" y="120" width="305" height="420" rx="16" fill="#0c0e15" stroke="#ffffff" stroke-opacity="0.08"/>

      <text x="655" y="155" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        AI ANALYSIS
      </text>

      <text x="655" y="215" fill="${accent}" font-family="sans-serif" font-size="32" font-weight="800">
        PNEUMONIA
      </text>

      <text x="655" y="244" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        PREDICTED CLASS
      </text>

      <rect x="655" y="280" width="245" height="8" rx="4" fill="#ffffff" opacity="0.06"/>
      <rect x="655" y="280" width="229" height="8" rx="4" fill="${accent}" opacity="0.8"/>

      <text x="655" y="315" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        CONFIDENCE
      </text>

      <text x="900" y="315" text-anchor="end" fill="#ffffff" font-family="monospace" font-size="13">
        94.0%
      </text>

      <text x="655" y="360" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        RECALL
      </text>

      <text x="900" y="360" text-anchor="end" fill="${accent}" font-family="monospace" font-size="13">
        94%
      </text>

      <text x="655" y="410" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        MODEL
      </text>

      <text x="655" y="435" fill="#ffffff" font-family="monospace" font-size="14">
        CUSTOM CNN
      </text>

      <text x="655" y="480" fill="#ffffff" font-family="monospace" font-size="10" opacity="0.4">
        SCAN STATUS
      </text>

      <circle cx="660" cy="505" r="5" fill="#22c55e"/>
      <text x="675" y="509" fill="#22c55e" font-family="monospace" font-size="10">
        ANALYSIS COMPLETE
      </text>
    </svg>
  `,
};

const makeProjectPreview = (
  type,
  accent = '#a855f7'
) => {
  const renderer =
    PROJECT_PREVIEWS[type] || PROJECT_PREVIEWS.rag;

  const svg = renderer(accent);

  return `data:image/svg+xml;utf8,${encodeURIComponent(
    svg.trim()
  )}`;
};

const projects = [
  {
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
    image: makeProjectPreview(
      'asl',
      '#a855f7'
    ),
    liveDemo:
      'https://realtime-sign-language-recognition-burhan.onrender.com/',
    github:
      'https://github.com/burhan-arshad/realtime-sign-language-recognition',
  },

  {
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
    image: makeProjectPreview(
      'driving',
      '#8b5cf6'
    ),
    liveDemo: null,
    github:
      'https://github.com/burhan-arshad/self-driving-car-simulator',
  },

  {
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
    image: makeProjectPreview(
      'rag',
      '#c084fc'
    ),
    liveDemo:
      'https://rag-document-summarizer-burhan.streamlit.app/',
    github:
      'https://github.com/burhan-arshad/rag-document-summarizer',
  },

  {
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
    image: makeProjectPreview(
      'movie',
      '#a855f7'
    ),
    liveDemo:
      'https://movie-recommendation-system-burhan.streamlit.app/',
    github:
      'https://github.com/burhan-arshad/movie-recommendation-system',
  },

  {
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
    image: makeProjectPreview(
      'pneumonia',
      '#9333ea'
    ),
    liveDemo:
      'https://pneumonia-detection-burhan.streamlit.app/',
    github:
      'https://github.com/burhan-arshad/pneumonia-detection-on-x-rays',
  },

  {
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
    liveDemo:
      'https://pearlessenceinteriors.com/',
    github: null,
    specialType: 'wordpress',
  },

  {
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
    liveDemo:
      'https://kadme.store/',
    github: null,
    specialType: 'shopify',
  },
];

const Project = ({ onCtaClick }) => {
  return (
    <section
      id="project"
      className="relative w-full bg-[#070711] text-white overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-purple-500" />

            <span className="font-mono text-xs tracking-[0.3em] text-purple-400">
              SYS.04 // PROJECTS
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9]">
            SELECTED
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600">
              PROJECTS.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm md:text-base text-gray-400 leading-relaxed">
            A selection of machine learning, deep learning, generative AI,
            computer vision, and full-stack projects built through
            hands-on experimentation and continuous learning.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">

          {projects.map((proj, index) => {
            const isSpecial = proj.specialType;

            if (isSpecial === 'wordpress') {
              return (
                <article
                  key={proj.name}
                  className="group relative overflow-hidden rounded-[2rem] border border-purple-500/20 bg-[#0b0b18] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-transparent to-fuchsia-950/20 pointer-events-none" />

                  <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">

                    <div className="lg:col-span-7 p-5 sm:p-6 md:p-8 lg:p-10 flex items-center">
                      <div className="relative w-full rounded-[1.5rem] border border-purple-400/25 bg-[#08080f] p-2 sm:p-3 shadow-[0_25px_70px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:border-purple-400/50 group-hover:shadow-[0_30px_90px_rgba(139,92,246,0.2)]">

                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">

                          <div className="relative z-20 h-9 sm:h-10 bg-black/90 backdrop-blur-md border-b border-white/10 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">

                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400/60" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400/60" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400/60" />

                            <div className="ml-2 sm:ml-4 flex-1 h-5 sm:h-6 rounded-md bg-white/5 border border-white/10 flex items-center px-2 sm:px-3 overflow-hidden">
                              <span className="text-[7px] sm:text-[8px] font-mono text-white/30 truncate">
                                pearlessenceinteriors.com
                              </span>
                            </div>
                          </div>

                          <div className="relative w-full bg-[#050509]">
                            <img
                              src={proj.image}
                              alt={proj.name}
                              className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/15 via-transparent to-fuchsia-500/10 pointer-events-none" />
                          </div>

                        </div>

                        <div className="absolute inset-0 rounded-[1.5rem] border border-white/5 pointer-events-none" />
                        <div className="absolute -inset-[1px] rounded-[1.6rem] border border-purple-500/10 pointer-events-none" />

                      </div>
                    </div>

                    <div className="lg:col-span-5 relative p-8 md:p-10 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">

                      <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-xs text-purple-400">
                          06
                        </span>

                        <div className="h-px w-8 bg-purple-500/50" />

                        <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500">
                          CLIENT WEBSITE
                        </span>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-tight">
                        {proj.title}
                      </h3>

                      <p className="mt-7 text-sm md:text-base text-gray-400 leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">

                        <a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.2)]"
                        >
                          Visit Website
                        </a>

                        <span className="inline-flex items-center px-5 py-3 rounded-full border border-white/10 text-xs font-mono text-white/40">
                          WORDPRESS
                        </span>

                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            if (isSpecial === 'shopify') {
              return (
                <article
                  key={proj.name}
                  className="group relative overflow-hidden rounded-[2rem] border border-pink-500/20 bg-[#0b0b18] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-950/25 via-transparent to-purple-950/30 pointer-events-none" />

                  <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">

                    <div className="lg:col-span-5 lg:order-1 relative p-8 md:p-10 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">

                      <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-xs text-pink-400">
                          07
                        </span>

                        <div className="h-px w-8 bg-pink-500/50" />

                        <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500">
                          ECOMMERCE PROJECT
                        </span>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-tight">
                        {proj.title}
                      </h3>

                      <p className="mt-7 text-sm md:text-base text-gray-400 leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">

                        <a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.2)]"
                        >
                          Visit Store
                        </a>

                        <span className="inline-flex items-center px-5 py-3 rounded-full border border-white/10 text-xs font-mono text-white/40">
                          SHOPIFY
                        </span>

                      </div>
                    </div>

                    <div className="lg:col-span-7 lg:order-2 p-5 sm:p-6 md:p-8 lg:p-10 flex items-center">
                      <div className="relative w-full rounded-[1.5rem] border border-pink-400/25 bg-[#08080f] p-2 sm:p-3 shadow-[0_25px_70px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:border-pink-400/50 group-hover:shadow-[0_30px_90px_rgba(236,72,153,0.18)]">

                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">

                          <div className="relative z-20 h-9 sm:h-10 bg-black/90 backdrop-blur-md border-b border-white/10 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">

                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400/60" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400/60" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400/60" />

                            <div className="ml-2 sm:ml-4 flex-1 h-5 sm:h-6 rounded-md bg-white/5 border border-white/10 flex items-center px-2 sm:px-3 overflow-hidden">
                              <span className="text-[7px] sm:text-[8px] font-mono text-white/30 truncate">
                                kadme.store
                              </span>
                            </div>
                          </div>

                          <div className="relative w-full bg-[#050509]">
                            <img
                              src={proj.image}
                              alt={proj.name}
                              className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-950/15 via-transparent to-purple-500/10 pointer-events-none" />
                          </div>

                        </div>

                        <div className="absolute inset-0 rounded-[1.5rem] border border-white/5 pointer-events-none" />
                        <div className="absolute -inset-[1px] rounded-[1.6rem] border border-pink-500/10 pointer-events-none" />

                      </div>
                    </div>

                  </div>
                </article>
              );
            }

            const isReversed = index % 2 !== 0;

            return (
              <article
                key={proj.name}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={
                    isReversed
                      ? 'lg:order-2'
                      : 'lg:order-1'
                  }
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-purple-500/20 bg-[#101021] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/30 via-transparent to-pink-950/20 z-10 pointer-events-none" />

                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] opacity-90 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-transparent transition-colors duration-500" />

                    <div className="absolute top-5 left-5 z-20">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-white/60 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
                        PROJECT_{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                  </div>
                </div>

                <div
                  className={
                    isReversed
                      ? 'lg:order-1'
                      : 'lg:order-2'
                  }
                >
                  <div className="flex items-center gap-3 mb-5">

                    <span className="font-mono text-xs text-purple-400">
                      0{index + 1}
                    </span>

                    <div className="h-px w-8 bg-purple-500/50" />

                    <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500">
                      CASE STUDY
                    </span>

                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="mt-7 text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">

                    {proj.liveDemo && (
                      <a
                        href={proj.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]"
                      >
                        Live Demo
                      </a>
                    )}

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 text-white text-sm font-semibold transition-all duration-300"
                      >
                        GitHub
                      </a>
                    )}

                  </div>
                </div>
              </article>
            );
          })}

        </div>

        <div className="max-w-7xl mx-auto mt-24 md:mt-32 flex justify-center">
          <a
            href="https://github.com/burhan-arshad24/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 rounded-full border border-purple-500/40 hover:border-purple-400 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-purple-300">
              VIEW MORE PROJECTS
            </span>

            <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;