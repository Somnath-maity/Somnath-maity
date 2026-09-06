import { personalInfo } from '../data/portfolioData'

export default function About() {
  return (
    <section className="h-full overflow-y-auto pb-28 pt-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm tracking-wider mb-2">
            Get To Know
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-accent">
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image placeholder */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl bg-navy-600 border-2 border-accent/20 overflow-hidden flex items-center justify-center shadow-xl">
              {/*
                Replace with your image:
                <img src="/your-about-photo.jpg" alt="About me" className="w-full h-full object-cover" />
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
          </div>

          {/* Text content */}
          <div className="flex-1 space-y-6">
            {personalInfo.aboutText.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-300 leading-relaxed text-base lg:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
