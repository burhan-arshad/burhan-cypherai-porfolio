import React from 'react';

const ComingSoon = ({ onBack }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#040a06] text-white w-full overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-pink-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        
        <p className="font-mono text-xs md:text-sm tracking-[0.35em] text-purple-400 uppercase mb-6">
          SYS.06 // STATUS
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest mb-6 text-center px-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-800">
          Coming Soon
        </h1>

        <p className="text-gray-400 text-sm md:text-base text-center max-w-lg px-6 leading-relaxed mb-10">
          More AI, machine learning, software, and intelligent system
          projects are currently in development.
        </p>

        <button
          onClick={onBack}
          className="cursor-pointer px-8 py-3 rounded-full border border-purple-500 text-[#040a06] bg-purple-600 font-bold text-sm md:text-base hover:bg-purple-700 hover:border-purple-400 transition-colors shadow-[0_0_25px_rgba(125,255,0,0.25)]"
        >
          Go Back
        </button>

      </div>

      {/* Technical Readout */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-gray-600 uppercase">
          BURHAN ARSHAD // AI & MACHINE LEARNING
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;