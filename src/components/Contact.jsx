import React from 'react';
import contactBgVideo from '../assets/contact_assets/contact_bg.mp4';

const ContactSection = () => {
    return (
        <div
            id="contact"
            className="relative min-h-screen text-white font-sans flex items-center overflow-hidden [clip-path:inset(0)] bg-[#06121a]"
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="fixed top-0 left-0 w-full h-[100vh] object-cover z-0 opacity-50"
            >
                <source src={contactBgVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-[#06121a]/75 z-0 pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-transparent to-fuchsia-950/20 z-0 pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">

                {/* Left Side */}
                <div className="w-full lg:w-5/12 flex flex-col justify-start">

                    <div className="mb-4">
                        <span className="font-mono text-xs tracking-[0.3em] text-purple-400 uppercase">
                            SYS.05 // CONTACT
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-900 drop-shadow-2xl mb-16 uppercase">
                        Get in touch
                    </h2>

                    <div className="flex flex-col gap-10">

                        {/* Email */}
                        <div className="hidden md:block">
                            <p className="text-purple-400 text-xs tracking-widest uppercase mb-2">
                                Email
                            </p>

                            <a
                                href="mailto:burhanarshad707@gmail.com"
                                className="text-lg md:text-xl tracking-wide text-white hover:text-purple-300 transition-colors"
                            >
                                burhanarshad707@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="hidden md:block">
                            <p className="text-purple-400 text-xs tracking-widest uppercase mb-2">
                                Phone
                            </p>

                            <a
                                href="tel:03147089020"
                                className="text-lg md:text-xl tracking-wide text-white hover:text-purple-300 transition-colors"
                            >
                                03147089020
                            </a>
                        </div>

                        {/* Location */}
                        <div className="hidden md:block">
                            <p className="text-purple-400 text-xs tracking-widest uppercase mb-2">
                                Location
                            </p>

                            <p className="text-lg md:text-xl tracking-wide text-white">
                                Gujranwala, Pakistan
                            </p>
                        </div>

                        {/* Socials */}
                        <div className="mt-4 flex flex-col items-center md:items-start">

                            <p className="text-purple-400 text-xs tracking-widest uppercase mb-4">
                                Follow
                            </p>

                            <div className="flex items-center justify-center md:justify-start gap-3">

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/https_jerry24/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                        />

                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                                        <line
                                            x1="17.5"
                                            x2="17.51"
                                            y1="6.5"
                                            y2="6.5"
                                        />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/burhan-arshad-816473324/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />

                                        <rect
                                            width="4"
                                            height="12"
                                            x="2"
                                            y="9"
                                        />

                                        <circle
                                            cx="4"
                                            cy="4"
                                            r="2"
                                        />
                                    </svg>
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/burhan-arshad24"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </a>

                                {/* Upwork */}
                                <a
                                    href="https://www.upwork.com/freelancers/~01ea7bfad0ddb63528"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Upwork"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-colors"
                                >
                                    <span className="text-xs font-bold text-white">
                                        UP
                                    </span>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/923147089020"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-purple-500/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 0 1-9 9 8.5 8.5 0 0 1-4.06-1.03L3 21l1.53-4.76A8.5 8.5 0 1 1 21 11.5z" />

                                        <path d="M8 10.5c.5 2 2 3.5 4 4l1.2-1.2c.2-.2.5-.25.75-.1l1.5.75c.3.15.4.5.25.8-.3.3-.6.6-1 .6-3.5 0-6.5-3-6.5-6.5 0-.7.5-1.3 1.1-1.6.3-.15.65-.05.8.25l.75 1.5c.15.25.1.55-.1.75L8 10.5z" />
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full lg:w-7/12 flex flex-col lg:pt-4">

                    <form
                        action="https://formsubmit.co/burhanarshad707@gmail.com"
                        method="POST"
                        className="flex flex-col gap-5 w-full"
                    >

                        {/* FormSubmit Settings */}
                        <input
                            type="hidden"
                            name="_subject"
                            value="New Portfolio Contact Message"
                        />

                        <input
                            type="hidden"
                            name="_template"
                            value="table"
                        />

                        <input
                            type="hidden"
                            name="_captcha"
                            value="false"
                        />

                        <input
                            type="hidden"
                            name="_next"
                            value="https://your-domain.com/#contact"
                        />

                        {/* Name + Email */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">

                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">

                                <label className="text-xs text-gray-400 font-medium">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your full name"
                                    required
                                    autoComplete="name"
                                    className="w-full bg-[#0c1e29]/90 backdrop-blur-sm text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500/60 transition-all placeholder:text-gray-600 border border-purple-500/10 focus:border-purple-500/40"
                                />

                            </div>

                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">

                                <label className="text-xs text-gray-400 font-medium">
                                    Email address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email address"
                                    required
                                    autoComplete="email"
                                    className="w-full bg-[#0c1e29]/90 backdrop-blur-sm text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500/60 transition-all placeholder:text-gray-600 border border-purple-500/10 focus:border-purple-500/40"
                                />

                            </div>

                        </div>

                        {/* Phone + Subject */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">

                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">

                                <label className="text-xs text-gray-400 font-medium">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone number"
                                    autoComplete="tel"
                                    className="w-full bg-[#0c1e29]/90 backdrop-blur-sm text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500/60 transition-all placeholder:text-gray-600 border border-purple-500/10 focus:border-purple-500/40"
                                />

                            </div>

                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">

                                <label className="text-xs text-gray-400 font-medium">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="What would you like to discuss?"
                                    className="w-full bg-[#0c1e29]/90 backdrop-blur-sm text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500/60 transition-all placeholder:text-gray-600 border border-purple-500/10 focus:border-purple-500/40"
                                />

                            </div>

                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5 w-full">

                            <label className="text-xs text-gray-400 font-medium">
                                Message
                            </label>

                            <textarea
                                name="message"
                                placeholder="Tell me about your project, idea, or collaboration..."
                                rows="5"
                                required
                                className="w-full bg-[#0c1e29]/90 backdrop-blur-sm text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500/60 transition-all placeholder:text-gray-600 border border-purple-500/10 focus:border-purple-500/40 resize-none"
                            />

                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-[#1f0703] text-sm font-semibold rounded-lg py-3 hover:bg-purple-600 transition-colors mt-2 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,107,87,0.2)]"
                        >
                            Send Message
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactSection;