import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section className="h-full overflow-y-auto pb-28 pt-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm tracking-wider mb-2">
            My Academic Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-accent">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="flex items-start gap-6">
              {/* Logo placeholder */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                {edu.logo ? (
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-8 h-8 text-gray-500 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 font-medium mt-1">
                  {edu.institution}
                </p>
                <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                {edu.description && (
                  <p className="text-gray-400 text-sm mt-2">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
