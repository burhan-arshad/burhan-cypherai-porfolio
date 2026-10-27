import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_section/about_section.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind CSS',
  'WordPress',
  'Shopify',
];

const backendSkills = [
  'Python',
  'C++',
  'SQL',
  'PostgreSQL',
  'Supabase',
  'FastAPI',
  'Database Management',
];

const aiSkills = [
  'Machine Learning',
  'Deep Learning',
  'Generative AI',
  'Agentic AI',
  'NLP',
  'Computer Vision',
  'Scikit-learn',
  'TensorFlow',
  'Keras',
  'AI Applications',
];

const toolsSkills = [
  'NumPy',
  'Pandas',
  'Matplotlib',
  'Seaborn',
  'Jupyter',
  'Git',
  'GitHub',
  'VS Code',
];

const aboutWords = [
  { text: "I'm" },
  {
    text: 'Burhan',
    className:
      'font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-fuchsia-400',
  },
  { text: 'Arshad.' },
  { text: 'A' },
  { text: 'Computer' },
  { text: 'Science' },
  { text: 'student' },
  { text: 'and' },
  { text: 'aspiring' },
  { text: 'AI/ML' },
  { text: 'Engineer' },
  { text: 'who' },
  { text: 'enjoys' },
  { text: 'turning' },
  { text: 'ideas' },
  { text: 'into' },
  { text: 'practical,' },
  { text: 'intelligent' },
  { text: 'systems.' },

  { text: 'My' },
  { text: 'primary' },
  { text: 'focus' },
  { text: 'is' },
  { text: 'on' },

  {
    text: 'Machine Learning,',
    className: 'text-white font-medium',
  },
  {
    text: 'Deep Learning,',
    className: 'text-white font-medium',
  },
  {
    text: 'Generative AI,',
    className: 'text-white font-medium',
  },
  {
    text: 'Agentic AI,',
    className: 'text-white font-medium',
  },
  {
    text: 'NLP,',
    className: 'text-white font-medium',
  },
  {
    text: 'Computer Vision.',
    className: 'text-white font-medium',
  },
  { text: 'and' },
  { text: 'AI-powered' },
  { text: 'applications.' },

  { text: 'I' },
  { text: 'believe' },
  { text: 'in' },
  { text: 'learning' },
  { text: 'by' },
  { text: 'building' },
  { text: 'rather' },
  { text: 'than' },
  { text: 'only' },
  { text: 'studying' },
  { text: 'theory.' },

  { text: 'I' },
  { text: 'continuously' },
  { text: 'experiment' },
  { text: 'with' },
  { text: 'new' },
  { text: 'models,' },
  { text: 'technologies,' },
  { text: 'and' },
  { text: 'ideas' },
  { text: 'through' },
  { text: 'hands-on' },
  { text: 'projects.' },

  { text: 'Alongside' },
  { text: 'AI,' },
  { text: 'I' },
  { text: 'also' },
  { text: 'have' },
  { text: 'experience' },
  { text: 'with' },
  { text: 'software' },
  { text: 'development,' },
  { text: 'FastAPI,' },
  { text: 'eCommerce,' },
  { text: 'databases,' },
  { text: 'and' },
  { text: 'game' },
  { text: 'development.' },
];

const profileStats = [
  {
    label: 'CURRENT STATUS',
    value: '4TH SEMESTER',
    detail: 'Computer Science',
  },
  {
    label: 'PRIMARY FOCUS',
    value: 'AI / ML',
    detail: 'Gen AI • Agentic AI',
  },
  {
    label: 'LEARNING PATH',
    value: 'ML → DL → NLP',
    detail: 'CV → Gen AI → Agentic AI',
  },
  {
    label: 'APPROACH',
    value: 'BUILD FIRST',
    detail: 'Learn by doing',
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const philosophyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const headings = [
        introMobileRef.current,
        introDesktopRef.current,
      ];

      headings.forEach((heading) => {
        if (!heading) return;

        gsap.fromTo(
          heading,
          {
            y: 100,
            opacity: 0,
            filter: 'blur(10px)',
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
            rotationY: -12,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (textRef.current) {
        const words =
          textRef.current.querySelectorAll('.word');

        gsap.fromTo(
          words,
          {
            color: '#52525b',
            opacity: 0.2,
          },
          {
            color: '#ffffff',
            opacity: 1,
            stagger: 0.06,
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
              end: 'bottom 45%',
              scrub: true,
            },
          }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll('.stat-card'),
          {
            y: 60,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (philosophyRef.current) {
        gsap.fromTo(
          philosophyRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: philosophyRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        min-h-screen
        bg-[#070711]
        text-white
        pt-24
        pb-0
        px-6
        md:px-12
        lg:px-16
        overflow-hidden
      "
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className="
            absolute
            top-[15%]
            left-[-10%]
            w-[450px]
            h-[450px]
            rounded-full
            bg-purple-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            top-[40%]
            right-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-fuchsia-600/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[15%]
            left-[35%]
            w-[350px]
            h-[350px]
            rounded-full
            bg-violet-600/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(139,92,246,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.5)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">

          <div className="flex items-center gap-3">

            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />

            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-purple-400 uppercase">
              SYS.01 // ABOUT
            </span>

          </div>

          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-white/40 tracking-widest">
            <span className="px-2 py-1 border border-white/10 rounded bg-black/20">
              AI / ML
            </span>

            <span className="px-2 py-1 border border-white/10 rounded bg-black/20">
              GEN AI
            </span>

            <span className="px-2 py-1 border border-white/10 rounded bg-black/20">
              AGENTIC AI
            </span>

            <span className="px-2 py-1 border border-white/10 rounded bg-black/20">
              SOFTWARE
            </span>

          </div>

        </div>

        {/* Mobile Intro */}
        <h2
          ref={introMobileRef}
          className="
            lg:hidden
            text-center
            text-[20vw]
            md:text-[8rem]
            font-black
            tracking-tighter
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-white
            via-purple-300
            to-purple-900
            drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]
            leading-none
            mb-10
          "
        >
          About
        </h2>

        {/* Main About Layout */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-10
            items-center
          "
        >

          {/* Left Image */}
          <div
            ref={imageRef}
            className="
              lg:col-span-5
              flex
              justify-center
              lg:justify-start
              perspective-[1200px]
            "
          >

            <div className="relative group">

              {/* Outer Glow */}
              <div
                className="
                  absolute
                  -inset-5
                  bg-gradient-to-r
                  from-purple-600/30
                  via-fuchsia-500/20
                  to-violet-600/10
                  rounded-[2rem]
                  blur-3xl
                  opacity-70
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                "
              />

              {/* Corner Frame */}
              <div
                className="
                  absolute
                  -inset-2
                  rounded-[1.7rem]
                  border
                  border-purple-500/20
                  pointer-events-none
                "
              />

              <div
                className="
                  relative
                  p-3
                  bg-[#0d1020]/90
                  backdrop-blur-2xl
                  rounded-3xl
                  border
                  border-purple-500/30
                  shadow-[0_40px_80px_rgba(0,0,0,0.7)]
                  overflow-hidden
                "
              >

                {/* Image Tag */}
                <div
                  className="
                    absolute
                    top-6
                    left-6
                    z-20
                    px-3
                    py-1.5
                    bg-purple-600
                    text-white
                    font-mono
                    text-[9px]
                    font-bold
                    tracking-[0.18em]
                    rounded
                    shadow-[0_0_25px_rgba(139,92,246,0.5)]
                  "
                >
                  AI / ML DEVELOPER
                </div>

                <video
                  src={aboutImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                    relative
                    w-64
                    md:w-80
                    lg:w-[390px]
                    max-w-full
                    object-contain
                    rounded-2xl
                    drop-shadow-[0_20px_50px_rgba(139,92,246,0.3)]
                    transition-transform
                    duration-700
                    group-hover:scale-[1.025]
                  "
                />

                {/* Bottom Image Readout */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2
                    bg-[#070711]/80
                    backdrop-blur-md
                    border
                    border-white/10
                    rounded-lg
                  "
                >
                  <span className="font-mono text-[8px] tracking-widest text-purple-300">
                    BURHAN ARSHAD
                  </span>

                  <span className="font-mono text-[8px] tracking-widest text-white/40">
                    ONLINE
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="
              lg:col-span-7
              flex
              flex-col
              justify-center
              space-y-7
            "
          >

            {/* Desktop Title */}
            <div className="hidden lg:flex items-end justify-between">

              <h2
                ref={introDesktopRef}
                className="
                  text-[8rem]
                  xl:text-[10rem]
                  font-black
                  tracking-tighter
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-b
                  from-white
                  via-purple-300
                  to-purple-900
                  drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]
                  leading-[0.8]
                "
              >
                About
              </h2>

              <span className="font-mono text-xs text-white/30 pb-3">
                [ 01 / 05 ]
              </span>

            </div>

            {/* Description Card */}
            <div
              className="
                relative
                bg-[#0d1020]/70
                backdrop-blur-2xl
                p-6
                md:p-9
                rounded-2xl
                border
                border-purple-500/20
                shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                overflow-hidden
                group
              "
            >

              {/* Card Accent */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-24
                  h-px
                  bg-gradient-to-r
                  from-purple-500
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  w-32
                  h-px
                  bg-gradient-to-l
                  from-fuchsia-500/50
                  to-transparent
                "
              />

              <p
                ref={textRef}
                className="
                  text-gray-300
                  text-base
                  md:text-lg
                  lg:text-[1.08rem]
                  leading-[1.9]
                  font-light
                "
              >
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>

                    <span
                      className={`word ${
                        wordObj.className || ''
                      }`}
                    >
                      {wordObj.text}
                    </span>

                    {index < aboutWords.length - 1 && ' '}

                  </React.Fragment>
                ))}
              </p>

            </div>

            {/* Philosophy */}
            <div
              ref={philosophyRef}
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-5
                px-1
              "
            >

              <div>
                <p className="font-mono text-[9px] tracking-[0.3em] text-purple-400 uppercase mb-2">
                  Philosophy
                </p>

                <h3 className="text-xl md:text-2xl font-black tracking-tight">
                  Learn. Build. Break. Improve. Deploy.
                </h3>
              </div>

              <div className="hidden sm:block w-20 h-px bg-gradient-to-r from-purple-500 to-transparent" />

            </div>

            {/* Download Buttons */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">

  {/* Download CV */}
  <a
    href="/documents/Burhan_Arshad_CV.pdf"
    download="Burhan_Arshad_CV.pdf"
    aria-label="Download Burhan Arshad's CV as PDF"
    className="
      group relative isolate
      flex items-center gap-4
      min-h-[108px] p-4 sm:p-5
      overflow-hidden rounded-2xl
      border border-purple-400/40
      bg-gradient-to-br from-purple-600/25 via-[#0d1020] to-[#0d1020]
      shadow-[0_0_25px_rgba(139,92,246,0.12)]
      transition-all duration-500 ease-out
      hover:-translate-y-1.5
      hover:border-purple-400/80
      hover:shadow-[0_12px_40px_rgba(139,92,246,0.25)]
      focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-purple-400
      focus-visible:ring-offset-2
      focus-visible:ring-offset-[#070711]
    "
  >
    {/* Animated background accent */}
    <span
      aria-hidden="true"
      className="
        absolute inset-y-0 left-0 w-1
        bg-gradient-to-b from-purple-300 via-purple-500 to-fuchsia-500
        transition-all duration-500
        group-hover:w-full group-hover:opacity-[0.06]
      "
    />

    {/* Decorative glow */}
    <span
      aria-hidden="true"
      className="
        absolute -right-8 -top-10
        h-28 w-28 rounded-full
        bg-purple-500/15 blur-3xl
        transition-all duration-700
        group-hover:scale-150 group-hover:bg-purple-500/25
      "
    />

    {/* Document icon */}
    <span
      className="
        relative z-10 flex h-14 w-12 shrink-0
        items-center justify-center
        rounded-xl border border-purple-300/30
        bg-purple-500/15 text-purple-300
        transition-all duration-500
        group-hover:border-purple-300/60
        group-hover:bg-purple-500/25
        group-hover:scale-105
      "
    >
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    </span>

    {/* Button text */}
    <span className="relative z-10 flex min-w-0 flex-1 flex-col gap-1.5">
      <span className="font-mono text-[9px] tracking-[0.22em] text-purple-300/80">
        DOCUMENT // 01
      </span>

      <span className="text-base sm:text-lg font-bold tracking-tight text-white">
        Download CV
      </span>

      <span className="text-[11px] text-gray-400 transition-colors duration-300 group-hover:text-purple-200">
        Professional profile · PDF
      </span>
    </span>

    {/* Download action icon */}
    <span
      className="
        relative z-10 flex h-9 w-9 shrink-0
        items-center justify-center
        rounded-full border border-purple-400/30
        bg-purple-500/10 text-purple-300
        transition-all duration-500
        group-hover:translate-y-0.5
        group-hover:border-purple-300/60
        group-hover:bg-purple-500/25
        group-hover:text-white
      "
    >
      <svg
        className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 19h14" />
      </svg>
    </span>
  </a>

  {/* Download Resume */}
  <a
    href="/documents/Burhan_Arshad_Resume.pdf"
    download="Burhan_Arshad_Resume.pdf"
    aria-label="Download Burhan Arshad's Resume as PDF"
    className="
      group relative isolate
      flex items-center gap-4
      min-h-[108px] p-4 sm:p-5
      overflow-hidden rounded-2xl
      border border-fuchsia-400/25
      bg-gradient-to-br from-fuchsia-500/10 via-[#0d1020] to-[#0d1020]
      shadow-[0_0_25px_rgba(217,70,239,0.05)]
      transition-all duration-500 ease-out
      hover:-translate-y-1.5
      hover:border-fuchsia-400/60
      hover:shadow-[0_12px_40px_rgba(217,70,239,0.16)]
      focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-fuchsia-400
      focus-visible:ring-offset-2
      focus-visible:ring-offset-[#070711]
    "
  >
    {/* Animated background accent */}
    <span
      aria-hidden="true"
      className="
        absolute inset-y-0 left-0 w-1
        bg-gradient-to-b from-fuchsia-300 via-fuchsia-500 to-purple-500
        transition-all duration-500
        group-hover:w-full group-hover:opacity-[0.06]
      "
    />

    {/* Decorative glow */}
    <span
      aria-hidden="true"
      className="
        absolute -right-8 -top-10
        h-28 w-28 rounded-full
        bg-fuchsia-500/10 blur-3xl
        transition-all duration-700
        group-hover:scale-150 group-hover:bg-fuchsia-500/20
      "
    />

    {/* Resume icon */}
    <span
      className="
        relative z-10 flex h-14 w-12 shrink-0
        items-center justify-center
        rounded-xl border border-fuchsia-300/25
        bg-fuchsia-500/10 text-fuchsia-300
        transition-all duration-500
        group-hover:border-fuchsia-300/50
        group-hover:bg-fuchsia-500/20
        group-hover:scale-105
      "
    >
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="9" r="2.5" />
        <path d="M8 16c.8-1.5 2.1-2.2 4-2.2s3.2.7 4 2.2" />
      </svg>
    </span>

    {/* Button text */}
    <span className="relative z-10 flex min-w-0 flex-1 flex-col gap-1.5">
      <span className="font-mono text-[9px] tracking-[0.22em] text-fuchsia-300/80">
        DOCUMENT // 02
      </span>

      <span className="text-base sm:text-lg font-bold tracking-tight text-white">
        Download Resume
      </span>

      <span className="text-[11px] text-gray-400 transition-colors duration-300 group-hover:text-fuchsia-200">
        Experience overview · PDF
      </span>
    </span>

    {/* Download action icon */}
    <span
      className="
        relative z-10 flex h-9 w-9 shrink-0
        items-center justify-center
        rounded-full border border-fuchsia-400/25
        bg-fuchsia-500/10 text-fuchsia-300
        transition-all duration-500
        group-hover:translate-y-0.5
        group-hover:border-fuchsia-300/50
        group-hover:bg-fuchsia-500/20
        group-hover:text-white
      "
    >
      <svg
        className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 19h14" />
      </svg>
    </span>
  </a>

</div>

          </div>
        </div>

        {/* Technical Profile */}
        <div
          ref={statsRef}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
            mt-16
            lg:mt-20
          "
        >

          {profileStats.map((stat, index) => (
            <div
              key={index}
              className="
                stat-card
                group
                relative
                p-5
                bg-[#0b0b18]/80
                backdrop-blur-xl
                border
                border-white/10
                rounded-xl
                overflow-hidden
                hover:border-purple-500/40
                hover:bg-purple-500/[0.04]
                transition-all
                duration-500
              "
            >

              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-12
                  h-px
                  bg-purple-500
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              />

              <div className="flex items-center justify-between mb-4">

                <span className="font-mono text-[9px] tracking-[0.2em] text-white/40">
                  {stat.label}
                </span>

                <span className="font-mono text-[9px] text-purple-400">
                  0{index + 1}
                </span>

              </div>

              <h4 className="text-lg font-black tracking-tight text-white">
                {stat.value}
              </h4>

              <p className="text-xs text-white/40 mt-1">
                {stat.detail}
              </p>

            </div>
          ))}

        </div>

        {/* Learning Path */}
        <div className="mt-5 p-5 md:p-6 bg-[#0b0b18]/70 border border-purple-500/10 rounded-xl">

          <div className="flex flex-col md:flex-row md:items-center gap-5">

            <div className="flex items-center gap-3 shrink-0">

              <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />

              <span className="font-mono text-[9px] tracking-[0.25em] text-white/40 uppercase">
                Current Learning Path
              </span>

            </div>

            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-purple-500/30 via-white/10 to-transparent" />

            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-mono">

              <span className="text-purple-300">
                MACHINE LEARNING
              </span>

              <span className="text-white/20">→</span>

              <span className="text-purple-300">
                DEEP LEARNING
              </span>

              <span className="text-white/20">→</span>

              <span className="text-purple-300">
                GENERATIVE AI
              </span>

              <span className="text-white/20">→</span>

              <span className="text-pink-300">
                AGENTIC AI
              </span>

              <span className="text-white/20">→</span>

              <span className="text-pink-300">
                NLP
              </span>

              <span className="text-white/20">→</span>

              <span className="text-pink-300">
                COMPUTER VISION
              </span>

              <span className="text-white/20">→</span>

              <span className="text-white/70">
                AI APPLICATIONS
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Skills Marquee */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          border-t
          border-purple-500/10
          bg-[#0b0b18]/90
          backdrop-blur-xl
          py-4
          mt-16
          lg:mt-20
          -mx-6
          md:-mx-12
          lg:-mx-16
        "
      >

        {/* Marquee Label */}
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 mb-3">

          <span className="font-mono text-[9px] tracking-[0.3em] text-purple-400 uppercase">
            Technical Stack
          </span>

          <span className="font-mono text-[9px] tracking-widest text-white/30">
            // SYSTEM CAPABILITIES
          </span>

        </div>

        {/* Row 1 */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">

          <div className="flex animate-marquee w-max">

            {[
              ...frontendSkills,
              ...frontendSkills,
              ...frontendSkills,
              ...frontendSkills,
            ].map((item, i) => (

              <div
                key={`front-${i}`}
                className="flex items-center"
              >

                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">
                  {item}
                </span>

                <span className="text-purple-500 font-bold px-2 md:px-4">
                  .
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden whitespace-nowrap">

          <div className="flex animate-marquee-reverse w-max">

            {[
              ...backendSkills,
              ...backendSkills,
              ...backendSkills,
              ...backendSkills,
            ].map((item, i) => (

              <div
                key={`back-${i}`}
                className="flex items-center"
              >

                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">
                  {item}
                </span>

                <span className="text-pink-500 font-bold px-2 md:px-4">
                  .
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Row 3 */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">

          <div className="flex animate-marquee w-max">

            {[
              ...aiSkills,
              ...aiSkills,
              ...aiSkills,
              ...aiSkills,
            ].map((item, i) => (

              <div
                key={`ai-${i}`}
                className="flex items-center"
              >

                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">
                  {item}
                </span>

                <span className="text-purple-500 font-bold px-2 md:px-4">
                  .
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Row 4 */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">

          <div className="flex animate-marquee-reverse w-max">

            {[
              ...toolsSkills,
              ...toolsSkills,
              ...toolsSkills,
              ...toolsSkills,
            ].map((item, i) => (

              <div
                key={`tools-${i}`}
                className="flex items-center"
              >

                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">
                  {item}
                </span>

                <span className="text-pink-500 font-bold px-2 md:px-4">
                  .
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;