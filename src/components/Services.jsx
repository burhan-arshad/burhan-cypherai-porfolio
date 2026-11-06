import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    number: "01",
    title: "Machine Learning Solutions",
    text: "Building practical machine learning solutions for classification, regression, prediction, and data-driven applications using modern ML techniques and evaluation workflows.",
    tag: "MACHINE LEARNING",
    gradient: "from-[#0d2330] via-[#0c1e29] to-[#07141c]"
  },
  {
    number: "02",
    title: "NLP Applications",
    text: "Developing NLP applications for text classification, sentiment analysis, spam detection, and text preprocessing using techniques such as TF-IDF and machine learning models.",
    tag: "NLP & LANGUAGE AI",
    gradient: "from-[#0b1f2b] via-[#0c1e29] to-[#07141c]"
  },
  {
    number: "03",
    title: "AI-Powered Applications",
    text: "Integrating artificial intelligence and machine learning into real-world applications to create practical, intelligent, and data-driven software solutions.",
    tag: "AI & INTELLIGENCE",
    gradient: "from-[#0e2634] via-[#0c1e29] to-[#07141c]"
  },
  {
    number: "04",
    title: "Data Analysis & Visualization",
    text: "Cleaning and analyzing datasets, performing exploratory data analysis, creating visualizations, and extracting meaningful patterns to support better decisions.",
    tag: "DATA & ANALYTICS",
    gradient: "from-[#0d2330] via-[#0c1e29] to-[#07141c]"
  },
  {
    number: "05",
    title: "Custom Software Development",
    text: "Developing custom software solutions for specific business and technical requirements using modern development practices and database-driven architectures.",
    tag: "SOFTWARE DEVELOPMENT",
    gradient: "from-[#0b1f2b] via-[#0c1e29] to-[#07141c]"
  },
  {
    number: "06",
    title: "eCommerce Solutions",
    text: "Building and optimizing eCommerce solutions using Shopify and WordPress for real-world brands, online businesses, and digital commerce requirements.",
    tag: "ECOMMERCE",
    gradient: "from-[#0e2634] via-[#0c1e29] to-[#07141c]"
  }
];

const Expertise = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (!isMobile) {
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.92 - index * 0.025,
          y: -15 - index * 8,
          filter: "blur(6px)",
          opacity: 0.4,
          scrollTrigger: {
            trigger: card,
            start: `top ${90 + index * 20}px`,
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;

      const listener = (e) => handleMouseMove(e, card);

      card.addEventListener('mousemove', listener);

      card._mouseMoveListener = listener;
    });

    return () => {
      cards.forEach((card) => {
        if (card?._mouseMoveListener) {
          card.removeEventListener('mousemove', card._mouseMoveListener);
        }
      });

      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full bg-[#06121a] text-white py-20 px-6 md:px-12 select-none overflow-hidden"
    >

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#3aa9c4]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">

          <div className="space-y-3 max-w-xl">

            {/* Section Tab */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0c1e29]/90 backdrop-blur-xl border border-[#ff6b57]/30 text-[11px] font-mono uppercase tracking-widest text-white shadow-[0_0_25px_rgba(255,107,87,0.08)]">

              

              <span className="text-[#ffb5a6] font-bold">
                SYS.02
              </span>

              <span className="text-white/25">
                |
              </span>

              <span className="text-[#86a0ab]">
                SERVICES
              </span>

            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">

              AI & SOFTWARE <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b57] via-[#ffb5a6] to-[#52c9e0] drop-shadow-[0_0_25px_rgba(255,107,87,0.3)]">
                SERVICES.
              </span>

            </h2>

          </div>

          <p className="text-[#86a0ab] text-xs md:text-sm font-light leading-relaxed max-w-xs">
            Building practical AI, data, software, and eCommerce solutions focused on real-world requirements and intelligent systems.
          </p>

        </div>

        {/* Stacking Cards */}
        <div className="relative flex flex-col gap-8 pb-20">

          {expertiseData.map((item, index) => (

            <div
              key={index}
              ref={addToRefs}
              className={`sticky w-full p-6 md:p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[230px] md:min-h-[250px] transform-gpu transition-all overflow-hidden group hover:border-[#ff6b57]/50`}
              style={{
                zIndex: index + 1,
                top: `${95 + index * 16}px`
              }}
            >

              {/* Dynamic Mouse Spotlight */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: 'radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(255,107,87,0.14), transparent 70%)'
                }}
              ></div>

              {/* Accent Stripe */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-[#ff6b57] to-transparent z-10 shadow-[0_0_10px_rgba(255,107,87,0.35)]"></div>

              {/* Card Header */}
              <div className="flex items-center justify-between w-full mb-4 relative z-10">

                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ffb5a6] px-2.5 py-0.5 rounded bg-[#ff6b57]/[0.08] border border-[#ff6b57]/25 shadow-[inset_0_0_12px_rgba(255,107,87,0.04)]">
                  {item.tag}
                </span>

                <span className="text-2xl md:text-3xl font-mono font-black text-white/[0.12]">
                  {item.number}
                </span>

              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center my-auto relative z-10">

                <div className="lg:col-span-5">

                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-[#ffb5a6] transition-colors duration-300">
                    {item.title}
                  </h3>

                </div>

                <div className="lg:col-span-7">

                  <p className="text-xs md:text-sm text-[#86a0ab] font-light leading-relaxed">
                    {item.text}
                  </p>

                </div>

              </div>

              {/* Corner Dot */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-[#ff6b57] group-hover:shadow-[0_0_10px_#ff6b57] z-10 transition-all"></div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Expertise;