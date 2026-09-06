import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi2'
import { personalInfo, socialLinks } from '../data/portfolioData'

export default function Home({ onNavigate }) {
  return (
    <section className="relative h-full flex items-center overflow-hidden px-6 md:px-16 lg:px-24">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Social sidebar — desktop */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-white transition-colors"
        >
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-white transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <div className="w-px h-20 bg-accent/40 mt-2" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-10">
        {/* Left — text content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <p className="text-accent font-medium text-lg mb-2">
            {personalInfo.greeting}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-8">
            {personalInfo.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            {/* <a
              href={personalInfo.resumeFile}
              download
              className="px-8 py-3 border border-accent/50 text-accent rounded hover:bg-accent/10 transition-all font-medium"
            >
              Download CV
            </a> */}
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-accent text-navy-900 rounded hover:bg-accent/90 transition-all font-semibold cursor-pointer"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile social links */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right — image placeholder */}
        <div className="flex-shrink-0 z-10">
          <div className="relative">
            <div className="w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl bg-navy-600 border-2 border-accent/20 overflow-hidden flex items-center justify-center rotate-3 shadow-2xl shadow-accent/10">
              {/*
                Replace this placeholder with your image:
                <img src="/your-photo.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
              */}
              <div className="text-center text-gray-500">
                <svg
                  className="w-16 h-16 mx-auto mb-3 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p className="text-sm">Add your photo</p>
              </div>
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-accent/10 -z-10 rotate-3" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => onNavigate('about')}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-500 hover:text-accent transition-colors text-sm cursor-pointer"
      >
        <span>Navigate Tabs</span>
        <HiArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
